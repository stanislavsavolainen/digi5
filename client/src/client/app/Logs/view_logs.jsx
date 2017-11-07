
import React from 'react';
import { render } from 'react-dom';

import Button from 'material-ui/RaisedButton';

export default class ViewLogs extends React.Component {

    // '/view_all_users',
    // '/register_user',
    // '/user_profile',


    test1() {
        this.oneFetch("/view_all_users");
    }

    test2() {
        this.oneFetch("/register_user");
    }

    test3() {
        this.oneFetch("/user_profile");
    }


    oneFetch(function_link) {

        //post body
        let postData = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify("OK!"),
        };

        // ======== FETCH ====================

        //fetch
        let host = "http://127.0.0.1:5659";
        let link = function_link;

        console.log("Function link data : " + link);

        fetch(host + link, postData)
            .then(() => {
                console.log("Fetch done")
            })
            .catch(function (error_msg) {
                console.log("Fetch error : " + error_msg);
            })


    }


    render() {
        // return <div> Show logs data </div>
        return (
            // '/view_all_users',
            // '/register_user',
            // '/user_profile',
            <div>
                
                <Button
                    label="view_all_users"
                    style={{ backgroundColor: 'yellow', color: 'blue' }}
                    onClick = { () => this.test1() }
                />

                <Button label="register_user"
                    style={{ backgroundColor: 'yellow', color: 'blue' }}
                    onClick = { () => this.test2() }
                />

                <Button label="user_profile"
                    style={{ backgroundColor: 'yellow', color: 'blue' }}
                    onClick = { () => this.test3() }
                />

            </div>
        );
    }

}