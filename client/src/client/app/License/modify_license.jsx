import React from 'react';
import { render } from 'react-dom';

//material-ui component
import Button from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Card, CardActions, CardHeader, CardTitle } from 'material-ui/Card';
import Dialog from 'material-ui/Dialog';

//my component
import { license_model, make_license_data_structure } from './license_data.jsx';

export default class ModifyLicense extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            license_id: props.match.params.licenseId,
            license_profile: null,
            open: false,
            dialog_command: ""
        }
    }


    componentWillMount() {
        this.readLicenseDataFromDB();
    }

    readLicenseDataFromDB() {

        console.log("Read license data here !");

        //post body
        let postData = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ license_id: this.state.license_id }),
        };


        //fetch
        let host = "http://127.0.0.1:5659";
        // let link = "/read_from_database4"; //read profile data
        let link = "/view_selected_license";

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

                this.state.license_profile = response[0];
                this.setState(this.state);

            })
            .catch(function (error_msg) {
                // error if connection problem happens 
                console.log("Fetch error : " + error_msg);
                // document.getElementById("answer_field").innerHTML = "<div align='center'><font color='red'><h1>Node Server is down ! </h1></font></div>";
            })



    }


    updateLicenseAtDB() {
        //

        console.log("Update license !");

        
        let post_body = this.state.license_profile;

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
        let link = "/modify_license";

        fetch(host + link, postData)
            .then(() => {
                console.log("Fetch done");
               this.props.history.push("/view-license");
            })
            .catch(function (error_msg) {
                console.log("Fetch error : " + error_msg);
            })
            
    
    }


    deleteLicenseById() {
        //
        console.log("Delete license");

         //post body
        let postData = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ license_id: this.state.license_id }),
        };

        //fetch
        let host = "http://127.0.0.1:5659";
        // let link = "/read_from_database4"; //read profile data
        let link = "/delete_license";

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

                this.props.history.push("/view-license");

            })
            .catch(function (error_msg) {
                // error if connection problem happens 
                console.log("Fetch error : " + error_msg);
                // document.getElementById("answer_field").innerHTML = "<div align='center'><font color='red'><h1>Node Server is down ! </h1></font></div>";
            })



    }

    renderDialog(dialog_action) {

        let dialog_title = "";
        let dialog_button;
        let dialog_content = "";

        // ---- dialog open -> state -> update state or -> delete state
        // ---- dialog close -> state -> update state or -> delete state

        //update
        if (dialog_action === "update_license") {
            dialog_title = "Confirm license update";
            dialog_button = (
                <div>
                    <Button label="Cancel" primary={true} onClick={this.handleClose} />
                    <Button label="Update" onClick={() => this.updateLicenseAtDB()} />
                </div>);
            dialog_content = "Are you sure that you want to update this license ?";
        }

        //delete
        else if (dialog_action === "delete_license") {
            dialog_title = "Confirm deleting license";
            dialog_button = (
                <div>
                    <Button label="Cancel" primary={true} onClick={this.handleClose} />
                    <Button label="Delete" onClick={() => this.deleteLicenseById()} />

                </div>
            );
            dialog_content = "Are you sure that you want to delete this license ?";
        }


        // dialog -> actions={dialog_button}
        // -> onRequestClose={this.handleClose}

        return (
            <div>
                <Dialog title={dialog_title}
                    modal={true}
                    actions={dialog_button}
                    onRequestClose={this.handleClose}
                    open={this.state.open}
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


    pickField(field, field_key) {

        return (
            <TextField
                hintText={field.fieldName}
                value={this.state.license_profile[field.db_name]}
            />);
    }

    licenseModificationLayout() {

        return (
            <div>
                {
                    //remember map return content !
                    //lambda one line = return
                    this.state.license_profile == null ? <div /> : make_license_data_structure().map((block, block_key) =>
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


                <Button label="Update license" primary={true} style={{ margin: 12 }} onClick={ () => { this.setState({ dialog_command: "update_license", open : true })  } } />
                <Button label="Delete license" primary={true} style={{ margin: 12 }} onClick={ () => { this.setState({ dialog_command: "delete_license", open : true }) } } />

                {this.renderDialog(this.state.dialog_command)}

            </div>

        );

    }


    render() { return <div> License modification page <br /> {this.licenseModificationLayout()} </div> }


}

