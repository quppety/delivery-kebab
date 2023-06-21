require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const expressSession = require('express-session');
const path = require('path');
// для хранения даннах из куки
const FileStore = require('session-file-store')(expressSession);

const app = express();

const PORT = process.env.PORT || 3000;
const sessionConfig = {
  store: new FileStore(), // добавить после установки session-file-store
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 800 * 60 * 1000, // устанавливаем сколько живет кука
    httpOnly: true,
  },
};
const clientRouter = require('./routes/client');
const courierRouter = require('./routes/courier');
const indexRouter = require('./routes/index');

const { sequelize } = require('../db/models');
app.use(morgan('dev'));
app.use(express.static(path.join(process.cwd(), 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(expressSession(sessionConfig));

app.use('/client', clientRouter);
app.use('/courier', courierRouter);
app.use('/', indexRouter);

// app.get('/', (req, res) => {
//   res.send('Привет');
// });

app.listen(PORT, async () => {
  console.log(`Server started on port ${PORT}`);
});
