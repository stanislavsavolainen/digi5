
import React from 'react';
import { render } from 'react-dom';

import Button from 'material-ui/RaisedButton';
import { Card, CardActions, CardHeader, CardTitle } from 'material-ui/Card';

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
    
        return (
            
            <div>
                {

                    /*
                    <Card>

                    <CardHeader title="Log data (posible example -> functionality missing)" />

                    <CardActions>

                     <font> log data id 1 </font>    
                      <Button label="data modified (Event)" /> 
                      <font > <Button label="2.3.2014" /> </font>
                      <font> <Button label="action (restore data, bookmark)" /> </font>

                    </CardActions>    

                    <CardActions>

                       <font> log data id 2 </font>   
                      <Button label="data added (Event)" />
                       <font> <Button label="6.8.2015" /> </font>
                       <font> <Button label="action (restore data, bookmark)" /> </font>

                    </CardActions>   

                    <CardActions>
                     <font> log data id 3 </font> 
                     <Button label="data deleted (Event)" /> 
                     <font> <Button label="7.9.2016" /> </font>
                     <font> <Button label="action (restore data, bookmark)" /> </font>

                    </CardActions>   

                 </Card>

                 */
                }
                <font> There is no log data at the moment ! </font>
                
            </div>
            
        );
    }

}