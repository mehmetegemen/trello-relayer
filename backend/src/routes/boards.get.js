const trelloTokenGuard = require('guards/trelloTokenGuard');
const trelloCommandsMiddleware = require('middlewares/trelloRepositoryInjector');

module.exports = {
  path: '/members/:username/boards',
  method: 'GET',
  middlewares: [trelloTokenGuard, trelloCommandsMiddleware],
  handler: async (req, res) => {
    const { getMember, getBoardsOfUserById } = req.trello;

    const member = await getMember(req.params.username);
    const boards = await getBoardsOfUserById(member.id);

    res.send(boards);
  },
};
