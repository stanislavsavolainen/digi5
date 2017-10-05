import React from 'react';
import { render } from 'react-dom';

//material-ui
//import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
//import Toolbar from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';
import { Card, CardActions, CardHeader, CardTitle } from 'material-ui/Card';//my imports
import { ButtonStyle, user_data_structure, TextStyle, advanced_field_name } from './theme_styles.jsx';

export default class RegisterUser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fields: ["", "", "", "", "", ""],
            advanced_fields: ["", "", "", "", "", ""],
        }
    }


    RegisterUsers() {

        //====== PAYLOAD ==================

        let post_body = {
            user_data: {
                p_id_user: "not_defined",
                p_fname: this.state.fields[0],
                p_lname: this.state.fields[1],
                p_work_start: "not_defined",
                p_work_end: "not_defined",
                p_status: this.state.fields[4],
                p_title: "not_defined",
                p_team: "not_defined",
                p_phone: this.state.fields[2],
                p_keys: "not_defined",
                p_lukoton: "not_defined",
                p_active: "not_defined",
                p_email: this.state.fields[3],
                p_slack: "not_defined",
                p_comments: "not_defined",
                p_school: "not_defined",
                p_location: "not_defined",
                p_usercol: "not_defined",
                p_photo: "not_defined",
                p_address: "not_defined",
                p_ad_user: "not_defined"
            },
        };

        //=========== POST DATA ==============

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
        let link = "/save_to_database2";

        fetch(host + link, postData)
            .then((resp) => {
                console.log(" >>> first then happen");
                //return resp.json(); 
                return resp.text();
            })
            .then((response) => {
                console.log("Fetch response happen !");
            })
            .catch(function (error_msg) {
                // error if connection problem happens 
                console.log("Fetch error : " + error_msg);
                //  document.getElementById("answer_field").innerHTML = "<div align='center'><font color='red'><h1>Node Server is down ! </h1></font></div>";
            })





    }

    // *****************************************************************

    FieldListener(index, data) {
        this.state.fields[index] = data;
        console.log("Field " + index + " -> " + data);
    }

    AdvancedFieldListener(index, data) {
        this.state.advanced_fields[index] = data;
    }



    render() {

        let drawContent = [];
        drawContent.splice(0, drawContent.length);

        let field_index = 0;

        return user_data_structure.map((value, key) =>
            <div style={{margin:"30px"}}>
                <Card>
                    <CardHeader title={value.title} />
                    <CardActions>
                        {
                            value.rows.map((row, key) =>
                                <div>{row.map((field, key) =>
                                    <TextField
                                        hintText={field.fieldName}
                                        onChange={(event) => this.FieldListener(key, event.target.value)} />)}</div>)
                        }
                    </CardActions>
                </Card>
            </div>
        )

        /*
        // for (var i = 0; i < field_name.length; i++) {
        field_name.forEach((value, key) => {
            //  drawContent.push(<div>  <br /> {this.state.field_name[i]} <TextField style={{ backgroundColor: 'orange' }} /> </div>);
            // drawContent.push(<div>  <br /> {field_name[i]} <TextField style={{ backgroundColor: 'orange' }} onChange={(event) => { this.FieldListener(field_index, event.target.value) }} /> </div>);
            drawContent.push(<TextField hintText={value} style={{ backgroundColor: 'orange' }} onChange={(event) => { this.FieldListener(key, event.target.value) }} />);
            field_index++;
        });




        drawContent.push(<div> ***** USER ADVANCED PROFILE DATA *********** </div>);


        for (var i = 0; i < advanced_field_name.length; i++) {
            //  drawContent.push(<div>  <br /> {this.state.field_name[i]} <TextField style={{ backgroundColor: 'orange' }} /> </div>);
            drawContent.push(<div>  <br />  <TextField hintText={advanced_field_name[i]} style={{ backgroundColor: 'orange' }} onChange={(event) => { this.AdvancedFieldListener(i, event.target.value) }} /> </div>);
        }


        return (
            <div style={{ backgroundColor: 'burlywood' }} >
                <h1> Register new user </h1> {drawContent}
                <br /><FlatButton style={ButtonStyle} onClick={() => this.RegisterUsers()}> Register user </FlatButton>
            </div>);
        */
    }

}