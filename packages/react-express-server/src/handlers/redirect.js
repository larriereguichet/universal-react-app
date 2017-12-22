export default (req, res, next) => {
  if (req.context.url) {
    req.log.info(
      `While the requested URL was ${req.url} found URL ${req.context.url} in the context.`
    );
    // Somewhere a `<Redirect>` was rendered
    res.redirect(req.context.status || 302, req.context.url);
    res.end();
  }
};
