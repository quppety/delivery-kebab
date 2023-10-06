require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const expressSession = require('express-session');
const path = require('path');
const FileStore = require('session-file-store')(expressSession);

const viewsRouter = require('./routes/views');
const orderRouter = require('./routes/order');
const usersRouter = require('./routes/users.router');
const indexRouter = require('./routes/index');

const app = express();

const PORT = process.env.PORT || 3000;
const sessionConfig = {
  store: new FileStore(),
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 800 * 60 * 1000,
    httpOnly: true,
  },
};

app.use(morgan('dev'));
app.use(express.static(path.join(process.cwd(), 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(expressSession(sessionConfig));

app.use('/', viewsRouter);
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/orders', orderRouter);

app.listen(PORT, async () => {
  console.log(`Server started on port ${PORT}`);
});
