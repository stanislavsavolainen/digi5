import React from 'react';
import { render } from 'react-dom';

//material-ui component
import Button from 'material-ui/RaisedButton';
import { Card, CardActions, CardHeader, CardTitle } from 'material-ui/Card';

//my component
import LinkButton from './../LinkButton.jsx';
import { device_data_model, make_device_data_structure } from './device_data.jsx';
import { server_host_for_client } from './../client_connection.jsx';

export default class DeviceProfile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
             show_devices: make_device_data_structure(),
            device_id: props.match.params.deviceId,
            device_profile : [],
        }
    }


    readDeviceProfileFromDB() {

        //post body
        let postData = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ device_id: this.state.device_id }),
        };

        //fetch
        let host = "http://127.0.0.1:5659";
        // let link = "/read_from_database4"; //read profile data
        let link = "/device_profile";

       // fetch(host + link, postData)
         fetch(server_host_for_client  + link, postData)
        
            .then((resp) => {
                console.log(" >>> first then happen");
                return resp.json();
                // return resp.text();
            })
            .then((response) => {
                console.log("Fetch response happen !");

                //  this.handleResponse(response);
                console.log("User profile data :" + JSON.stringify(response));

                this.state.device_profile = response;
                this.setState(this.state)

            })
            .catch(function (error_msg) {
                // error if connection problem happens 
                console.log("Fetch error : " + error_msg);
                // document.getElementById("answer_field").innerHTML = "<div align='center'><font color='red'><h1>Node Server is down ! </h1></font></div>";
            })

    }

    componentWillMount() {
        this.readDeviceProfileFromDB();
    }



    renderProfileLayout(){

        return (
            <div>
                {this.state.show_devices.map((block, block_key) =>
            <div style={{ margin: "30px" }}>
                <Card>
                    <CardHeader title={block.title} />
                    <CardActions>
                        {
                            block.rows.map((row, row_key) =>
                                <div>{
                                    row.map((field, field_key) =>
                                        <div>{
                                            this.state.device_profile.length > 0 ? field.fieldName + "  :  " + this.state.device_profile[0][field.db_name] : "empty"
                                        } </div>,

                                        {/* <Button
                                        label={field.fieldName}
                                        onChange={(event) => console.log("")} /> */},

                                    )}</div>)
                        }

                    </CardActions>
                </Card>

            </div>
        )}
            </div>
        );

    }



    render() {


        return (
            <div> Device profile : {this.state.device_id}
                <br />
                 { this.renderProfileLayout() }   
                <br />
                <LinkButton label="Modify" url={"/modify-device/" + this.state.device_id} />
                <LinkButton label="Delete" url={"/delete-device/" + this.state.device_id} />
            </div>);
    }


}