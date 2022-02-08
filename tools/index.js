const fs = require('fs');

fs.readdir('./public/images/', (err, files) => {
  fs.writeFileSync(
    './src/files.json',
    JSON.stringify(files.map((name) => `images/${name}`))
  );
});
