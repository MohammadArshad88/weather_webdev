const express = require('express');
const app = express();
const port = 3030; // Replace with your desired port number

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  });

  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); 
});