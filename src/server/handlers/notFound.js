export default logger => (req, res) => {
  logger.info(`Requested URL ${req.url} resulted in a 404 not found error.`);
  res.status(404).send('404 Not Found');
};
