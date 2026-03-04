module.exports = (err, req, res, next)=>{
  const message = err.message;
  const stack = err.stack;
  const originalUrl = err.originalUrl;
  const userData = req.userData;
  const url = req.url;
  console.log(`${message}\n${stack}\n${originalUrl}\n${userData}\n${url}\n`)
}