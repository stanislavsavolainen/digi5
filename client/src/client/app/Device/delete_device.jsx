import React from 'react';
import { render } from 'react-dom';

import Button from 'material-ui/RaisedButton';



export default class DeleteDevice extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            device_id: props.match.params.deviceId,
        }
    }


    deleteDeviceFuncion() {

        //post body
        let postData = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user_id: this.state.user_id }),
        };

        //fetch
        let host = "http://127.0.0.1:5659";
        // let link = "/read_from_database4"; //read profile data
        let link = "/delete_device";

        fetch(host + link, postData)
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
                // document.getElementById("answer_field").innerHTML = "<div align='center'><font color='red'><h1>Node Server is down ! </h1></font></div>";
            })


    }



    componentWillMount() {
        this.deleteDeviceFuncion();
    }

    render() {
        return (<div> <h1>  Delete device {this.state.device_id}  </h1>  </div>);
    }

}