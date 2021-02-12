const trelloRepository = require('lib/trelloRepository');

module.exports = (req, res, next) => {
  const tokenProvidedTrelloCommands = trelloRepository(req.headers['trello-token']);
  req.trello = tokenProvidedTrelloCommands;
  next();
};
