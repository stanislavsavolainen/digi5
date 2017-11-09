'use strict';

// ======== load hapi-library to handle http ==============================
const Hapi = require('hapi');

/*
//========= load knex-library and config it for special database ==========
const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: '123456',
        database: 'dbtest1'
    },
    debug: true
    //connection: process.env.PG_CONNECTION_STRING
}, (e) => {
    console.log(e);
});
*/

//import {  route, initRoute } from './server_route.js';
//const { initRoute } = require('./server_route.js');
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

    //obj.initRoute();

    //console.log(JSON.stringify( val.initRoute(), 0, 1 ) );
   // console.log("OK");

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});

// ======= end-pont routes ==================================================

/*
server.route([

    
    //val.initRoute()
    //val.route
       
    {
        method: 'GET',
        path: '/',
        handler: function (request, reply) {

            console.log("user entered at home");

           // return reply(JSON.stringify({ body: 'home' }));
           reply("User entered at home, Welcome !")
        }
    },

    {
        method: 'GET',
        path: '/test1',
        handler: function (request, reply) {

            console.log("heheheh");

           // return reply(JSON.stringify({ body: 'server reply 56789' }));
           reply ("test 1 endpoint !")
        }
    },

]
)
*/

server.route(val.initRoute());




