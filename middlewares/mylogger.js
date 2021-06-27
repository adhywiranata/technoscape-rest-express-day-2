function mylogger(req, res, next) {
  console.log('this is my first middleware');
  next();
}

module.exports = mylogger;
