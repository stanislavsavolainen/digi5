
import React from 'react';
import { render } from 'react-dom';

import Button from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Card, CardActions, CardHeader, CardTitle } from 'material-ui/Card';
import DatePicker from 'material-ui/DatePicker';

//my component
import LinkButton from './../LinkButton.jsx';
import { make_user_data_structure } from './theme_styles.jsx';

export default class ModifyUser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user_id: props.match.params.userId,
            user_profile: null,
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

        fetch(host + link, postData)
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

        fetch(host + link, postData)
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


    deleteUserById(deleted_user_id, array_index) {

        //post body
        let postData = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user_id: deleted_user_id }),
        };

        //fetch
        let host = "http://127.0.0.1:5659";
        // let link = "/read_from_database4"; //read profile data
        let link = "/delete_user";



        fetch(host + link, postData)
            .then((resp) => {
                console.log(" >>> first then happen");
                return resp.json();
                // return resp.text();
            })
            .then((response) => {
                console.log("Fetch response happen !");

                //  this.handleResponse(response);
                // console.log("User profile data :" + JSON.stringify(response));

                //  this.state.profile_user = response;
                //    this.setState(this.state)
                //this.state.users.splice( this.state.users[deleted_user_id]  , 1);
               
                // this.state.users.splice(deleted_user_id, 1);
               //this.state.users.splice(array_index, 1);
                this.props.history.push("/view-all");

                //delete this.state.users[deleted_user_id];
                this.setState(this.state);
                // this.forceUpdate();

            })
            .catch(function (error_msg) {
                // error if connection problem happens 
                console.log("Fetch error : " + error_msg);
                // document.getElementById("answer_field").innerHTML = "<div align='center'><font color='red'><h1>Node Server is down ! </h1></font></div>";
            })


        //this.setState(this.state);
    }

    componentWillMount() {
        this.readUserProfileFromDB();
    }

    pickField(field, field_key) {
        return field.type === "date"
            ? <DatePicker style={{ display: "inline-block" }}
                value={new Date(this.state.user_profile[field.db_name])}
                formatDate={new Intl.DateTimeFormat('en-GB').format}
                locale={'en-GB'} hintText={field.fieldName}
                onChange={(e, date) => this.FieldListener(date, field.db_name)} />
            : <TextField hintText={field.fieldName}
                onChange={(event) => this.FieldListener(event.target.value, field.db_name)}
                value={this.state.user_profile[field.db_name]} style={{ margin: 12 }} />
    }

    renderUserProfile() {

        return (
            <div>

                {
                    //remember map return content !
                    //lambda one line = return
                    this.state.user_profile == null ? <div /> : make_user_data_structure().map((block, block_key) =>
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
                <Button label="Update user" style={{ margin: 12 }} primary={true} onClick={() => this.UpdateUserDataAtDB()} />
                <Button label="Delete" style={{ margin: 12 }} title="Delete user" primary={true} onClick={() => { this.deleteUserById(this.state.user_id, 0); }} />
                <Button label="Dialog"  style={{ margin: 12 }} primary={true} /> 
            </div>);

    }

    areYouSure(){

        return(<div> 
            Do you want delete/update this data ? 
            <Button label="NO"  primary={true} style={{ margin: 12 }} />  
            <Button label="YES"  primary={true} style={{ margin: 12 }}  />
            
            </div>);

    }



    //http://knexjs.org/

    // https://stackoverflow.com/questions/42212497/knex-js-how-to-update-a-field-with-an-expression




    render() {
        return (<div> <h1>  Modify user {this.state.user_id} </h1>
            {this.renderUserProfile()}
            <br /><br />
            {this.areYouSure()}
        </div>);
    }

}