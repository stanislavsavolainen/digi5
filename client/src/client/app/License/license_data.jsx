

// CREATE TABLE `licenes` (
//   `id_license` int(11) NOT NULL,
//   `id_device` int(11) DEFAULT NULL,
//   `license_code` varchar(45) DEFAULT NULL,
//   `user` varchar(45) DEFAULT NULL,
//   `pass` varchar(45) DEFAULT NULL,
//   `name` varchar(45) DEFAULT NULL
// ) ENGINE=InnoDB DEFAULT CHARSET=latin1;



let license_model = {
    license_id : 100,
    device_id : 5,
    license_code : "X345C12S",
    user : "admin",
    pass : "123456",
    name : "MS office 2010"
}

// | license_id   | int(11)      | NO   | PRI | NULL    | auto_increment |
// | device_id    | int(11)      | YES  |     | NULL    |                |
// | license_code | varchar(45)  | YES  |     | NULL    |                |
// | user         | varchar(45)  | YES  |     | NULL    |                |
// | pass         | varchar(45)  | YES  |     | NULL    |                |
// | name         | varchar(45)  | YES  |     | NULL    |                |
// | comments     | varchar(100) | YES  |     | NULL    |                |


let license_data_object = [
    {
        title: "License information",
        rows: [
            [
             //    { fieldName: "Id", type: "number", db_name: "device_id", modify : false },
                { fieldName: "License name", type: "string", db_name: "name" }, 
                { fieldName: "Device id", type: "number", db_name: "device_id" },
                { fieldName: "License code", type: "string", db_name: "license_code"},
            ],
            [
                { fieldName: "User", type: "string", db_name: "user"},
              
                { fieldName: "License activation (pass)", type: "string", db_name: "pass" },
                { fieldName: "Comments", type: "string", db_name: "comments" },
            ],
             [
                { fieldName: "License is hidden", type: "checkbox" ,  db_name : "license_visible" },
            ]
           
        ],
    },
   
]


function make_license_data_structure() {
    return license_data_object;
}



export {license_model, make_license_data_structure}