const { getJokeHandler, anyMethodHandler } = require('./handler');

const routes = [
    {
        method: 'GET',
        path: '/joke',
        handler: getJokeHandler,
    },
    {
        method: '*',
        path: '/{any*}',
        handler: anyMethodHandler,
    },
];

module.exports = routes;