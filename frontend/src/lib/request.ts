import { cloneDeep } from 'lodash';

export const request =
  (token: string) =>
    async (path: string, options?: any) => {
      options = {
        ...cloneDeep(options),
      };

      if (!options.headers) options.headers = {};

      if (token) options.headers['Trello-Token'] = token;
      
      let result;
      
      try {
        const request_ = await fetch(path, options);
        result = await request_.json();
      } catch (err) {
        console.error(err);
        throw new Error('Can\'t send a request!');
      }

      return result;
    };
