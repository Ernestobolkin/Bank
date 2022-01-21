const express = require('express');

//
const cors = require('cors');
const path = require('path');
//

const app = express();

const port = process.env.PORT || 5000;

const publicPath = path.join(__dirname, 'build');
app.use(cors());
app.use(express.static(publicPath));

app.use(express.json());

app.get('/api/users', (req, res) => {
  try {
    res.status(200).send({ userName: 'Bob' });
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

//
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});
//

app.listen(port, () => {
  console.log('listening on port ' + port);
});
