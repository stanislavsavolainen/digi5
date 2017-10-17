

// ==================== INIT KNEX with database parameter =====

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


// =================== DEVICE DATABASE HANDLER =================

function DBreadAllDevices() {
    console.log("SELECT * FROM device1");

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
    DBaddNewDevice
}









