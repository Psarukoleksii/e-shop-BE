const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const apiRouter = require('./routers/api.router');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});

app.use(express.urlencoded({ extended: true }));
app.use('/', apiRouter);
app.use('*', (err, req, res, next) => {
  res
    .status(err.status || 500)
    .json({
      text: err.message || 'something go wrong',
      status: err.status || 'error 500',
    });
});

app.use(morgan('tiny'));

require('dotenv/config');

_connectDB();

app.listen('5005', () => {
  console.log('Starting developer server at 5005...');
});

process.on('SIGTERM', () => {
  app.close(() => {
    process.exit(0);
  });
});

function _connectDB() {
  mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });

  const { connection } = mongoose;

  connection.on('error', (error) => {
    console.log(error);
  });
}
