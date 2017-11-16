

// ==================== INIT KNEX with database parameter =====

const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: '123456',
        database: 'dbtest2',
        timezone: '+00:00'
    },
    debug: true
    //connection: process.env.PG_CONNECTION_STRING
}, (e) => {
    console.log(e);
});


var user_table_name = "users";
var device_table_name = "device";
var license_table_name = "license";




function DBinitKnex() {

}

// ===================== USERS DATABASE HANDLER ===============

function DBreadAllUsers() {
    console.log("SELECT * FROM users");
    return (
        knex(user_table_name).select().then(function (database_result) {
            return JSON.stringify(database_result);
        })

    );

}

function DBAddNewUser(payload_data) {
    console.log("INSERT INTO users (data, data , data) values(? ? ? )");
    knex(user_table_name).insert(payload_data).then(() => {
        console.log("Inserted user")
        return ("Insert succesful")
    })
        .catch((e) => {
            console.log(e)
            return ("Failed")
        })

}

function DBgetSingleUserProfile(parameter_id) {
    console.log("SELECT * FROM users WHERE id =" + parameter_id);

    let id_value = parameter_id;

    return (

        knex(user_table_name).where({ user_id: id_value }).then(function (database_result) {
            return JSON.stringify(database_result);
        }).catch((e) => {
            console.log(e)
            return ("Failed")
        })
    );

}


function DBdeleteUser(user_id) {

    console.log("Trying to delete user-data from database -> user index : " + user_id);

    knex(user_table_name).del().where({ user_id: user_id })
        .then(() => {
            console.log("User id ;" + user_id + "successfyly deleted from database");
        })
        .catch((e) => { console.log("Problem to delete user error : " + e); });

}


function DBmodifyUser(user_object, user_id_parameter) {

    console.log("Trying to modify user id : " + user_id_parameter + "  at database");

    knex(user_table_name).update(user_object).where({ user_id: user_id_parameter }).then(
        () => { console.log("User data succesfully updated !"); return ("done") }
    ).catch((e) => {
        console.log(e)
        return ("Failed")
    })



}


function DBviewAllVisibleUsers() {

    return (

        knex(user_table_name).where({ user_visible: "1" }).then(function (database_result) {
            return JSON.stringify(database_result);
        }).catch((e) => {
            console.log(e)
            return ("Failed")
        })
    );


}

function DBViewAllHiddenUsers() {

    return (

        knex(user_table_name).where({ user_visible: "0" }).orWhere({user_visible : null}).then(function (database_result) {
            return JSON.stringify(database_result);
        }).catch((e) => {
            console.log(e)
            return ("Failed")
        })
    );


}


// =================== DEVICE DATABASE HANDLER =================

function DBreadAllDevices() {

    return (
        knex(device_table_name).select().then(function (database_result) {
            return JSON.stringify(database_result);
        })

    );

}

function DBaddNewDevice(device_data) {

    knex(device_table_name).insert(device_data).then(() => {
        console.log("Inserted device")
        return ("Insert succesful");
    })
        .catch((e) => {
            console.log(e)
            return ("Failed");
        })

}



function DBdeleteDevice(device_index) {

    console.log("Trying to delete device-data from database -> device index : " + device_index);

    knex(device_table_name).del().where({ device_id: device_index })
        .then(() => {
            console.log("Device id ;" + device_index + "successfyly deleted from database");
        })
        .catch((e) => { console.log("Problem to delete user error : " + e); });

}

function DBgetSingleDeviceProfile(device_id_parameter) {

    console.log("Trying to get device id : " + device_id_parameter + "  profile data from database");

    return (

        knex(device_table_name).where({ device_id: device_id_parameter }).then(function (database_result) {
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
    knex(device_table_name).update(device_object).where({ device_id: device_id_parameter }).then(
        () => { console.log("Device data succesfully updated !"); return ("done") }
    ).catch((e) => {
        console.log(e)
        return ("Failed")
    })

}


function DBviewAllVisibleDevices() {

    return (

        knex(device_table_name).where({ device_visible: "1" }).then(function (database_result) {
            return JSON.stringify(database_result);
        }).catch((e) => {
            console.log(e)
            //reply("Failed")
            return ("Failed")
        })
    );


}

function DBviewAllHiddenDevices() {

    return (

        knex(device_table_name).where({ device_visible: "0" }).orWhere({device_visible : null}).then(function (database_result) {
            return JSON.stringify(database_result);
        }).catch((e) => {
            console.log(e)
            //reply("Failed")
            return ("Failed")
        })
    );

}


// =================== LICENSE DATABASE HANDLER ==================

function DBreadAllLicenses() {

    return (

        knex(license_table_name).select().then(function (database_result) {
            return JSON.stringify(database_result);
        })

    );

}

function DBaddLicense(license_object) {

    knex(license_table_name).insert(license_object).then(() => {
        console.log("Inserted license")
        // reply("Insert succesful")
        return ("Insert succesful");
    })
        .catch((e) => {
            console.log(e)
            return ("Failed");
        })

}


function DBgetSingleLicense(license_id) {


    return (

        knex(license_table_name).where({ license_id: license_id }).then(function (database_result) {
            return JSON.stringify(database_result);
        }).catch((e) => {
            console.log(e)
            return ("Failed")
        })
    );


}

function DBmodifyLicense(license_object, license_index) {

    knex(license_table_name).update(license_object).where({ license_id: license_index }).then(
        () => { console.log("License data succesfully updated !"); return ("done") }
    ).catch((e) => {
        console.log(e)
        return ("Failed")
    })


}


function DBdeleteLicense(license_index) {

    knex(license_table_name).del().where({ license_id: license_index })
        .then(() => {
            console.log("License id :" + license_index + "successfyly deleted from database");
        })
        .catch((e) => { console.log("Problem to delete user error : " + e); });

}


function DBviewAllVisibleLicenses() {

    return (
        knex(license_table_name).where({ license_visible : "1" }).then(function (database_result) {
            return JSON.stringify(database_result);
        }).catch((e) => {
            console.log(e);
            return ("Failed")
        })
    );

}

function DBviewAllHiddenLicenses() {

    return (
        knex(license_table_name).where({ license_visible : "0" }).orWhere({license_visible : null}).then(function (database_result) {
            return JSON.stringify(database_result);
        }).catch((e) => {
            console.log(e);
            return ("Failed")
        })
    );

}



//-------------- export knex functions ---------------------------

module.exports = {
    DBinitKnex,
    DBreadAllUsers,
    DBAddNewUser,
    DBgetSingleUserProfile,
    DBreadAllDevices,
    DBaddNewDevice,
    DBdeleteUser,
    DBdeleteDevice,
    DBgetSingleDeviceProfile,
    DBmodifyDevice,
    DBmodifyUser,
    DBreadAllLicenses,
    DBgetSingleLicense,
    DBmodifyLicense,
    DBdeleteLicense,
    DBaddLicense,
    DBviewAllVisibleUsers,
    DBViewAllHiddenUsers,
    DBviewAllVisibleDevices,
    DBviewAllHiddenDevices,
    DBviewAllVisibleLicenses,
    DBviewAllHiddenLicenses
}









