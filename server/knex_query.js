

// ==================== INIT KNEX with database parameter =====

const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: '123456',
        database: 'dbtest1',
        timezone: '+00:00'
    },
    debug: true
    //connection: process.env.PG_CONNECTION_STRING
}, (e) => {
    console.log(e);
});

function DBinitKnex() {

}

// ===================== USERS DATABASE HANDLER ===============

function DBreadAllUsers() {
    console.log("SELECT * FROM users");

    return (

        knex("users2").select().then(function (database_result) {
            //return JSON.stringify(database_result)
            return JSON.stringify(database_result);
        })

    );


}

function DBregisterNewUser(payload_data) {
    console.log("INSERT INTO users (data, data , data) values(? ? ? )");

    // knex('users2').insert(request.payload.user_data).then(() => {
    knex('users2').insert(payload_data).then(() => {
        console.log("Inserted user")
        // reply("Insert succesful")
        return ("Insert succesful")
    })
        .catch((e) => {
            console.log(e)
            //reply("Failed")
            return ("Failed")
        })

}

function DBgetSingleUserProfile(parameter_id) {
    console.log("SELECT * FROM users WHERE id =" + parameter_id);

    //let id_value = request.payload.user_id;
    let id_value = parameter_id

    return (
        //  knex("users").select().where(likeFilter({ 'id_user': id_value })).then(function (database_result) {
        knex("users2").where({ id_user: id_value }).then(function (database_result) {
            return JSON.stringify(database_result);
        }).catch((e) => {
            console.log(e)
            //reply("Failed")
            return ("Failed")
        })
    );

}


function DBdeleteUser(user_id) {

    console.log("Trying to delete user-data from database -> user index : " + user_id);

    knex('users2').del().where({ id_user: user_id })
        .then(() => {
            console.log("User id ;" + user_id + "successfyly deleted from database");
        })
        .catch((e) => { console.log("Problem to delete user error : " + e); });

}


function DBmodifyUser(user_object, user_id_parameter) {

      console.log("Trying to modify user id : " + user_id_parameter + "  at database");

    knex('users2').update(user_object).where({ id_user: user_id_parameter }).then(
        () => { console.log("User data succesfully updated !"); return ("done") }
    ).catch((e) => {
        console.log(e)
        return ("Failed")
    })



}


// =================== DEVICE DATABASE HANDLER =================

function DBreadAllDevices() {
    console.log("SELECT * FROM device1");

    return (

        knex("device1").select().then(function (database_result) {
            //return JSON.stringify(database_result)
            return JSON.stringify(database_result);
        })

    );


    //    return (
    //     <div></div>
    //  )
}

function DBaddNewDevice(device_data) {
    console.log("INSERT INTO device1 (data, data , data) values(? ? ? )");

    knex('device1').insert(device_data).then(() => {
        console.log("Inserted device")
        // reply("Insert succesful")
        return ("Insert succesful");
    })
        .catch((e) => {
            console.log(e)
            return ("Failed");
        })

}



function DBdeleteDevice(device_index) {

    console.log("Trying to delete device-data from database -> device index : " + device_index);

    knex('device1').del().where({ device_id: device_index })
        .then(() => {
            console.log("Device id ;" + device_index + "successfyly deleted from database");
        })
        .catch((e) => { console.log("Problem to delete user error : " + e); });

}

function DBgetSingleDeviceProfile(device_id_parameter) {

    console.log("Trying to get device id : " + device_id_parameter + "  profile data from database");

    return (
        //  knex("users").select().where(likeFilter({ 'id_user': id_value })).then(function (database_result) {
        knex("device1").where({ device_id: device_id_parameter }).then(function (database_result) {
            return JSON.stringify(database_result);
        }).catch((e) => {
            console.log(e)
            //reply("Failed")
            return ("Failed")
        })
    );


}



function DBmodifyDevice(device_object, device_id_parameter) {
    console.log("Trying to modify device id : " + device_id_parameter + "  at database");

    knex('device1').update(device_object).where({ device_id: device_id_parameter }).then(
        () => { console.log("Device data succesfully updated !"); return ("done") }
    ).catch((e) => {
        console.log(e)
        return ("Failed")
    })

}


// =================== LICENSE DATABASE HANDLER ==================


//-------------- export knex functions ---------------------------
/*
export {
    DBinitKnex,
    DBreadAllUsers,
    DBregisterNewUser,
    DBgetSingleUserProfile,
    DBreadAllDevices,
    DBaddNewDevice
}
*/

// module.exports.DBinitKnex,
// module.exports.DBreadAllUsers,
// module.exports.DBregisterNewUser,
// module.exports.DBgetSingleUserProfile,
// module.exports.DBreadAllDevices,
// module.exports.DBaddNewDevice

module.exports = {
    DBinitKnex,
    DBreadAllUsers,
    DBregisterNewUser,
    DBgetSingleUserProfile,
    DBreadAllDevices,
    DBaddNewDevice,
    DBdeleteUser,
    DBdeleteDevice,
    DBgetSingleDeviceProfile,
    DBmodifyDevice,
    DBmodifyUser
}









