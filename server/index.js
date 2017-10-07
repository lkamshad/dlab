const express = require('express');
const path = require('path');


const app = express();

// serve the built app from the build/ directory
app.use(express.static(path.resolve(__dirname, '..', 'build')));
app.get('*', (req, res) => {
  console.log('Sombody requested the page');
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

// start server
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
