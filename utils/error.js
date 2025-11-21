module.exports = (routeHandler) => (req, res, next) => {
  routeHandler(req, res, next).catch(next);
};
