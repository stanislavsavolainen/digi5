
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
                { fieldName: "Status", type: "string", db_name: "status" },
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
                [{ fieldName: "Keys", type: "checkbox" , db_name  : "keys"}],
                [{ fieldName: "Active", type: "checkbox", db_name : "active" }]],
        }
    ]
}

function make_user_data_structure2() {
    return [
        {
            title: "Personal details",
            rows: [[
                { fieldName: "First name X", type: "string", db_name: "fname" },
                { fieldName: "Last name X", type: "string", db_name: "lname" },
            ],
            [
                { fieldName: "Phone X", type: "string" , db_name: "phone"},
                { fieldName: "E-mail X", type: "string", db_name: "email" },
            ],
            [
                { fieldName: "Photo ?", type: "string" },
               { fieldName: "External account ?", type: "string" },
            ]]
            ,
        },
        {
            title: "Work properties",
            rows: [[
                { fieldName: "Title X", type: "string", db_name: "title" },
                { fieldName: "Team X", type: "string", db_name: "team" },    
            ],
            [
                  { fieldName: "Contract details ?", type: "string" },
                { fieldName: "Location ?", type: "string",  }
            ],
            [
                { fieldName: "Work start X", type: "date" , db_name : "work_start" },
                { fieldName: "Work end X", type: "date", db_name : "work_end"  },
            ]]
        },
        {
            title: "Permission / Administrative rights",
            rows: [
                [{ fieldName: "Lukoton X", type: "checkbox", db_name : "lukoton"}],
                [{ fieldName: "Keys X", type: "checkbox" , db_name  : "keys"}],
                [{ fieldName: "Active X", type: "checkbox", db_name : "active" }],
                [{ fieldName: "Ad user ?", type: "string",}]
            ],
        }
    ]
}




let user_data_structure = make_user_data_structure()
let advanced_field_name = ["Lukoton", "Title", "Work Begin", "Work End", "Etc."];

export { ButtonStyle, make_user_data_structure, user_data_structure, field_name, TextStyle, advanced_field_name, make_user_data_structure2, };
