
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
    '/add_device',
    '/view_all_devices',
    '/delete_user',
    '/delete_device',
    '/device_profile',
    '/modify_device',
    '/modify_user'

];


var myknex = require('./knex_query.js');





//import { handlerArray } from './server_handler.js'

function initRoute() {

    for (var i = 0; i < pathArray.length; i++) {
        //put POST by default -> modify manualy endpoint object route data if not POST
        route.push({
            method: 'POST',
            path: pathArray[i],
            handler: function (request, reply) { console.log(" >>>> Not defined <<<<"); reply("Handler not defined"); } //handlerArray[i]
        });

    }

    //manually add handler


    route[0].handler = function (request, reply) {
        //var db_users =  myknex.DBreadAllUsers();
        //get return from knex function
        // reply("View all users");
        //reply(db_users);
          printLine();
       printLogText1("View all users"); // console.log(" >>>> View all users <<<<<<<< ");

        myknex.DBreadAllUsers().then(reply);

    }

    route[1].handler = function (request, reply) {
          printLine();
          printLogText1("Register new user");
        var registered_user = myknex.DBregisterNewUser(request.payload.user_data);
        //reply("Register new user");
        reply(registered_user);

    }

    route[2].handler = function (request, reply) {
        var profile_index = request.payload.user_id;
        // var db_user_profile =  myknex.DBgetSingleUserProfile(profile_index);
        //reply("Selected user profile");
         printLine();
        myknex.DBgetSingleUserProfile(profile_index).then(reply);
    }

    //addDevice functionality
    route[3].handler = function (request, reply) {
        //insert *into device 1 ???????;
         printLine();
      printLogText1("Welcome to add device endpoint"); //console.log("Welcome to add device endpoint !");

        // let dev_data = request.payload.device_data;

        myknex.DBaddNewDevice(request.payload.device_data)

        reply(JSON.stringify("OK"));
    }

    route[4].handler = function (request, reply) {
         printLine();
          printLogText1("View all devices"); // console.log("View all devices");

        // reply(JSON.stringify("OK"));
        myknex.DBreadAllDevices().then(reply);
    }

    
    //deleteUser
    route[5].handler = function (request, reply) {
          printLine();
     printLogText1("Delete user"); // console.log("Delete user");

        myknex.DBdeleteUser(request.payload.user_id);

        reply(JSON.stringify("OK"));
    }

    //deleteDevice
    route[6].handler = function (request, reply) {

         printLine();
      printLogText1("Delete device"); // console.log("Delete device");

        myknex.DBdeleteDevice(request.payload.device_id);


        reply(JSON.stringify("OK"));
    }

    //deviceProfile
     route[7].handler = function (request, reply) {

          printLine();
        printLogText1("Device profile");//console.log("Device profile");

        myknex.DBgetSingleDeviceProfile(request.payload.device_id).then(reply);

        //reply(JSON.stringify("OK"));
    }    

    //modifyDevice
     route[8].handler = function (request, reply) {

         printLine(); 
        printLogText1("Modify device"); // console.log("Modify device");

        console.log("Payload content : " + JSON.stringify(request.payload) );
        console.log("Device id : " +request.payload.device_id);

       myknex.DBmodifyDevice( request.payload , request.payload.device_id);     

       // myknex.DBgetSingleDeviceProfile(request.payload.device_id).then(reply);

        reply(JSON.stringify("OK"));
    } 


    //modifyUser
    route[9].handler = function (request, reply) {

        printLine();
       
        printLogText1( "Modify user" );//console.log("Modify user");

        console.log("Payload content : " + JSON.stringify(request.payload) );
        console.log("User id : " +request.payload.id_user);

        myknex.DBmodifyUser( request.payload , request.payload.id_user);  

        reply(JSON.stringify("OK"));
    }








    return route;
}

//https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color

function printLine(){
 console.log('\x1b[5m"\x1b[33m%s\x1b[0m',"==============================================================");
//console.log("\x1b[5m", "_________________________________________________________");
}

function printLogText1( string ){
    console.log('\x1b[42m%s\x1b[0m', ""+ string);
}


//module.exports.route;
//module.exports.initRoute;


module.exports = {
    route,
    initRoute
}



