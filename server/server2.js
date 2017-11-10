'use strict';

// ======== load hapi-library to handle http ==============================
const Hapi = require('hapi');

var val = require('./server_route.js');


//========= start hapi server ==============================================

const server = new Hapi.Server();

var hapi_host = 'localhost';
var hapi_port = 5659;

server.connection({
    host: hapi_host, port: hapi_port, routes: {
        cors: true
    }
});

// Start the server
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});

// ======= end-pont routes ==================================================


server.route(val.initRoute());




