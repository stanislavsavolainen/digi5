import React from 'react';
import { render } from 'react-dom';

import { Card, CardActions, CardHeader, CardTitle } from 'material-ui/Card';
import Button from 'material-ui/RaisedButton'

//my components
import {license_model , make_license_data_structure} from './license_data.jsx';


export default class AddLicense extends React.Component{


   //  {/* make_license_data_structure().map() */}

     constructor(props) {
        super(props);
        this.state = {
            license_data: make_license_data_structure()
        }
    }


    addLicense(){




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



    drawLayotAddingLicense(){
        
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
                    <font>  hello 3 </font> <Button label="3" />
                    </CardActions>   
                 </Card>
            
              
           
            } </div>
        );
    }


    render(){
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

            return <div>  Add license <br /> { this.drawLayotAddingLicense() } </div>

    }

}