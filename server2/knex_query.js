

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
}

function DBregisterNewUser() {
    console.log("INSERT INTO users (data, data , data) values(? ? ? )");
}

function DBgetSingleUserProfile(user_id) {
    console.log("SELECT * FROM users WHERE id =" + user_id);
}


// =================== DEVICE DATABASE HANDLER =================

function DBreadAllDevices() {
    console.log("SELECT * FROM device1");
}

function DBaddNewDevice() {
    console.log("INSERT INTO device1 (data, data , data) values(? ? ? )");
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









