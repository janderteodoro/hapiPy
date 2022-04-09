'use strict';

const server = (Hapi) => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    return server;
};

module.exports = server;
