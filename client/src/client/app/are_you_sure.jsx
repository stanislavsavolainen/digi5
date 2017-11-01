import React from 'react';
import Button from 'material-ui/RaisedButton';
import { Route } from 'react-router-dom'

export function renderAreYouSure(callBackFunction) {

    return (
        <div>
            Do you want to delete/update this data ?
            <Button label="NOooo" primary={true} style={{ margin: 12 }} />
            <Button label="YEeeeeeS" primary={true} style={{ margin: 12 }} />
        </div>
    );

}
