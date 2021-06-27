function mylogger(req, res, next) {
  console.log('== ini cuma kepanggil di route product aja...');
  next();
}

module.exports = mylogger;
