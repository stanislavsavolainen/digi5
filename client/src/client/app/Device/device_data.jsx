
//devices` (`id_device`, `type`, `serial`, `warranty`, 
//`shop`, `model`, `comments`, `user`, `pass`, `IP`, `refernce`, 
//`inuse`, `last_user`, `last_avaible_date`,

// myway
//CREATE TABLE device1(
// 
// device_id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
// type int,
// name VARCHAR(45),
// model VARCHAR(45),
// serial_number VARCHAR(45),
// warranty VARCHAR(45),
// about_device VARCHAR(100),
//
// owner_id int,
// owner_group VARCHAR(45),
// current_user_id int,
// lat_user_id int,
// device_available int,
// available_after VARCHAR(45)
//  
//);


let device_data_model = {

    //device information
    device_id: 34, // auto increment field 
    type: 1,   // 1 = notebook, 2 = desktop, 3 = tablet-pc, 4 = mobile phone, etc...
    name: "test device",
    model: 5,
    serial_number: "S456-U65B",
    warranty: "lifetime",
    about_device: "", //detailed information about device

    //user permission
    owner: "", //also can contain user id or team/organization
    owner_group: "",
    current_user_id: 6, //lend device to person -> who is responsible for it
    last_user_id: -6, // information who used it previosly or array of users, then contains array of data
    users_team: 5,  //if device is lended in group of user

    //warranty and security

}


let device_data_object = [
    {
        title: "device information",
        rows: [
            [
                //    { fieldName: "Id", type: "number", db_name: "device_id", modify : false },
                { fieldName: "Name", type: "string", db_name: "name" },
                { fieldName: "Type", type: "number", db_name: "type" },
            ],
            [
                { fieldName: "Serial number", type: "string", db_name: "serial_number"},
                { fieldName: "Warranty", type: "string", db_name: "warranty" },
                { fieldName: "About", type: "string", db_name: "about_device"},
            ],

        ],
    },
    {
        title: "user permission",
        rows: [
            [
                { fieldName: "Owner", type: "number", db_name: "owner_id"},
                { fieldName: "Owner group", type: "string", db_name: "owner_group"},
            ],
            [
                { fieldName: "Current user id", type: "number", db_name: "current_user_id" },
                { fieldName: "Previous user id", type: "number", db_name: "last_user_id" },
            ],
        ]
    }

]


function make_device_data_structure() {
    return device_data_object;
}




// warranty_text  	x	varchar(45)
// warranty_start		datetime,
// warranty_expire 	datetime,
// shop			varchar(45)


// user 			varchar(45)
// pass 			varchar(45)





// last_availabe_data	datetime,
// LastAvailable		datetime	



let device_data_object2 = [
    {
        title: "device information",
        rows: [
            [
                //    { fieldName: "Id", type: "number", db_name: "device_id", modify : false },
                { fieldName: "device name", type: "string", db_name: "name" },
                { fieldName: "Type ", type: "string", db_name: "type" },
            ],
            [
                { fieldName: "Model", type: "string", db_name: "model" },
                { fieldName: "Serial number", type: "string", db_name: "serial_number" },
                { fieldName: "Comments", type: "string", db_name: "about_device" },
            ],
            [
                { fieldName: "IP address ", type: "string", db_name : "ip_address" },
            ]

        ],
    },
    {
        title: "user permission",
        rows: [
            [
                { fieldName: "Owner", type: "number", db_name: "owner_id" },
                { fieldName: "Device of team", type: "string", db_name: "owner_group" },
            ],
            [
                { fieldName: "User reservation", type: "number", db_name: "current_user_id" },
               
            ],
            [
                { fieldName: "Last available date (not working)", type: "date" },
                { fieldName: "Last used date (not working)", type: "date" },
            ],
            [
                { fieldName: "Device is hidden", type: "checkbox", db_name: "device_visible"},
            ]
        ]
    },
    {
        title: "Warranty info and device come from",
        rows: [
            [
                { fieldName: "Shop", type: "string", db_name: "shop" },
            ],
            [
                { fieldName: "Warranty exprire (not working, current date + 2 years)", type: "date" },
            ],
        ]
    }

]


function make_device_data_structure2() {
    return device_data_object2;
}




export { device_data_model, make_device_data_structure, make_device_data_structure2 }