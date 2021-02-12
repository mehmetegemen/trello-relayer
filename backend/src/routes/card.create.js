const trelloTokenGuard = require('guards/trelloTokenGuard');
const trelloCommandsMiddleware = require('middlewares/trelloRepositoryInjector');

module.exports = {
  path: '/lists/:listId/cards',
  method: 'POST',
  middlewares: [trelloTokenGuard, trelloCommandsMiddleware],
  handler: async (req, res) => {
    const { createCardByListId } = req.trello;

    const newCard = await createCardByListId(req.params.listId, {
      name: req.body.name,
      pos: req.body.pos || 'bottom',
    });

    res.send(newCard);
  },
};
