const testFolder = './public/images/';
const fs = require('fs');
fs.readdir(testFolder, (err, files) => {
  fs.writeFileSync(
    './src/files.json',
    JSON.stringify(files.map((name) => `images/${name}`))
  );
});
