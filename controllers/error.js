module.exports.getErrorPage = (req, res, next) => {
  res.status(404).render('error', {pageTitle: 'ERROR!', path: ''});
};