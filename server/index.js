const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');

app.use(cors());

app.get('/', (req, res) => {
    fs.readdir('../client/public/images', (err, files) => {
        if (err) {
          console.error('Error reading directory:', err);
          return;
        }
        var images = [];
        images.push(files); // Array of filenames in the directory
        res.send(images);
      });
})

app.listen(8080, () => {
    console.log('Server Listening On Port 8080');
})