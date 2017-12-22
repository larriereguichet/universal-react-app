export default (req, res) => {
  req.log.info(`Requested URL ${req.url} resulted in a 404 not found error.`);

  res.status(404).send('404 Not Found');
};
