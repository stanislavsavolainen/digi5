
import React from 'react';
import { render } from 'react-dom';

import Button from 'material-ui/RaisedButton';

export default class ModifyUser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user_id: props.match.params.userId,
        }
    }

    render() {
        return (<div> <h1>  Modify user { this.state.user_id } </h1> 
        <br /> Knex ignore some "not touched fields" to not modify all data only "selected" data will be modified   
        <br /> SQL >>>> UPDATE users2 SET fname ="new data", status="ok" WHERE id_user = <font color="green"> {this.state.user_id} </font>;
        </div>);
    }

}