
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
              { fieldName: "Comments", type: "string", db_name:"comments", info : "Tell me more about this user ? some detailed info ?" },   
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
                { fieldName: "Office room ( room and floor at work)", type: "string", db_name : "location", info : "Tell me your room number and floor , if I want to visit you face-to-face!" }
            ],
            [
                { fieldName: "Work start", type: "date" , db_name : "work_start", info : "" },
                { fieldName: "Work end", type: "date", db_name : "work_end" , info : "" },
            ]]
        },
        {
            title: "Permission / Administrative rights",
            rows: [
                [{ fieldName: "Lukoton", type: "checkbox", db_name : "lukoton", info : ""}],
                [{ fieldName: "Keys", type: "checkbox" , db_name  : "door_keys", info : ""}],
                [{ fieldName: "User is hidden", type: "checkbox", db_name : "user_visible", info : "" }],
                
            ],
        }
    ]
}




let user_data_structure = make_user_data_structure()
let advanced_field_name = ["Lukoton", "Title", "Work Begin", "Work End", "Etc."];

export { ButtonStyle, make_user_data_structure, user_data_structure, field_name, TextStyle, advanced_field_name, make_user_data_structure2, };
