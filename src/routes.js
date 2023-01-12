const { getJokeHandler, getMotivasiHandler, anyMethodHandler } = require('./handler');

const routes = [
    {
        method: 'GET',
        path: '/joke',
        handler: getJokeHandler,
    },
    {
        method: 'GET',
        path: '/motivasi',
        handler: getMotivasiHandler,
    },
    {
        method: '*',
        path: '/{any*}',
        handler: anyMethodHandler,
    },
];

module.exports = routes;