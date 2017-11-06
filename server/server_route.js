var makeRoute = (path, handler) => {
    return {
        method: 'POST',
        path: path,
        handler: handler ? handler : function (request, reply) { console.log(" >>>> Not defined <<<<"); reply("Handler not defined"); } //handlerArray[i]
    }
}


var route = [
    makeRoute('/view_all_users', function (request, reply) {
        //var db_users =  myknex.DBreadAllUsers();
        //get return from knex function
        // reply("View all users");
        //reply(db_users);
        printLine();
        printLogText1("View all users"); // console.log(" >>>> View all users <<<<<<<< ");
        myknex.DBreadAllUsers().then(reply);
    }),

    makeRoute('/add_user', function (request, reply) {
        printLine();
        printLogText1("Add new user");
        var registered_user = myknex.DBAddNewUser(request.payload.user_data);
        //reply("Register new user");
        reply(registered_user);
    }),

    makeRoute('/user_profile', function (request, reply) {
        var profile_index = request.payload.user_id;
        // var db_user_profile =  myknex.DBgetSingleUserProfile(profile_index);
        //reply("Selected user profile");
        printLine();
        myknex.DBgetSingleUserProfile(profile_index).then(reply);
    }),

    makeRoute('/add_device', function (request, reply) {
        //insert *into device 1 ???????;
        printLine();
        printLogText1("Welcome to add device endpoint"); //console.log("Welcome to add device endpoint !");
        // let dev_data = request.payload.device_data;
        myknex.DBaddNewDevice(request.payload.device_data)
        reply(JSON.stringify("OK"));
    }),

    makeRoute('/view_all_devices', function (request, reply) {
        printLine();
        printLogText1("View all devices"); // console.log("View all devices");
        myknex.DBreadAllDevices().then(reply);
    }),

    makeRoute('/delete_user', function (request, reply) {
        printLine();
        printLogText1("Delete user"); // console.log("Delete user");
        myknex.DBdeleteUser(request.payload.user_id);
        reply(JSON.stringify("OK"));
    }),

    makeRoute('/delete_device', function (request, reply) {
        printLine();
        printLogText1("Delete device"); // console.log("Delete device");
        myknex.DBdeleteDevice(request.payload.device_id);
        reply(JSON.stringify("OK"));
    }),

    makeRoute('/device_profile', function (request, reply) {

        printLine();
        printLogText1("Device profile");//console.log("Device profile");

        myknex.DBgetSingleDeviceProfile(request.payload.device_id).then(reply);

        //reply(JSON.stringify("OK"));
    }
    ),

    makeRoute('/modify_device', function (request, reply) {

        printLine();
        printLogText1("Modify device"); // console.log("Modify device");

        console.log("Payload content : " + JSON.stringify(request.payload));
        console.log("Device id : " + request.payload.device_id);

        myknex.DBmodifyDevice(request.payload, request.payload.device_id);

        // myknex.DBgetSingleDeviceProfile(request.payload.device_id).then(reply);

        reply(JSON.stringify("OK"));
    }),

    makeRoute('/modify_user', function (request, reply) {

        printLine();

        printLogText1("Modify user");//console.log("Modify user");

        console.log("Payload content : " + JSON.stringify(request.payload));
        console.log("User id : " + request.payload.id_user);

        myknex.DBmodifyUser(request.payload, request.payload.id_user);

        reply(JSON.stringify("OK"))
    }),

    makeRoute('/view_license', function (request, reply) {

         printLine();

        printLogText1("View license");//console.log("View license");

        myknex.DBreadAllLicenses().then(reply);

        //reply(JSON.stringify("OK"))

    } ),

     makeRoute('/add_license', function (request, reply) {

         printLine();

        printLogText1("Add license");//console.log("View license");
        reply(JSON.stringify("OK"))
    } ),

     makeRoute('/modify_license', function (request, reply) {

         printLine();

        printLogText1("Modify license");//console.log("Modify license");
        reply(JSON.stringify("OK"))
    } ),

   
    

];


var myknex = require('./knex_query.js');


//import { handlerArray } from './server_handler.js'

function initRoute() {


    return route;
}

//https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color

function printLine() {
    console.log('\x1b[5m"\x1b[33m%s\x1b[0m', "==============================================================");
    //console.log("\x1b[5m", "_________________________________________________________");
}

function printLogText1(string) {
    console.log('\x1b[42m%s\x1b[0m', "" + string);
}


//module.exports.route;
//module.exports.initRoute;


module.exports = {
    route,
    initRoute
}



