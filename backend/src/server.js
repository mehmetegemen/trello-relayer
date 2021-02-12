const express = require('express');
const http = require('http');
const path = require('path');
const cors = require('cors');
const log = require('debug')('trello-relayer');
const { readdirSync } = require('fs');
const { each } = require('lodash');
const { ROUTES_PATH } = require('const/paths');
const asyncHandler = require('lib/asyncHandler');
const { HTTPError } = require('lib/errors');

const {
  IP = '0.0.0.0',
  PORT = 4000,
} = process.env;

const registerRoute =
  (app) =>
    (router) =>
      (routeFileName) => {
        const {
          method,
          path: resourcePath,
          handler,
          middlewares = [],
        } = require(path.join(__dirname, ROUTES_PATH, routeFileName));

        const route = router[method.toLowerCase()](
          resourcePath,
          ...middlewares,
          asyncHandler(handler),
        );

        app.use('/', route);
      };

const setupRoutesFor = (app) => {
  const routerGlobal = express.Router();
  const routes = readdirSync(path.join(__dirname, ROUTES_PATH));
  const register = registerRoute(app)(routerGlobal);

  each(routes, register);
};

const setupNotFoundErrorFor = (app) =>
  app.use((req, res, next) => {
    next(new HTTPError('Route not found!', 404));
  });

// Error-handling
const setupErrorHandlingFor = (app) =>
  app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.send(req.app.get('env') === 'development' ? { message: err.message, detail: err.stack } : { message: 'Internal Error' });
  });

const setupJsonHeadersFor = (app) =>
  app.use((req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Accept', 'application/json');
    next();
  });

const setupCorsFor = (app) => app.use(cors());

const buildApp = () => {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  setupCorsFor(app);
  setupJsonHeadersFor(app);

  setupRoutesFor(app);
  setupNotFoundErrorFor(app);
  setupErrorHandlingFor(app);

  return app;
};

const startServer = () => {
  const app = buildApp();
  const server = http.createServer(app);

  server.listen(PORT, IP, () => {
    log(`Server listens on ${IP}:${PORT}`);
  });
};

if (require.main === module) {
  startServer();
}

module.exports = buildApp;
