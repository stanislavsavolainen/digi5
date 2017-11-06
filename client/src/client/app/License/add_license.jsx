import React from 'react';
import { render } from 'react-dom';

import {license_model} from './license_data.jsx';


export default class AddLicense extends React.Component{



    drawLayotAddingLicense(){
        
    }


    render(){
        //return <div> Add new license </div>

        return(
            <div>
                <br /> License id (autoincrement) : { license_model.license_id }
                <br /> Device id (for device) : { license_model.device_id }
                <br /> License code ( agrement id ?) : { license_model.device_id }
                <br /> User ( right to use license/device with license ) : { license_model.device_id }
                <br /> Pass ( ? = for authenticate/genuine validation ) :{ license_model.device_id }
                <br /> Product Name ( ? )  : { license_model.device_id }
               
            </div>    
        );

    }

}