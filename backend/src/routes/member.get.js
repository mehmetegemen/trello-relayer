const trelloTokenGuard = require('guards/trelloTokenGuard');
const trelloCommandsMiddleware = require('middlewares/trelloRepositoryInjector');

module.exports = {
  path: '/members/:username',
  method: 'GET',
  middlewares: [trelloTokenGuard, trelloCommandsMiddleware],
  handler: async (req, res) => {
    const { getMember } = req.trello;

    const member = await getMember(req.params.username);
    res.send(member);
  },
};
