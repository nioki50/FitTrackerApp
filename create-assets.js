const fs = require('fs');
const path = require('path');

// Créer un PNG simple (1x1 pixel de la couleur donnée, puis redimensionné)
// PNG minimal avec header et données pour une image de couleur unie

function createSimplePNG(width, height, r, g, b) {
  // PNG signature
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  // IHDR chunk
  const ihdr = Buffer.alloc(25);
  ihdr.writeUInt32BE(13, 0); // length
  ihdr.write('IHDR', 4);
  ihdr.writeUInt32BE(width, 8);
  ihdr.writeUInt32BE(height, 12);
  ihdr.writeUInt8(8, 16); // bit depth
  ihdr.writeUInt8(2, 17); // color type (RGB)
  ihdr.writeUInt8(0, 18); // compression
  ihdr.writeUInt8(0, 19); // filter
  ihdr.writeUInt8(0, 20); // interlace
  const ihdrCrc = crc32(ihdr.slice(4, 21));
  ihdr.writeUInt32BE(ihdrCrc, 21);

  // IDAT chunk (image data)
  const rawData = [];
  for (let y = 0; y < height; y++) {
    rawData.push(0); // filter byte
    for (let x = 0; x < width; x++) {
      rawData.push(r, g, b);
    }
  }

  const zlib = require('zlib');
  const compressed = zlib.deflateSync(Buffer.from(rawData));

  const idat = Buffer.alloc(compressed.length + 12);
  idat.writeUInt32BE(compressed.length, 0);
  idat.write('IDAT', 4);
  compressed.copy(idat, 8);
  const idatCrc = crc32(Buffer.concat([Buffer.from('IDAT'), compressed]));
  idat.writeUInt32BE(idatCrc, compressed.length + 8);

  // IEND chunk
  const iend = Buffer.from([0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130]);

  return Buffer.concat([signature, ihdr, idat, iend]);
}

// CRC32 calculation
function crc32(buf) {
  let crc = 0xffffffff;
  const table = [];
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let j = 0; j < 8; j++) {
      c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
    }
    table[i] = c;
  }
  for (let i = 0; i < buf.length; i++) {
    crc = table[(crc ^ buf[i]) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

const assetsDir = path.join(__dirname, 'assets');

// Couleur FitTracker: #e94560 (rouge/rose)
const iconColor = { r: 233, g: 69, b: 96 };
// Fond sombre: #0f0f1a
const bgColor = { r: 15, g: 15, b: 26 };

// Créer icon.png (1024x1024)
console.log('Creating icon.png...');
fs.writeFileSync(
  path.join(assetsDir, 'icon.png'),
  createSimplePNG(1024, 1024, iconColor.r, iconColor.g, iconColor.b)
);

// Créer adaptive-icon.png (1024x1024)
console.log('Creating adaptive-icon.png...');
fs.writeFileSync(
  path.join(assetsDir, 'adaptive-icon.png'),
  createSimplePNG(1024, 1024, iconColor.r, iconColor.g, iconColor.b)
);

// Créer splash.png (1284x2778)
console.log('Creating splash.png...');
fs.writeFileSync(
  path.join(assetsDir, 'splash.png'),
  createSimplePNG(1284, 2778, bgColor.r, bgColor.g, bgColor.b)
);

// Créer favicon.png (48x48)
console.log('Creating favicon.png...');
fs.writeFileSync(
  path.join(assetsDir, 'favicon.png'),
  createSimplePNG(48, 48, iconColor.r, iconColor.g, iconColor.b)
);

console.log('Done! Assets created in', assetsDir);
