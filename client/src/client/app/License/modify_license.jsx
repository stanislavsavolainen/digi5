import React from 'react';
import { render } from 'react-dom';

//material-ui component
import Button from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Card, CardActions, CardHeader, CardTitle } from 'material-ui/Card';

import { license_model, make_license_data_structure } from './license_data.jsx';

export default class ModifyLicense extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            license_id: props.match.params.licenseId,
            license_profile : null
        }
    }


     componentWillMount() {
        this.readLicenseDataFromDB();
    }

    readLicenseDataFromDB(){

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
                this.setState(this.state)

            })
            .catch(function (error_msg) {
                // error if connection problem happens 
                console.log("Fetch error : " + error_msg);
                // document.getElementById("answer_field").innerHTML = "<div align='center'><font color='red'><h1>Node Server is down ! </h1></font></div>";
            })



    }



    pickField(field, field_key){

        return( 
        <TextField 
            hintText={ field.fieldName  } 
            value={this.state.license_profile[field.db_name]}
            />);
    }


    licenseModificationLayout(){

        return (
            <div>
                       {
                    //remember map return content !
                    //lambda one line = return
                    this.state.license_profile  == null ? <div /> : make_license_data_structure().map((block, block_key) =>
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


                <Button label = "Updata license"  primary={true}  style={{ margin: 12 }} />
                <Button label = "Delete license"   primary={true}  style={{ margin: 12 }} />
            </div>

        );

    }


    render(){ return <div> License modification page <br /> { this.licenseModificationLayout() } </div> }


}

