const trelloTokenGuard = require('guards/trelloTokenGuard');
const trelloCommandsMiddleware = require('middlewares/trelloRepositoryInjector');

module.exports = {
  path: '/cards/:cardId',
  method: 'PATCH',
  middlewares: [trelloTokenGuard, trelloCommandsMiddleware],
  handler: async (req, res) => {
    const { updateCardById } = req.trello;

    const updatedCard = await updateCardById(req.params.cardId, {
      ...req.body,
      pos: req.body.pos || 'bottom',
    });

    res.send(updatedCard);
  },
};
