import React from 'react';
import { render } from 'react-dom';

import { Card, CardActions, CardHeader, CardTitle } from 'material-ui/Card';
import Button from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


//my components
import { license_model, make_license_data_structure } from './license_data.jsx';


export default class AddLicense extends React.Component {


    //  {/* make_license_data_structure().map() */}

    constructor(props) {
        super(props);
        this.state = {
            license_data: make_license_data_structure()
        }
    }


     FieldListener(block_key, row_key, field_key, data) {
        console.log(data);
        this.state.license_data[block_key].rows[row_key][field_key].value = data;
     }


    addLicense() {

        //check to read data rignt for payload ! (copied from addUser and modified)
         let post_body = {
            license_data: this.state.license_data
                .reduce((result, block) => result.concat(block.rows), [])
                .reduce((result, row) => result.concat(result, row))
                .filter((field) => field.value != undefined && field.db_name != undefined)
                //                .map((field) => ({ ...field, value: typeof(field.value) === 'string' ? field.value.toLowerCase() : field.value }))
                .reduce((result, field) => Object.assign(result, { [field.db_name]: field.value }), {})
        };


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
        //let link = "/save_to_database2";
        let link = "/add_license";

        fetch(host + link, postData)
            .then(() => {
                console.log("Fetch done")

                this.props.history.push("/view-license");

            })
            .catch(function (error_msg) {
                console.log("Fetch error : " + error_msg);
            })



    }



    drawLayotAddingLicense() {

        /*
        return (

            <div>{

                <Card>
                    <CardHeader title="Card title" />
                    <CardActions>
                        <font> hello 1 </font> <Button label="1" />
                    </CardActions>
                    <CardActions>
                        <font> hello 2 </font> <Button label="2" />
                    </CardActions>
                    <CardActions>
                        <font> hello 3 </font> <Button label="3" />
                    </CardActions>
                </Card>

            } </div>
        );
    */


        return (<div> {this.state.license_data.map((block, block_key) =>
            <div style={{ margin: "30px" }}>
                <Card>
                    <CardHeader title={block.title} />
                    <CardActions>
                        {
                            block.rows.map((row, row_key) =>
                                <div>{row.map((field, field_key) =>

                                   <TextField 
                                   hintText={field.fieldName} 
                                   style={{ margin: 12 }} 
                                   onChange={(event) => this.FieldListener( block_key, row_key, field_key, event.target.value )}
                                   />

                                )}</div>)

                            // if( field.type === "number")
                        }
                    </CardActions>
                </Card>

            </div>
        )} <Button label="Add license" primary={true} onClick={() => this.addLicense() }></Button> </div>);






    }


    render() {
        //return <div> Add new license </div>

        // return(
        //     <div>
        //         <br /> License id (autoincrement) : { license_model.license_id }
        //         <br /> Device id (for device) : { license_model.device_id }
        //         <br /> License code ( agrement id ?) : { license_model.device_id }
        //         <br /> User ( right to use license/device with license ) : { license_model.device_id }
        //         <br /> Pass ( ? = for authenticate/genuine validation ) :{ license_model.device_id }
        //         <br /> Product Name ( ? )  : { license_model.device_id }

        //     </div>    
        // );

        return <div>  Add license <br /> {this.drawLayotAddingLicense()} </div>

    }

}