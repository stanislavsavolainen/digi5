
import React from 'react';
import { render } from 'react-dom';

import Button from 'material-ui/RaisedButton';

export default class ModifyDevice extends React.Component {

      constructor(props) {
        super(props);
        this.state = {
            device_id: props.match.params.deviceId,
        }
    }

    render() {
        return ( <div> <h1>  Modify device { this.state.device_id }  </h1>  </div>  );
    }

}