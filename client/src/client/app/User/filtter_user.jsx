import React from 'react';
import { render } from 'react-dom';

import { server_host_for_client } from './../client_connection.jsx';

export default class FiltterUser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user_team: props.match.params.userTeam,
            users : [],
        }
    }

     componentWillMount() {
        this.readDevicesFromDatabase();
     }

       readDevicesFromDatabase() {

        let team ="";

        //post body
        let postData = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ team : this.state.user_team }),
        };

        //fetch
        let host = "http://127.0.0.1:5659";
        //let link = "/read_from_database3";
        let link = "/read_filtterd_user";

        // fetch(host + link, postData)
        fetch(server_host_for_client + link, postData)
            .then((resp) => {
                return resp.json();
            })
            .then((db_users) => {
               // this.state.users = db_users;
               // this.setState(this.state);

                 //use spread for saving old state
                this.setState( {  ... this.state ,  users : db_user });

            })
            .catch(function (error_msg) {
                // error if connection problem happens 
                console.log("Fetch error : " + error_msg);
            })

    }


    render() {
        return ( <div> Filttered user by team : { this.state.user_team } </div>);
    }

}