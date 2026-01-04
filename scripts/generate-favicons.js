const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sourcePath = path.join(__dirname, '../assets/favicon.png');
const publicDir = path.join(__dirname, '../public');

// Ensure public directory exists
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Favicon sizes needed
const sizes = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'icon-192.png', size: 192 },
  { name: 'icon-512.png', size: 512 },
];

async function generateFavicons() {
  try {
    console.log('Generating favicons from:', sourcePath);
    
    // Check if source file exists
    if (!fs.existsSync(sourcePath)) {
      throw new Error(`Source favicon not found: ${sourcePath}`);
    }

    // Generate each size
    for (const { name, size } of sizes) {
      const outputPath = path.join(publicDir, name);
      await sharp(sourcePath)
        .resize(size, size, {
          fit: 'cover',
          position: 'center',
        })
        .png({ quality: 100 })
        .toFile(outputPath);
      console.log(`✓ Generated ${name} (${size}x${size})`);
    }

    // Generate favicon.ico (multi-size ICO file)
    // Sharp doesn't directly support ICO, so we'll create a 32x32 PNG as favicon.ico
    // (Most modern browsers accept PNG as favicon.ico)
    const faviconIcoPath = path.join(publicDir, 'favicon.ico');
    await sharp(sourcePath)
      .resize(32, 32, {
        fit: 'cover',
        position: 'center',
      })
      .png()
      .toFile(faviconIcoPath);
    console.log('✓ Generated favicon.ico (32x32)');

    console.log('\n✅ All favicons generated successfully!');
  } catch (error) {
    console.error('❌ Error generating favicons:', error.message);
    process.exit(1);
  }
}

generateFavicons();

