
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
                value={this.state.user_profile[field.db_name]} />
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
                <Button label="Update user" primary={true} onClick={() => this.UpdateUserDataAtDB()} />
            </div>);

    }




    //http://knexjs.org/

    // https://stackoverflow.com/questions/42212497/knex-js-how-to-update-a-field-with-an-expression




    render() {
        return (<div> <h1>  Modify user {this.state.user_id} </h1>
            {this.renderUserProfile()}
        </div>);
    }

}