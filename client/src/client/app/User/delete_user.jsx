import React from 'react';
import { render } from 'react-dom';

import Button from 'material-ui/RaisedButton';

export default class DeleteUser extends React.Component {


    render() {
        return ( <div>  <font color="red"> WARNING, data will be removed permanently ! </font> <br /> <Button label="Delete user (confirm)" primary={true} />  </div>  );
    }

}