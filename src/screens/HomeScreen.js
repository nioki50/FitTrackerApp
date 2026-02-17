import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  RefreshControl,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing } from '../theme/colors';
import { Button, StatsGrid, StatCard, CycleCard, Card, CardHeader } from '../components';
import { getCycle, getSessions, getSettings } from '../services/storage';
import { checkForUpdates } from '../services/updates';

export const HomeScreen = ({ navigation }) => {
  const [cycle, setCycle] = useState(null);
  const [stats, setStats] = useState({
    weekSessions: 0,
    totalVolume: 0,
    totalSessions: 0,
    streak: 0,
  });
  const [recentSessions, setRecentSessions] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [settings, setSettings] = useState(null);

  const loadData = async () => {
    const cycleData = await getCycle();
    const sessions = await getSessions();
    const settingsData = await getSettings();

    setCycle(cycleData);
    setSettings(settingsData);
    setRecentSessions(sessions.slice(0, 3));

    // Calculer les stats
    const now = new Date();
    const weekStart = new Date(now);
    weekStart.setDate(now.getDate() - now.getDay());
    weekStart.setHours(0, 0, 0, 0);

    const weekSessions = sessions.filter(s => new Date(s.date) >= weekStart);
    const weekVolume = weekSessions.reduce((sum, s) => sum + (s.volume || 0), 0);

    setStats({
      weekSessions: weekSessions.length,
      totalVolume: weekVolume,
      totalSessions: sessions.length,
      streak: calculateStreak(sessions),
    });
  };

  const calculateStreak = (sessions) => {
    if (sessions.length === 0) return 0;

    let streak = 0;
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const dates = sessions.map(s => {
      const d = new Date(s.date);
      d.setHours(0, 0, 0, 0);
      return d.getTime();
    });

    const uniqueDates = [...new Set(dates)].sort((a, b) => b - a);

    for (let i = 0; i < uniqueDates.length; i++) {
      const expectedDate = new Date(today);
      expectedDate.setDate(today.getDate() - i);
      expectedDate.setHours(0, 0, 0, 0);

      if (uniqueDates[i] === expectedDate.getTime()) {
        streak++;
      } else if (i === 0 && uniqueDates[i] === expectedDate.getTime() - 86400000) {
        // Hier compte aussi si pas encore entraîné aujourd'hui
        streak++;
      } else {
        break;
      }
    }

    return streak;
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await loadData();
    await checkForUpdates();
    setRefreshing(false);
  };

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, [])
  );

  useEffect(() => {
    // Vérifier les mises à jour au lancement
    checkForUpdates();
  }, []);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Bon matin !';
    if (hour < 18) return 'Bon après-midi !';
    return 'Bonsoir !';
  };

  const startWorkout = () => {
    if (cycle) {
      navigation.navigate('Workout', { cycle });
    } else {
      navigation.navigate('ProgramSelect');
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
    });
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          tintColor={colors.accentPrimary}
          colors={[colors.accentPrimary]}
        />
      }
    >
      <View style={styles.header}>
        <Text style={styles.title}>FitTracker Pro</Text>
        <Text style={styles.subtitle}>{getGreeting()}</Text>
      </View>

      <CycleCard
        cycle={cycle}
        onPress={() => navigation.navigate('ProgramSelect')}
      />

      {settings && (
        <View style={[
          styles.sessionsIndicator,
          stats.weekSessions >= settings.sessionsPerWeek && styles.sessionsReached
        ]}>
          <Text style={[
            styles.sessionsCount,
            stats.weekSessions >= settings.sessionsPerWeek && styles.sessionsCountReached
          ]}>
            {stats.weekSessions}/{settings.sessionsPerWeek}
          </Text>
          <Text style={styles.sessionsLabel}>séances cette semaine</Text>
        </View>
      )}

      <StatsGrid>
        <StatCard value={stats.weekSessions} label="Séances cette semaine" />
        <StatCard value={stats.totalVolume.toLocaleString()} label="Kg soulevés (semaine)" />
        <StatCard value={stats.totalSessions} label="Séances totales" />
        <StatCard value={stats.streak} label="Jours consécutifs" />
      </StatsGrid>

      <Button
        title="Commencer la séance"
        onPress={startWorkout}
        icon={<Ionicons name="play" size={24} color="white" />}
      />

      <View style={styles.secondaryButtons}>
        <Button
          title="Cardio"
          variant="secondary"
          onPress={() => navigation.navigate('Cardio')}
          style={styles.halfButton}
          icon={<Ionicons name="pulse" size={20} color={colors.textPrimary} />}
        />
        <Button
          title="CrossFit"
          variant="secondary"
          onPress={() => navigation.navigate('CrossFit')}
          style={[styles.halfButton, styles.crossfitButton]}
          icon={<Text style={{ fontSize: 18 }}>🏋️</Text>}
        />
      </View>

      <Card style={styles.recentCard}>
        <CardHeader title="Dernières séances" />
        {recentSessions.length > 0 ? (
          recentSessions.map((session, index) => (
            <View key={index} style={styles.sessionItem}>
              <Text style={styles.sessionDate}>{formatDate(session.date)}</Text>
              <Text style={styles.sessionTitle}>{session.name}</Text>
              <View style={styles.sessionStats}>
                <Text style={styles.sessionStat}>
                  <Ionicons name="time-outline" size={14} color={colors.textSecondary} />
                  {' '}{session.duration}
                </Text>
                <Text style={styles.sessionStat}>
                  <Ionicons name="barbell-outline" size={14} color={colors.textSecondary} />
                  {' '}{session.volume?.toLocaleString() || 0} kg
                </Text>
              </View>
            </View>
          ))
        ) : (
          <Text style={styles.noSessions}>Aucune séance enregistrée</Text>
        )}
      </Card>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Powered by{' '}
          <Text style={styles.footerLink}>nioki50</Text>
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgPrimary,
  },
  content: {
    padding: spacing.xl,
    paddingBottom: 100,
  },
  header: {
    alignItems: 'center',
    marginBottom: spacing.xxl,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.accentPrimary,
  },
  subtitle: {
    fontSize: 16,
    color: colors.textSecondary,
    marginTop: spacing.xs,
  },
  sessionsIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.bgTertiary,
    borderRadius: 12,
    padding: spacing.md,
    marginBottom: spacing.lg,
  },
  sessionsReached: {
    backgroundColor: 'rgba(0, 210, 106, 0.2)',
  },
  sessionsCount: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.textPrimary,
    marginRight: spacing.sm,
  },
  sessionsCountReached: {
    color: colors.success,
  },
  sessionsLabel: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  secondaryButtons: {
    flexDirection: 'row',
    marginTop: spacing.lg,
    gap: spacing.md,
  },
  halfButton: {
    flex: 1,
  },
  crossfitButton: {
    backgroundColor: colors.gradients.crossfit[0],
  },
  recentCard: {
    marginTop: spacing.xl,
  },
  sessionItem: {
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.bgTertiary,
  },
  sessionDate: {
    fontSize: 12,
    color: colors.textMuted,
    marginBottom: spacing.xs,
  },
  sessionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: spacing.sm,
  },
  sessionStats: {
    flexDirection: 'row',
    gap: spacing.lg,
  },
  sessionStat: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  noSessions: {
    textAlign: 'center',
    color: colors.textMuted,
    paddingVertical: spacing.xl,
  },
  footer: {
    alignItems: 'center',
    marginTop: spacing.xxl,
    paddingVertical: spacing.lg,
  },
  footerText: {
    fontSize: 11,
    color: colors.textMuted,
  },
  footerLink: {
    color: colors.accentTertiary,
  },
});
