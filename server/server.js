const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const mainRouter = require('./src/routers/mainRouter');
const config = require('./config');
const passport = require('./src/util/passport');
const errorHandler = require('./src/middleware/errorHandler');
const cors = require('cors');

const mongooseOptions = {
  useNewUrlParser: true,
  useCreateIndex: true
};

mongoose.connect(config.dbString, mongooseOptions, (err) => {
  if (err) {
    console.log('Database connection failed');
    throw err;
  }
  
  const server = express();

  server.use(morgan('combined'));
  server.use(bodyParser.json());
  server.use(cors());
  server.use(passport.initialize());
  server.use('/', mainRouter);
  server.use(errorHandler);

  const port = process.env.PORT || 3000;
  server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
});
