
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

let user_data_structure = [
    {
        title: "Personal details",
        rows: [[
            { fieldName: "First name", type: "string" },
            { fieldName: "Last name", type: "string" },
        ],
        [
            { fieldName: "Phone", type: "number" },
            { fieldName: "E-mail", type: "string" },
        ]],
    },
    {
        title: "Work properties",
        rows: [[
            { fieldName: "Title", type: "string" },
            { fieldName: "Status", type: "string" },
            { fieldName: "Team", type: "string" }
        ],
        [
            { fieldName: "Work start", type: "date" },
            { fieldName: "Work end", type: "date" },
        ]]
    },
    {
        title: "Permission / Administrative rights",
        rows: [
            [{ fieldName: "Lukoton", type: "string" }],
            [{ fieldName: "Keys", type: "string" }],
            [{ fieldName: "Active", type: "string" }]],
    }
]

let advanced_field_name = ["Lukoton", "Title", "Work Begin", "Work End", "Etc."];

export { ButtonStyle, user_data_structure, field_name, TextStyle, advanced_field_name };
