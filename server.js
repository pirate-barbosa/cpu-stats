const express = require('express');
const app = express();

/* Routes import */
const cpu = require('./routes/cpu');
const drive = require('./routes/drive');
const memory = require('./routes/memory');
const os = require('./routes/os');

/* Routes  */
app.use('/cpu', cpu);
app.use('/drive', drive);
app.use('/memory', memory);
app.use('/os', os);

app.listen(3000, () => {
  console.log('successfully connected to port 3000');
});
