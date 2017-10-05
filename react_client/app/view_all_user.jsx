import React from 'react';
import { render } from 'react-dom';

//material-ui
//import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
//import Toolbar from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';

import { ButtonStyle, user_data_structure, field_name } from './theme_styles.jsx';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import { Card, CardActions, CardHeader, CardTitle } from 'material-ui/Card';

export default class ViewAllUsers extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // screen: 'A'
            result: "",
            p_fname: [],
            p_lname: [],
            p_states: [],
        }
    }

    componentWillMount() {
        this.getAllUsers();
    }



    getAllUsers() {

        //post body
        let postData = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify("OK"),
        };

        //fetch
        let host = "http://127.0.0.1:5659";
        let link = "/read_from_database3";

        fetch(host + link, postData)
            .then((resp) => {
                console.log(" >>> first then happen");
                //return resp.json(); 
                return resp.text();
            })
            .then((response) => {
                console.log("Fetch response happen !");

                this.handleResponse(response);


            })
            .catch(function (error_msg) {
                // error if connection problem happens 
                console.log("Fetch error : " + error_msg);
                // document.getElementById("answer_field").innerHTML = "<div align='center'><font color='red'><h1>Node Server is down ! </h1></font></div>";
            })

    }

    //======================================

    handleResponse(response) {

        var view_response_content = [];
        view_response_content.splice(0, view_response_content.length);

        var p_fname = JSON.parse(response).body.r_fname;
        var p_lname = JSON.parse(response).body.r_lname;
        var p_status = JSON.parse(response).body.r_status;

        console.log("Fname >>>>> " + p_fname);
        console.log("Lname >>>>> " + p_lname);
        console.log("Status >>>>> " + p_status);

        // return view_response_content;
        this.state.p_fname = p_fname; //+ <br /> + {layout_view};
        this.state.p_lname = p_lname; //+ <br /> + {layout_view};
        this.state.p_status = p_status; //+ <br /> + {layout_view};

        this.setState(this.state);
    }





    render() {

        //  this.getAllUsers();

        let drawContent = [];
        drawContent.splice(0, drawContent.length);

        for (var j = 0; j < 10; j++) {
            drawContent.push(<div> ============================================== </div>);

            for (var i = 0; i < field_name.length; i++) {
                // drawContent.push(<div>  <br /> {this.state.field_name[i]} </div>);
                drawContent.push(<div>  <br /> {field_name[i]} </div>);
            }

            drawContent.push(<FlatButton style={ButtonStyle}> User profile </FlatButton>);
        }

        drawContent.push(<div> <br /> Only limited view , press user profile to see user detailed info ! </div>);

        return (<div >
            <h1> View All users : </h1>
            {/*drawContent*/}
            <br /><br />
            <Table>
                <TableHeader displaySelectAll={false}>
                    <TableRow>
                        <TableHeaderColumn>First name</TableHeaderColumn>
                        <TableHeaderColumn>Last name</TableHeaderColumn>
                        <TableHeaderColumn>Status</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false}>
                    {
                        this.state.p_fname.map((val, key) =>
                            <TableRow>
                                <TableRowColumn>{this.state.p_fname[key]}</TableRowColumn>
                                <TableRowColumn>{this.state.p_lname[key]}</TableRowColumn>
                                <TableRowColumn>{this.state.p_status[key]}</TableRowColumn>
                            </TableRow>)
                    }
                </TableBody>
            </Table>
        </div>);
    }

}