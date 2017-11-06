import React from 'react';
import { render } from 'react-dom';

//material-ui component
import Button from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Card, CardActions, CardHeader, CardTitle } from 'material-ui/Card';


export default class ModifyLicense extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            device_id: props.match.params.licenseId,
        }
    }

    render(){ return <div> License modification page </div> }


}

