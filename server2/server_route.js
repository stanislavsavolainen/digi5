
var route = [];

var pathArray = [
    
    //'/test1',
    //'/save_to_database1',
    //"/save_to_database2",
    //'/read_from_database1',
    //'/read_from_database2',
    //'/read_from_database3',
    //'/read_from_database4',
    //'/save_data_to_database3',
    '/view_all_users',
    '/register_user',
    '/user_profile',

];


var myknex = require('./knex_query.js');





//import { handlerArray } from './server_handler.js'

function initRoute() {
   
    for (var i = 0; i < pathArray.length; i++) {
        //put POST by default -> modify manualy endpoint object route data if not POST
        route.push({
            method: 'POST',
            path: pathArray[i],
            handler:  function( request, reply ) { console.log(" >>>> Not defined <<<<"); reply("Handler not defined"); } //handlerArray[i]
        });
   
    }

    //manually add handler
    

    route[0].handler = function ( request, reply){
        myknex.DBreadAllUsers();
        //get return from knex function
        reply("View all users");
    }

    route[1].handler = function ( request, reply){
        myknex.DBregisterNewUser();
        reply("Register new user");
    }

    route[2].handler = function ( request, reply){
        var profile_index = 1;
        myknex.DBgetSingleUserProfile(profile_index);
        reply("Selected user profile");
    }



    return route;
}


//module.exports.route;
//module.exports.initRoute;


module.exports = {
    route,
    initRoute
}



