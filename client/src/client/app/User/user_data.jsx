
let ButtonStyle = {
    backgroundColor: 'darkred',
    color: 'gold',
}

let TextStyle = {
    color: 'green',
    fontWeight: 'bold'
}

let TextStyle2 = {
    color: 'lightgreen',
    fontWeight: 'bold'
}




let field_name = ["First name", "Last name", "Phone", "E-mail", "Status",];

function make_user_data_structure() {
    return [
        {
            title: "Personal details",
            rows: [[
                { fieldName: "First name", type: "string", db_name: "fname" },
                { fieldName: "Last name", type: "string", db_name: "lname" },
            ],
            [
                { fieldName: "Phone", type: "string" , db_name: "phone"},
                { fieldName: "E-mail", type: "string", db_name: "email" },
            ]],
        },
        {
            title: "Work properties",
            rows: [[
                { fieldName: "Title", type: "string", db_name: "title" },
                { fieldName: "Team", type: "string", db_name: "team" }
            ],
            [
                { fieldName: "Work start", type: "date" , db_name : "work_start" },
                { fieldName: "Work end", type: "date", db_name : "work_end"  },
            ]]
        },
        {
            title: "Permission / Administrative rights",
            rows: [
                [{ fieldName: "Lukoton", type: "checkbox", db_name : "lukoton"}],
                [{ fieldName: "Keys", type: "checkbox" , db_name  : "door_keys"}],
                [{ fieldName: "User is hidden", type: "checkbox", db_name : "user_visible" }]],
        }
    ]
}

function make_user_data_structure2() {
    return [
        {
            title: "Personal details",
            rows: [[
                { fieldName: "First name", type: "string", db_name: "fname", info : "" },
                { fieldName: "Last name", type: "string", db_name: "lname", info : "" },
            ],
            [
                { fieldName: "Phone", type: "string" , db_name: "phone", info : "if I want to call you, then I need your number"},
                { fieldName: "E-mail", type: "string", db_name: "email", info : "" },
            ],
            [
              { fieldName: "Comments", type: "string", db_name:"comments", info : "Describe here shortly the actions and activities assigned to this worker." },   
            ]
        
            ]
            

        },
        {
            title: "Work properties",
            rows: [[
                { fieldName: "Title", type: "string", db_name: "title", info : "" },
                { fieldName: "Team", type: "string", db_name: "team", info : "MUST HAVE ! (filtter search)" },    
            ],
            [
                { fieldName: "Office room", type: "string", db_name : "location", info : "Tell here the location of the user, like: floor number and room number." }
            ],
            [
                { fieldName: "Work start", type: "date" , db_name : "work_start", info : "" },
                { fieldName: "Work end", type: "date", db_name : "work_end" , info : "" },
            ]]
        },
        {
            title: "Permission / Administrative rights",
            rows: [
                [{ fieldName: "Lukoton", type: "checkbox", db_name : "lukoton", info : "Mark here if user has Lukoton application installed."}],
                [{ fieldName: "Keys", type: "checkbox" , db_name  : "door_keys", info : "Mark here if user has Keys to the office building"}],
                [{ fieldName: "User is hidden", type: "checkbox", db_name : "user_visible", info : "Mark here if the user is no longer working in the company either temprarily or constantly" }],
                
            ],
        }
    ]
}


let user_data_structure = make_user_data_structure()
let advanced_field_name = ["Lukoton", "Title", "Work Begin", "Work End", "Etc."];

export { ButtonStyle, make_user_data_structure, user_data_structure, field_name, TextStyle, advanced_field_name, make_user_data_structure2, };
