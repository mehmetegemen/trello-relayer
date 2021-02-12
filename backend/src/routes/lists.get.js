const trelloTokenGuard = require('guards/trelloTokenGuard');
const trelloCommandsMiddleware = require('middlewares/trelloRepositoryInjector');

module.exports = {
  path: '/boards/:boardId/lists',
  method: 'GET',
  middlewares: [trelloTokenGuard, trelloCommandsMiddleware],
  handler: async (req, res) => {
    const { getListsOfBoardById } = req.trello;

    const lists = await getListsOfBoardById(req.params.boardId);

    res.send(lists);
  },
};
