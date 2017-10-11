
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
                { fieldName: "Work start", type: "date" },
                { fieldName: "Work end", type: "date" },
            ]]
        },
        {
            title: "Permission / Administrative rights",
            rows: [
                [{ fieldName: "Lukoton", type: "number", db_name : "lukoton"}],
                [{ fieldName: "Keys", type: "number" , db_name  : "keys"}],
                [{ fieldName: "Active", type: "number", db_name : "active" }]],
        }
    ]
}

let user_data_structure = make_user_data_structure()
let advanced_field_name = ["Lukoton", "Title", "Work Begin", "Work End", "Etc."];

export { ButtonStyle, make_user_data_structure, user_data_structure, field_name, TextStyle, advanced_field_name };
