import React from 'react';
import { render } from 'react-dom';

//material-ui
//import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/RaisedButton';
//import Toolbar from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';
import { Card, CardActions, CardHeader, CardTitle } from 'material-ui/Card';//my imports
//import { ButtonStyle, make_user_data_structure, user_data_structure, TextStyle, advanced_field_name } from './theme_styles.jsx';
import { make_user_data_structure, make_user_data_structure2 } from './user_data.jsx';
import { server_host_for_client } from './../client_connection.jsx';

import DatePicker from 'material-ui/DatePicker';
import Checkbox from 'material-ui/Checkbox';
import ActionHome from 'material-ui/svg-icons/action/home';
import IconButton from 'material-ui/IconButton';


export default class AddUser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user_data: make_user_data_structure2()
        }
    }



    RegisterUsers() {

        //====== PAYLOAD ==================

        let post_body2 = {
            user_data: this.state.user_data
                .reduce((result, block) => result.concat(block.rows), [])
                .reduce((result, row) => result.concat(result, row))
                .filter((field) => field.value != undefined && field.db_name != undefined)
                //                .map((field) => ({ ...field, value: typeof(field.value) === 'string' ? field.value.toLowerCase() : field.value }))
                .reduce((result, field) => Object.assign(result, { [field.db_name]: field.value }), {})
        };


        console.log("DATA ORIGINAL : " + JSON.stringify(post_body2.user_data));


        //post body
        let postData = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(post_body2),
        };

        // ======== FETCH ====================

        //fetch
        let host = "http://127.0.0.1:5659";
        //let link = "/save_to_database2";
        let link = "/add_user";

        //  fetch(host + link, postData)
        fetch(server_host_for_client + link, postData)
            .then(() => {
                console.log("Fetch done")

                this.props.history.push("/view-all");

            })
            .catch(function (error_msg) {
                console.log("Fetch error : " + error_msg);
            })


        //go to registered user profile page, like view_all_users.jsx
        //special user profile button click can navigate to user_profile.jsx 
        //page with user_id parameter after user is registered to database
        // ===> avoid register same users many times ( only one time )

        // this.goToAllUsersPage();    

    }


    // *****************************************************************

    FieldListener(block_key, row_key, field_key, data) {
        console.log(data);
        this.state.user_data[block_key].rows[row_key][field_key].value = data;


    }

    AdvancedFieldListener(index, data) {
        this.state.advanced_fields[index] = data;
    }

    render() {

        let drawContent = [];
        drawContent.splice(0, drawContent.length);

        let field_index = 0;

        return (<div> {this.state.user_data.map((block, block_key) =>
            <div style={{ margin: "30px" }}>
                <Card>
                    <CardHeader title={block.title} />
                    <CardActions>
                        {
                            block.rows.map((row, row_key) =>
                                <div>{row.map((field, field_key) =>

                                    field.type === "date" ? <DatePicker title={field.fieldName} style={{ display: "inline-block" }} formatDate={new Intl.DateTimeFormat('en-GB').format} locale={'en-GB'} hintText={field.fieldName} onChange={(e, date) => this.FieldListener(block_key, row_key, field_key, date, field.type)} okLabel="Ok" cancelLabel="Cancel" />
                                        : field.type === "checkbox" ?
                                            <Checkbox
                                                label={field.fieldName} title={field.fieldName}
                                                // onCheck={(event ) => this.FieldListener( block_key, row_key, field_key, event.target.value, field.type )}
                                                onCheck={(event, isInputChecked) => this.FieldListener(block_key, row_key, field_key, isInputChecked, field.type)}
                                            /> :
                                            [
                                            <TextField
                                                hintText={field.fieldName} title={field.fieldName}
                                                onChange={(event) => this.FieldListener(block_key, row_key, field_key, event.target.value, field.type)} style={{ margin: 12 }} />
                                            , <IconButton tooltip={ <div><font> 123</font> <br />  <font> 345 </font></div> } touch={true} tooltipPosition="bottom-center">
                                                                <ActionHome />
                                                            </IconButton>
                                            ]    

                                )}</div>)

                            // if( field.type === "number")
                        }
                    </CardActions>
                </Card>

            </div>
        )} <Button label="Add user" primary={true} onClick={() => this.RegisterUsers()}></Button> </div>);


    }

}