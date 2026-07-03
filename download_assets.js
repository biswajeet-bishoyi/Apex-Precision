const fs = require('fs');
const https = require('https');
const path = require('path');

const url = 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/models/gltf/ferrari.glb';
const modelsDir = path.join(__dirname, 'public', 'models');

if (!fs.existsSync(modelsDir)) {
  fs.mkdirSync(modelsDir, { recursive: true });
}

const file = fs.createWriteStream(path.join(modelsDir, 'rb19.glb'));

https.get(url, function(response) {
  response.pipe(file);
  file.on('finish', function() {
    file.close(() => {
      console.log('Downloaded rb19.glb');
      
      // Also copy the background image
      const sourceImage = 'C:\\Users\\Biswajeet Bishoyi\\.gemini\\antigravity\\brain\\b3df791a-abc5-474d-b0f6-c68c7025f786\\racing_garage_bg_1782679211920.png';
      const targetImage = path.join(__dirname, 'public', 'background.png');
      if (fs.existsSync(sourceImage)) {
        fs.copyFileSync(sourceImage, targetImage);
        console.log('Copied background image');
      } else {
        console.log('Source image not found');
      }
    });
  });
}).on('error', function(err) {
  fs.unlink(path.join(modelsDir, 'rb19.glb'), () => {});
  console.error('Error downloading:', err.message);
});
