
import React from 'react';
import { render } from 'react-dom';

import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import Checkbox from 'material-ui/Checkbox';

import { license_model, make_license_data_structure } from './license_data.jsx';
import Button from 'material-ui/RaisedButton';

//my component
import LinkButton from './../LinkButton.jsx';
import { server_host_for_client } from './../client_connection.jsx';



export default class HiddenLicense extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            show_license: make_license_data_structure(),
            license: []
        }
    }


    restoreHiddenLicense(restore_license_id){


         let post_body = {
            license_id : restore_license_id
         }

         //post body
        let postData = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify( post_body),
        };

         let link = "/restore_license";

       // fetch(host + link, postData)
        fetch( server_host_for_client  + link, postData)
            .then((resp) => {
                return resp.json();
            })
            .then((restore) => {

                this.setState(this.state);

            })
            .catch(function (error_msg) {
                // error if connection problem happens 
                console.log("Fetch error : " + error_msg);
                // document.getElementById("answer_field").innerHTML = "<div align='center'><font color='red'><h1>Node Server is down ! </h1></font></div>";
            })


    }

    componentWillMount() {
        this.readLicenseFromDatabase();
    }


    readLicenseFromDatabase() {

        //post body
        let postData = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify("OK"),
        };

        //fetch
        let host = "http://127.0.0.1:5659";
        //let link = "/read_from_database3";
        let link = "/view_all_hidden_licenses";

       // fetch(host + link, postData)
        fetch( server_host_for_client  + link, postData)
            .then((resp) => {
                return resp.json();
            })
            .then((db_license) => {

                this.state.license = db_license;
                this.setState(this.state);

            })
            .catch(function (error_msg) {
                // error if connection problem happens 
                console.log("Fetch error : " + error_msg);
                // document.getElementById("answer_field").innerHTML = "<div align='center'><font color='red'><h1>Node Server is down ! </h1></font></div>";
            })


    }


    render() {
        return (
            <div>
               
                <br /> <h1> View hidden licenses </h1>

                  <Table>
                    <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                        <TableRow >

                            <TableHeaderColumn>License name</TableHeaderColumn>
                            <TableRowColumn> Restore </TableRowColumn>

                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                        {
                            this.state.license.map((val, index) =>
                                <TableRow>

                                    <TableRowColumn>{val.name}</TableRowColumn>
                                      <TableRowColumn>
                                       <Button label="restore"  style={{ margin: 12 }} primary={true} onClick={ () => this.restoreHiddenLicense(val.license_id) } />
                                    </TableRowColumn>

                                </TableRow>

                              
                            )
                        }
                    </TableBody>
                </Table>

            </div>
        );
    }


}


