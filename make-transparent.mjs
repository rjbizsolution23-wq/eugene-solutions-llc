import sharp from 'sharp';

const inputPath = './public/images/logo.png';
const outputPath = './public/images/logo.png';

sharp(inputPath)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true })
  .then(({ data, info }) => {
    const buffer = Buffer.alloc(data.length);
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      // If pixel is close to white, make it transparent
      if (r > 240 && g > 240 && b > 240) {
        buffer[i] = r;
        buffer[i + 1] = g;
        buffer[i + 2] = b;
        buffer[i + 3] = 0; // transparent
      } else {
        buffer[i] = r;
        buffer[i + 1] = g;
        buffer[i + 2] = b;
        buffer[i + 3] = 255; // opaque
      }
    }
    return sharp(buffer, {
      raw: { width: info.width, height: info.height, channels: 4 }
    }).png().toFile(outputPath);
  })
  .then(() => console.log('Background removed! Logo updated.'))
  .catch(err => console.error('Error:', err));
