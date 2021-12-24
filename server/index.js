const express = require('express');
const app = express();
const port = 3000;
const controllers = require('./controllers.js');

app.use(express.json());

app.use(express.static('client/dist'));

//get requests
app.get('/entries/:id', controllers.get);
app.get('/count', controllers.getRecordCount);
app.get('/average', controllers.getTrimmedAverage);
app.post('/entries', controllers.post);

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});

