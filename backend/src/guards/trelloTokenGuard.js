const { HTTPError } = require('lib/errors');

module.exports = (req, res, next) => {
  const trelloToken = req.headers['trello-token'];

  if (!trelloToken) return next(new HTTPError('Trello User Token is missing!', 403));

  return next();
};
