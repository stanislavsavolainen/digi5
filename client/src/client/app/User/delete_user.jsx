import React from 'react';
import { render } from 'react-dom';

import Button from 'material-ui/RaisedButton';

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

        fetch(host + link, postData)
            .then((resp) => {
                console.log(" >>> first then happen");
                return resp.json(); 
               // return resp.text();
            })
            .then((response) => {
                console.log("Fetch response happen !");

                //  this.handleResponse(response);
               // console.log("User profile data :" + JSON.stringify(response));

             //  this.state.profile_user = response;
            //    this.setState(this.state)

            })
            .catch(function (error_msg) {
                // error if connection problem happens 
                console.log("Fetch error : " + error_msg);
                // document.getElementById("answer_field").innerHTML = "<div align='center'><font color='red'><h1>Node Server is down ! </h1></font></div>";
            })


}


  componentWillMount() {
        this.deleteUserFuncion();
    }


render() {
    return (<div>  <font color="red"> WARNING, data will be removed permanently ! </font> <br /> <Button label="Delete user (confirm)" primary={true} />  </div>);
}

}