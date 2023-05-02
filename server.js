const path = require('path');
const express = require('express');

const PORT = 9000;
const app = express();

app.use(express.static('dist'));
app.get('/', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'dist/index.html'));
});

// listener
const listener = app.listen(PORT, () => {
  console.log(`Your app is listening on port ${PORT}`);
});
