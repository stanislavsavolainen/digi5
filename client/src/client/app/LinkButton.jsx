import React from 'react';
import Button from 'material-ui/RaisedButton';
import {Route} from 'react-router-dom'

export default (props) => (
    <Route
        path="/"
        render={(props2) =>
            <Button
                style={{ margin: 12 }}
                primary={true}
                onClick={() => props2.history.push(props.url)}
                label={props.label} />} />)
