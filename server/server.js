const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const dbo = require('./db/connection');

dotenv.config();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.use(require('./routes/record'));

app.listen(port, () => {
  dbo.connectToServer(function(err){
    if (err) {
      console.error(err);
    }
  });
  console.info(`Server is listening on port: ${port}`);
});
