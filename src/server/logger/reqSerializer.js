export default req => ({
  method: req.method,
  url: req.url,
  headers: req.headers,
});
