'use strict';

//NodeJS Hapi - module   ( Hapi / static-express )

const Hapi = require('hapi');

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

//----------------------------------

const server = new Hapi.Server();

server.connection({
    host: 'localhost', port: 5659, routes: {
        cors: true
    }
});



// Add the route
server.route([

    {
        method: 'POST',
        path: '/test1',
        handler: function (request, reply) {

            console.log("heheheh");

            return reply(JSON.stringify({ body: 'server reply 56789' }));
        }
    },

    //----------------- route 4 -------------------------
    {
        method: 'POST',
        path: '/save_to_database1',
        handler: function (request, reply) {

            //let input_name = request.payload.k_name; //request.payload.user_data.s_name;
            let input_name = request.payload.user_data.s_name;
            let input_lname = request.payload.user_data.s_lname;
            let input_status = request.payload.user_data.s_status;

            console.log(" ------> " + input_name);

            Object.keys(request.payload).forEach(key =>
                console.log(request.payload[key])
            );

            // request.payload.activities.main


            // let input_a = request.payload.value_a;
            // let input_b = request.payload.value_b;

            //knex-query for 'mytable1' table with fields 'a' and 'b'
            // knex('mytable1').insert({ table_a: input_a, table_b: input_b }).returning('*').then(results => results[0]);

            console.log("Database write endpoint !");

            var n_id = 333;
            var n_name = "f_test1";
            var n_lname = "i_test1";
            var n_title = "developer";
            var n_team = "private";
            var n_phone = "123123";


            //knex('users').insert({ fname: n_name, Iname: n_iname, title: n_title, phone: n_phone })
            //    .then(results => results[0]);

            //create table user1( id_user INTEGER, fname VARCHAR(30), lname VARCHAR(30), status VARCHAR(30) );

            //  knex('user1').insert({ id_user: n_id, fname: n_name, lname: n_lname, status : n_title })
            //    .then(results => results[0]);

            //knex('test1').insert({ afield: input_name }).then(results => results[0]);
            //    .then(results => results[0]);

            knex('user1').insert({ fname: input_name, lname: input_lname, status: input_status }).then(results => results[0]);




            return reply(JSON.stringify({ body: 'server reply 56789' }));
        },
    },

    {
        method: 'POST',
        path: '/save_to_database2',
        handler: function (request, reply) {

            console.log("User enter endpoint 2");

            //let input_name = request.payload.k_name; //request.payload.user_data.s_name;
            //let input_name = request.payload.user_data.s_name;
            //let input_lname = request.payload.user_data.s_lname;
            // let input_status = request.payload.user_data.s_status;

            //let input_id_user = request.payload.user_data.p_id_user;
            //let input_fname = request.payload.user_data.p_fname;
            //let input_lname = request.payload.user_data.p_lname;
            //let input_work_start = request.payload.user_data.p_work_start;
            //let input_work_end = request.payload.user_data.p_work_end;
            //let input_status = request.payload.user_data.p_status;
            //let input_title = request.payload.user_data.p_title;
            //let input_team = request.payload.user_data.p_team;
            //let input_phone = request.payload.user_data.p_phone;
            //let input_keys = request.payload.user_data.p_keys;
            //let input_lukoton = request.payload.user_data.p_lukoton;
            //let input_active = request.payload.user_data.p_active;
            //let input_email = request.payload.user_data.p_email;
            //let input_slack = request.payload.user_data.p_slack;
            //let input_comments = request.payload.user_data.p_comments;
            //let input_school = request.payload.user_data.p_school;
            //let input_location = request.payload.user_data.p_location;
            //let input_usercol = request.payload.user_data.p_usercol;
            //let input_photo = request.payload.user_data.p_photo;
            //let input_address = request.payload.user_data.p_address;
            //let input_ad_user = request.payload.user_data.p_ad_user;

            knex('users2').insert(request.payload.user_data).then(() => {
                console.log("Inserted user")
                reply("Insert succesful")
            })
                .catch((e) => {
                    console.log(e)
                    reply("Failed")
                })

            //knex('users2').insert({
            //    // id_user: input_id_user,
            //   // id_user: 0,
            //    fname: input_fname,
            //    lname: input_lname,
            //    // work_start: input_work_start,
            //    // work_end: input_work_end,
            //    status: input_status,
            //    title: input_title,
            //    team: input_team,
            //    phone: input_phone,
            //    //keys: input_keys,
            //    //lukon: input_lukoton,
            //    //active: input_active,
            //    email: input_email,
            //    // slack: input_slack,
            //    comments: input_comments,
            //    school: input_school,
            //    location: input_location,
            //    userscol: input_usercol,
            //    photo: input_photo,
            //    address: input_address,
            //    ad_user: input_ad_user
            //
            //}).then(results => results[0]);
            //
            console.log(" Payload array : -----> ");

            Object.keys(request.payload).forEach(key =>
                console.log(request.payload[key])
            );

        },
    },
    //-------------- read data from database ------------
    {
        method: 'GET',
        path: '/read_from_database1',
        handler: function (request, reply) {

            console.log("user trying to read data from database");

            //return reply(JSON.stringify({ body: 'server reply 56789' }));

            //knex('users').;


            var user_data = [];
            knex("users").select(['users.fname']).then(function (a) {
                user_data.push(a + "\n");
                // console.log(" =====> "+a);
                // console.log("=-=-=>" + JSON.stringify(a) + "\n");
            })


            console.log(" DB data : " + JSON.stringify(user_data));


            /*
             Object.keys(user_data).forEach(key =>
                console.log("------>" +user_data[key] + "\n")
            );
            */

            return reply("User you can get data from our db ! <br />" + user_data.toString());

            // return reply("User you can get data from our db ! <br />" );
        }
    },


    {
        method: 'POST',
        path: '/read_from_database2',
        handler: function (request, reply) {

            console.log("user trying to read data from database 2");

            var user_data = [];

            //SELECT users.fname FROM users;
            knex("users").select(['users.fname']).then(function (a) {
                // user_data.push(a);
                // console.log(" =====> "+a);
                console.log("=-=-=>" + JSON.stringify(a) + "\n");
                console.log("DB data -----> " + a[1].fname + "\n \n");
                // user_data.push(a[index].fname);

                for (var element in a) {
                    //  user_data.push(element);
                    console.log("Element >>>>>>>" + a[element].fname);

                    user_data.push(a[element].fname);
                }

                reply(JSON.stringify({ body: { msg: 'server reply 56789', db: user_data } }));
                /*
                a.forEach(function (element) {
                    user_data.push(element.fname);
                })


                Object.keys(a).forEach(function (key) {

                    console.log(key, a[key]);

                });
                */

            });



            //console.log("DB data -----> " + user_data[0].fname+ "\n \n");

            //console.log(" DB data : " + JSON.stringify(user_data));

            //  return reply(JSON.stringify({ body: 'server reply 56789' }));

            //  reply(JSON.stringify({ body: { msg :'server reply 56789' , db : user_data }  }));
        }
    },
    //-------------- 
    {
        method: 'POST',
        path: '/read_from_database3',
        handler: function (request, reply) {
            knex("users2").select().then(function (database_result) {
                reply(JSON.stringify(database_result))
            });
        }

    }



]

);

// Start the server
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});
