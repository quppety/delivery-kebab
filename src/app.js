require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const expressSession = require('express-session');
const path = require('path');
// для хранения даннах из куки
const FileStore = require('session-file-store')(expressSession);

const viewsRouter = require('./routes/views');
const courierRouter = require('./routes/courier');

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

app.use(morgan('dev'));
app.use(express.static(path.join(process.cwd(), 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(expressSession(sessionConfig));

app.use('/', viewsRouter);
app.use('/', courierRouter);

app.listen(PORT, () => {
  `Server started on port ${PORT}`;
});
