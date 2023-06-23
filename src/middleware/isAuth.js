function isAuth(req, res, next) {
  const user = req.session?.user;
  console.log(user);
  if (user) {
    next();
    return;
  }
  res.redirect('/login');
}

module.exports = isAuth;
