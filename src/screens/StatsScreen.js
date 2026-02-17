import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  RefreshControl,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, borderRadius } from '../theme/colors';
import { StatsGrid, StatCard, Card, CardHeader } from '../components';
import { getSessions } from '../services/storage';

export const StatsScreen = ({ navigation }) => {
  const [sessions, setSessions] = useState([]);
  const [stats, setStats] = useState({
    totalSessions: 0,
    totalVolume: 0,
    totalTime: 0,
    cardioCount: 0,
    crossfitCount: 0,
  });
  const [refreshing, setRefreshing] = useState(false);

  const loadData = async () => {
    const allSessions = await getSessions();
    setSessions(allSessions);

    // Calculer les stats
    const musculationSessions = allSessions.filter(s => !s.type || s.type === 'musculation');
    const cardioSessions = allSessions.filter(s => s.type === 'cardio');
    const crossfitSessions = allSessions.filter(s => s.type === 'crossfit');

    const totalVolume = musculationSessions.reduce((sum, s) => sum + (s.volume || 0), 0);
    const totalTime = allSessions.reduce((sum, s) => sum + (s.durationSeconds || 0), 0);

    setStats({
      totalSessions: musculationSessions.length,
      totalVolume: Math.round(totalVolume / 1000), // En tonnes
      totalTime: Math.round(totalTime / 3600), // En heures
      cardioCount: cardioSessions.length,
      crossfitCount: crossfitSessions.length,
    });
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await loadData();
    setRefreshing(false);
  };

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, [])
  );

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
    });
  };

  const getSessionIcon = (session) => {
    if (session.type === 'cardio') return 'pulse';
    if (session.type === 'crossfit') return 'fitness';
    return 'barbell';
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
        />
      }
    >
      <View style={styles.header}>
        <Text style={styles.title}>Statistiques</Text>
        <Text style={styles.subtitle}>Suivi de ta progression</Text>
      </View>

      <StatsGrid>
        <StatCard value={stats.totalSessions} label="Séances totales" />
        <StatCard value={stats.totalVolume} label="Tonnes soulevées" />
        <StatCard value={stats.totalTime} label="Heures d'entraînement" />
        <StatCard value={stats.cardioCount} label="Sorties cardio" />
      </StatsGrid>

      <View style={styles.extraStats}>
        <StatCard value={stats.crossfitCount} label="Séances CrossFit" />
      </View>

      <Card>
        <CardHeader title="Historique" />
        {sessions.length > 0 ? (
          sessions.slice(0, 20).map((session, index) => (
            <View key={index} style={styles.historyItem}>
              <View style={styles.historyIcon}>
                <Ionicons
                  name={getSessionIcon(session)}
                  size={20}
                  color={colors.accentPrimary}
                />
              </View>
              <View style={styles.historyContent}>
                <Text style={styles.historyDate}>{formatDate(session.date)}</Text>
                <Text style={styles.historyTitle}>{session.name}</Text>
                <View style={styles.historyStats}>
                  <Text style={styles.historyStat}>
                    <Ionicons name="time-outline" size={12} color={colors.textMuted} />
                    {' '}{session.duration}
                  </Text>
                  {session.volume > 0 && (
                    <Text style={styles.historyStat}>
                      <Ionicons name="barbell-outline" size={12} color={colors.textMuted} />
                      {' '}{session.volume?.toLocaleString()} kg
                    </Text>
                  )}
                  {session.distance && (
                    <Text style={styles.historyStat}>
                      <Ionicons name="map-outline" size={12} color={colors.textMuted} />
                      {' '}{session.distance} km
                    </Text>
                  )}
                </View>
              </View>
            </View>
          ))
        ) : (
          <Text style={styles.noData}>Aucune séance enregistrée</Text>
        )}
      </Card>
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
  extraStats: {
    flexDirection: 'row',
    marginBottom: spacing.xl,
  },
  historyItem: {
    flexDirection: 'row',
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.bgTertiary,
  },
  historyIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.bgTertiary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },
  historyContent: {
    flex: 1,
  },
  historyDate: {
    fontSize: 12,
    color: colors.textMuted,
    marginBottom: spacing.xs,
  },
  historyTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: spacing.sm,
  },
  historyStats: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.md,
  },
  historyStat: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  noData: {
    textAlign: 'center',
    color: colors.textMuted,
    paddingVertical: spacing.xxl,
  },
});
