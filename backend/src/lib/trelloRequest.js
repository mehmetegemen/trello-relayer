const { cloneDeep } = require('lodash');
const fetch = require('node-fetch');
const { URLSearchParams } = require('url');
const log = require('debug')('trello-request');

const { TRELLO_APP_KEY, TRELLO_API } = process.env;

const trelloRequest = async (token, path, options = {}) => {
  const authorizationQueryStrings = new URLSearchParams({
    key: TRELLO_APP_KEY,
    token,
    ...options.extraQueryStrings,
  });

  const fetchRequestOptions = cloneDeep(options);

  delete fetchRequestOptions.extraQueryStrings;

  let result;
  try {
    const request = await fetch(TRELLO_API + path + '?' + authorizationQueryStrings, fetchRequestOptions);
    result = await request.json();
  } catch (err) {
    log(err);
    throw new Error(err);
  }

  return result;
};

module.exports = trelloRequest;
