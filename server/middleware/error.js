module.exports = (err, req, res, next) => {
  err.status_code = err.status_code || 500;
  err.message = err.message || "Internal Server Error";

  res.status(err.status_code).json({
    message: err.message,
  });
};
