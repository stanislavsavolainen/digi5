
import React from 'react';
import { render } from 'react-dom';

import Button from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Card, CardActions, CardHeader, CardTitle } from 'material-ui/Card';
import DatePicker from 'material-ui/DatePicker';
import Dialog from 'material-ui/Dialog';
import Checkbox from 'material-ui/Checkbox';

//my component
import LinkButton from './../LinkButton.jsx';
import { make_user_data_structure, make_user_data_structure2  } from './user_data.jsx';
import { server_host_for_client } from './../client_connection.jsx';

export default class ModifyUser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user_id: props.match.params.userId,
            user_profile: null,
            open: false,
            dialog_command: ""
        }
    }

    FieldListener(data, fieldDBName) {
        this.state.user_profile[fieldDBName] = data;
        this.setState(this.state);
    }



    UpdateUserDataAtDB() {

        console.log("Update user from database");
        console.log("Field data : " + JSON.stringify(this.state.user_profile));

        let post_body = this.state.user_profile;

        console.log(this.state.user_profile);


        //post body
        let postData = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(post_body),
        };

        // ======== FETCH ====================

        //fetch
        let host = "http://127.0.0.1:5659";
        let link = "/modify_user";

        fetch(server_host_for_client + link, postData)
            .then(() => {
                console.log("Fetch done");
                this.props.history.push("/view-all");
            })
            .catch(function (error_msg) {
                console.log("Fetch error : " + error_msg);
            })
    }


    readUserProfileFromDB() {

        //post body
        let postData = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user_id: this.state.user_id }),
        };

        //fetch
        let host = "http://127.0.0.1:5659";
        // let link = "/read_from_database4"; //read profile data
        let link = "/user_profile";

       // fetch(host + link, postData)
        fetch( server_host_for_client  + link, postData)
            .then((resp) => {
                console.log(" >>> first then happen");
                return resp.json();
                // return resp.text();
            })
            .then((response) => {
                console.log("Fetch response happen !");

                //  this.handleResponse(response);
                console.log("User profile data :" + JSON.stringify(response));

                this.state.user_profile = response[0];
                this.setState(this.state)

            })
            .catch(function (error_msg) {
                // error if connection problem happens 
                console.log("Fetch error : " + error_msg);
                // document.getElementById("answer_field").innerHTML = "<div align='center'><font color='red'><h1>Node Server is down ! </h1></font></div>";
            })

    }


    deleteUserById() {

        //post body
        let postData = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user_id: this.state.user_id }),
        };

        //fetch
        let host = "http://127.0.0.1:5659";
        // let link = "/read_from_database4"; //read profile data
        let link = "/delete_user";



        fetch( server_host_for_client + link, postData)
            .then((resp) => {
                console.log(" >>> first then happen");
                return resp.json();
                // return resp.text();
            })
            .then((response) => {
                console.log("Fetch response happen !");
                this.props.history.push("/view-all");
                this.setState(this.state); 
            })
            .catch(function (error_msg) {
                // error if connection problem happens 
                console.log("Fetch error : " + error_msg);
            })

    }

    componentWillMount() {
        this.readUserProfileFromDB();
    }

    pickField(field, field_key) {
        return field.type === "date"
            ? <DatePicker style={{ display: "inline-block" }} title={field.fieldName}
                value={new Date(this.state.user_profile[field.db_name])}
                formatDate={new Intl.DateTimeFormat('en-GB').format}
                locale={'en-GB'} hintText={field.fieldName}
                onChange={(e, date) => this.FieldListener(date, field.db_name)} />
            : field.type === "checkbox" ?
                <Checkbox
                    label={field.fieldName} title={field.fieldName}
                    checked={this.state.user_profile[field.db_name]}
                    onCheck={ (event ,  isInputChecked ) => this.FieldListener(isInputChecked, field.db_name)} 
                />
                :
                <TextField hintText={field.fieldName} title={field.fieldName}
                    onChange={(event) => this.FieldListener(event.target.value, field.db_name)}
                    value={this.state.user_profile[field.db_name]} style={{ margin: 12 }} />
    }

    renderUserProfile() {

        return (
            <div>

                {
                    //remember map return content !
                    //lambda one line = return
                    this.state.user_profile == null ? <div /> : make_user_data_structure2().map((block, block_key) =>
                        <Card>
                            <CardHeader title={block.title} />
                            <CardActions>
                                {
                                    block.rows.map((row, row_key) =>
                                        <div>
                                            {row.map((field, field_key) => this.pickField(field, field_key))}
                                        </div>)
                                }
                            </CardActions>
                        </Card>)

                }
    
                <Button label="Update user" style={{ margin: 12 }} primary={true} onClick={() => { this.state.dialog_command = "update_user"; this.setState({ open: true }) }} />
               {/* <Button label="Delete" style={{ margin: 12 }} title="Delete user" primary={true} onClick={() => { this.state.dialog_command = "delete_user"; this.setState({ open: true }) }} /> */}
                {this.renderDialog(this.state.dialog_command)}

            </div>);

    }


    renderDialog(dialog_action) {

        let dialog_title = "";
        let dialog_button;
        let dialog_content = "";

        // ---- dialog open -> state -> update state or -> delete state
        // ---- dialog close -> state -> update state or -> delete state

        //update
        if (dialog_action === "update_user") {
            dialog_title = "Confirm user update";
            dialog_button = (<div><Button label="Cancel" primary={true} onClick={this.handleClose} /><Button label="Update" onClick={() => this.UpdateUserDataAtDB()} /></div>);
            dialog_content = "Are you sure that you want to update this user ?";
        }

        //delete
        else if (dialog_action === "delete_user") {
            dialog_title = "Confirm deleting user";
            dialog_button = (<div><Button label="Cancel" primary={true} onClick={this.handleClose} /><Button label="Delete" onClick={() => this.deleteUserById()} /></div>);
            dialog_content = "Are you sure that you want to delete this user ?";
        }


        return (
            <div>
                <Dialog title={dialog_title}
                    modal={true}
                    actions={dialog_button}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                >
                    {dialog_content}
                </Dialog>
            </div>);


    }


    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };


    //http://knexjs.org/

    // https://stackoverflow.com/questions/42212497/knex-js-how-to-update-a-field-with-an-expression

    render() {
        return (<div> <h1>  Modify user {this.state.user_id} </h1>
            {this.renderUserProfile()}
            <br /><br />
        </div>);
    }

}