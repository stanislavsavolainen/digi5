import React from 'react';
import { render } from 'react-dom';

//material-ui
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/FlatButton';
import Toolbar from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';
import { Card, CardActions, CardHeader, CardTitle } from 'material-ui/Card';


import { make_user_data_structure, user_data_structure, field_name, advanced_field_name, TextStyle2 } from './theme_styles.jsx';

export default class UserProfile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // screen: 'A'
            user_data: make_user_data_structure(),
            profile_user: [],
            user_id: props.match.params.userId,
        }
    }

    componentWillMount() {
        this.readProfileDataFromDB();
    }

    readProfileDataFromDB() {
        //post body
        let postData = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user_id: this.state.user_id}),
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

               this.state.profile_user = response;
                this.setState(this.state)

            })
            .catch(function (error_msg) {
                // error if connection problem happens 
                console.log("Fetch error : " + error_msg);
                // document.getElementById("answer_field").innerHTML = "<div align='center'><font color='red'><h1>Node Server is down ! </h1></font></div>";
            })

    }


    render() {


        return (<div> {this.state.user_data.map((block, block_key) =>
            <div style={{ margin: "30px" }}>
                <Card>
                    <CardHeader title={block.title} />
                    <CardActions>
                        {
                            block.rows.map((row, row_key) =>
                                <div>{
                                    row.map((field, field_key) =>
                                        <div>{
                                            this.state.profile_user.length > 0 ? field.fieldName + "  :  " + this.state.profile_user[0][field.db_name] : "empty"
                                        } </div>,

                                        {/* <Button
                                        label={field.fieldName}
                                        onChange={(event) => console.log("")} /> */},

                                    )}</div>)
                        }

                    </CardActions>
                </Card>

            </div>
        )} <Button label="test1"></Button> </div>);




    }

}