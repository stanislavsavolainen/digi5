import React from 'react';
import { render } from 'react-dom';

//material-ui
//import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/RaisedButton';
//import Toolbar from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';
import { Card, CardActions, CardHeader, CardTitle } from 'material-ui/Card';//my imports
import { ButtonStyle, make_user_data_structure, user_data_structure, TextStyle, advanced_field_name } from './theme_styles.jsx';
import DatePicker from 'material-ui/DatePicker';


export default class RegisterUser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user_data: make_user_data_structure()
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
                .reduce((result, field) => Object.assign(result, {[field.db_name]: field.value}), {})
        };


        console.log("DATA ORIGINAL : " + JSON.stringify(post_body2.user_data));
/*
        var payload_data = {};
        //payload_data.splice(0, payload_data.length);
        for (var i = 0; i < this.state.user_data.length; i++)
            for (var j = 0; j < this.state.user_data[i].rows.length; j++)
                for (var k = 0; k < this.state.user_data[i].rows[j].length; k++) {
                    //  console.log(JSON.stringify(this.state.user_data[i].rows[j][k].db_name) + "\n\n");
                    var temp_db_name_value = this.state.user_data[i].rows[j][k].value;
                    var temp_db_name_key = user_data_structure[i].rows[j][k].db_name;
                    if (temp_db_name_value != undefined) {
                        //  payload_data.push(  {temp_db_name_key} + ':' + '' + {temp_db_name_value} + ''  );
                        //  payload_data.push(JSON.stringify( {temp_db_name_key}  + ':' + '*' + {temp_db_name_value} + '*'));
                        //  payload_data.push( temp_db_name_key + t);
                        //  payload_data.push(":");
                        //   payload_data.push(temp_db_name_value)
                        // var temp_json = { [temp_db_name_key] : temp_db_name_value };
                        // let temp_obj = { [temp_db_name_key] : temp_db_name_value };
                        // payload_data.push(  [temp_db_name_key] : { temp_db_name_value}  );      
                        //  payload_data.assign(temp_obj);
                        // Object.assign(payload_data, temp_obj);       
                        payload_data[temp_db_name_key] = temp_db_name_value;

                        // payload_data.push(temp_object);
                        // var element = temp_db_name_key + ":"  + temp_db_name_value;
                        // payload_data.push( temp_db_name_key + temp_db_name_value  );
                        //  payload_data.push( temp_json ) ;
                        //  payload_data += JSON.stringify(temp_json);
                        // payload_data += element; 

                    } else {
                        // var element = temp_db_name_key + ":"  + temp_db_name_value;
                        payload_data[temp_db_name_key] = "";
                        //let temp_obj = { [temp_db_name_key] : ""};
                        //Object.assign(payload_data, temp_obj);   
                        //  payload.assign(temp_obj);
                        //  payload_data.push(temp_obj);
                        // payload_data.push(  [temp_db_name_key] =  "" );  


                        //  payload_data.push(temp_object);

                        //  var temp_json = { [temp_db_name_key] : "" };
                        //  payload_data.push( temp_json );
                        // payload_data += JSON.stringify(temp_json);
                        // payload_data += element;

                        // payload_data.push();
                        // payload_data.push("");
                    }
                }


        let post_body = {
            user_data: payload_data
        }

        delete post_body.user_data["undefined"]

        console.log("DATA MYVERSION : " + JSON.stringify(post_body.user_data));
*/

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
        let link = "/register_user";

        fetch(host + link, postData)
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
/*
        console.log("Data lenght :" + data.length);

        if(type == "date"){
            data.setHours(9);
            console.log(" Date field -> " + data);
            console.log(" Date field -> " + data.toISOString());
            

            let date_data = data.split("-");
            console.log("Modified date "+date_data[2] + "/"+date_data[1] + "/" +date_data[0]);

        }
*/

    }

    AdvancedFieldListener(index, data) {
        this.state.advanced_fields[index] = data;
    }

    ConvertDate(date) {
        date.setHours(9)
        return date.toISOString().substring(0, 10);
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

                                  field.type === "date" ?  <DatePicker style={{display: "inline-block"}} formatDate={new Intl.DateTimeFormat('en-GB').format} locale={'en-GB'} hintText={field.fieldName} onChange={ ( e, date ) => this.FieldListener(block_key, row_key, field_key, this.ConvertDate(date), field.type) } />   :  

                                    <TextField
                                        hintText={field.fieldName}
                                        onChange={(event) => this.FieldListener(block_key, row_key, field_key, event.target.value, field.type)} />
                                          
                                        )}</div>)

                            // if( field.type === "number")
                        }
                    </CardActions>
                </Card>

            </div>
        )} <Button label="Register user" primary={true} onClick={() => this.RegisterUsers()}></Button> </div>);

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