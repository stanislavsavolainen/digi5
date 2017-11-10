import React from 'react';
import { render } from 'react-dom';

import Button from 'material-ui/RaisedButton';

import { server_host_for_client } from './../client_connection.jsx';

export default class DeleteUser extends React.Component {


        constructor(props) {
        super(props);
        this.state = {
            user_id: props.match.params.userId,
        }
    }

// http://knexjs.org/
//     knex('accounts')
// .where('activated', false)
// .del()
// Outputs:
// delete from`accounts` where `activated` = false

deleteUserFuncion(){

       //post body
        let postData = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user_id: this.state.user_id}),
        };

        //fetch
        let host = "http://127.0.0.1:5659";
       // let link = "/read_from_database4"; //read profile data
        let link = "/delete_user";

      //  fetch(host + link, postData)
       fetch( server_host_for_client  + link, postData)
            .then((resp) => {
                console.log(" >>> first then happen");
                return resp.json(); 
               // return resp.text();
            })
            .then((response) => {
                console.log("Fetch response happen !");
            })
            .catch(function (error_msg) {
                // error if connection problem happens 
                console.log("Fetch error : " + error_msg);
               
            })


}


  componentWillMount() {
        this.deleteUserFuncion();
    }


render() {
    return (<div>  <font color="red"> WARNING, data will be removed permanently ! </font> <br /> <Button label="Delete user (confirm)" primary={true} />  </div>);
}

}