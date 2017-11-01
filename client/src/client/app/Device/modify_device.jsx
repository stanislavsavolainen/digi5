
import React from 'react';
import { render } from 'react-dom';

//material-ui component
import Button from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Card, CardActions, CardHeader, CardTitle } from 'material-ui/Card';

//my component
import LinkButton from './../LinkButton.jsx';
import { renderAreYouSure } from './../are_you_sure.jsx'
import { device_data_model, make_device_data_structure } from './device_data.jsx';

import Dialog from 'material-ui/Dialog';


export default class ModifyDevice extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            device_id: props.match.params.deviceId,

            device_profile: {},

            open: true,
        }
    }


    FieldListener(block_key, row_key, field_key, data, type, fieldDBName) {
        this.state.device_profile[fieldDBName] = data;
        this.setState(this.state);
        console.log("Data lenght :" + data.length)
    }

    renderProfileLayout2() {


          const actions = [
      <Button
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <Button
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,
    ];


        return (
            <div>

                {
                    //remember map return content !
                    //lambda one line = return
                    this.state.device_profile.length == 0 ? <div /> : make_device_data_structure().map((block, block_key) =>
                        <Card>
                            <CardHeader title={block.title} />
                            <CardActions>
                                {
                                    block.rows.map((row, row_key) =>
                                        <div>
                                            {row.map((field, field_key) =>

                                                <TextField hintText={field.fieldName}
                                                    onChange={(event) => this.FieldListener(block_key, row_key, field_key, event.target.value, field.type, field.db_name)}
                                                    // <div> {this.state.device_profile.length > 0 ? field.fieldName + "  :  " + this.state.device_profile[0][field.db_name] : "empty" } </div>
                                                    value={this.state.device_profile[field.db_name]} style={{ margin: 12 }}
                                                />
                                            )

                                            }

                                        </div>)
                                }
                            </CardActions>
                        </Card>)

                }
                <Button label="Update device" style={{ margin: 12 }} primary={true} onClick={() => this.UpdateDeviceDataAtDB()} />
                <Button label="Delete" style={{ margin: 12 }} primary={true} onClick={() => { this.deleteDeviceById(this.state.device_id, 0); }} />
                <Button label="Dialog" style={{ margin: 12 }} primary={true} onClick={() =>   this.setState({ open: true }) } />

                <Dialog
                    title="Dialog With Actions"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                >
                    The actions in this window were passed in as an array of React objects.
        </Dialog>


            </div>);

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

                this.state.device_profile = response[0];
                this.setState(this.state)

            })
            .catch(function (error_msg) {
                // error if connection problem happens 
                console.log("Fetch error : " + error_msg);
                // document.getElementById("answer_field").innerHTML = "<div align='center'><font color='red'><h1>Node Server is down ! </h1></font></div>";
            })

    }


    UpdateDeviceDataAtDB() {

        console.log("Add device to database");
        console.log("Field data : " + JSON.stringify(this.state.device_profile));

        let post_body = this.state.device_profile;

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
        let link = "/modify_device";

        fetch(host + link, postData)
            .then(() => {
                console.log("Fetch done");
                this.props.history.push("/view-devices");
            })
            .catch(function (error_msg) {
                console.log("Fetch error : " + error_msg);
            })

    }


    deleteDeviceById(deleted_device_id, array_index) {

        console.log("Delete device id : " + deleted_device_id + " and array index " + array_index);

        //post body
        let postData = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ device_id: deleted_device_id }),
        };

        //fetch
        let host = "http://127.0.0.1:5659";
        // let link = "/read_from_database4"; //read profile data
        let link = "/delete_device";

        fetch(host + link, postData)
            .then((resp) => {
                console.log(" >>> first then happen");
                return resp.json();
                // return resp.text();
            })
            .then((response) => {
                console.log("Fetch response happen !");

                // this.state.devices.splice(array_index, 1);
                this.setState(this.state);

                this.props.history.push("/view-devices");

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


    /*
      handleOpen()  {

        this.state.open = true;

        this.setState(this.state);

    //this.setState({open: true});
  };

  handleClose () {

    this.state.open = false;

    this.setState(this.state);

   // this.setState({open: false});
  };

  */

  //  a = 3;

  
    handleOpen = () => {
       this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };


    render() {
        return (<div>
            <h1>  Modify device {this.state.device_id}  </h1>
            <br />< br />
            {this.renderProfileLayout2()}
            <br /><br />
            { /* this.areYouSure() */
                renderAreYouSure("Ok")
            }

        </div>);
    }

}