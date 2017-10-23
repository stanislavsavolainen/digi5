import React from 'react';
import { render } from 'react-dom';

import Button from 'material-ui/RaisedButton';

import LinkButton from './../LinkButton.jsx';

export default class DeviceProfile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            device_id: props.match.params.deviceId,
        }
    }

    render() {

        
        return (
            <div> Device profile : {this.state.device_id}
                <br /><br />
                <LinkButton label="Modify" url={"/modify-device/" + this.state.device_id} />
                <LinkButton label="Delete" url={"/delete-device/" + this.state.device_id} />
            </div>);
    }


}