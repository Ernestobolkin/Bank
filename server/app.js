const express = require('express');
const cors = require('cors');
const path = require('path');
require("dotenv").config();
const apiRouter = require("./routes/routes")


const app = express();

const port = process.env.PORT || 8080;

const publicPath = path.join(__dirname, 'build');
app.use(cors());
app.use(express.static(publicPath));
app.use(express.json());

app.use("/", apiRouter);

//
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});
//

app.listen(port, () => {
  console.log('listening on port ' + port);
});
