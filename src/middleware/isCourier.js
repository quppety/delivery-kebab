function isCourier(req, res, next) {
  const user = req.session?.user;
  if (user.isCourier) {
    next();
    return;
  }
  res.redirect('/');
}

module.exports = isCourier;
