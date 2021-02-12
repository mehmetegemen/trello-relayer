const trelloTokenGuard = require('guards/trelloTokenGuard');
const trelloCommandsMiddleware = require('middlewares/trelloRepositoryInjector');

module.exports = {
  path: '/lists/:listId/cards',
  method: 'GET',
  middlewares: [trelloTokenGuard, trelloCommandsMiddleware],
  handler: async (req, res) => {
    const { getCardsOfListById } = req.trello;

    const lists = await getCardsOfListById(req.params.listId);

    res.send(lists);
  },
};
