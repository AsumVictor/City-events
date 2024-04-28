module.exports = (asynFunction) => (req, res, next) => {
  Promise.resolve(asynFunction(req, res, next)).catch(next);
};
