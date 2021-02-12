const trelloRequest = require('lib/trelloRequest');

const getMember = (token) => async (username, options) => {
  const member = await trelloRequest(token, `/members/${username}`, options);
  return member;
};

const getBoardsOfUserById = (token) => async (userId, options) => {
  const boards = await trelloRequest(token, `/members/${userId}/boards`, options);
  return boards;
};

const getListsOfBoardById = (token) => async (boardId, options) => {
  const lists = await trelloRequest(token, `/boards/${boardId}/lists`, options);
  return lists;
};

const getCardsOfListById = (token) => async (listId, options) => {
  const cards = await trelloRequest(token, `/lists/${listId}/cards`, options);
  return cards;
};

const createCardByListId = (token) => async (listId, body, options) => {
  const lists = await trelloRequest(token, '/cards', {
    method: 'POST',
    extraQueryStrings: {
      idList: listId,
      ...body,
    },
    ...options,
  });
  return lists;
};

const updateCardById = (token) => async (cardId, body, options) => {
  const lists = await trelloRequest(token, `/cards/${cardId}`, {
    method: 'PUT',
    extraQueryStrings: {
      ...body,
    },
    ...options,
  });
  return lists;
};

module.exports = (token) => ({
  getMember: getMember(token),
  getBoardsOfUserById: getBoardsOfUserById(token),
  getListsOfBoardById: getListsOfBoardById(token),
  createCardByListId: createCardByListId(token),
  updateCardById: updateCardById(token),
  getCardsOfListById: getCardsOfListById(token),
});
