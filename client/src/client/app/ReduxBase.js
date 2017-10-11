
//redux-api for http-request
//export redux to each react page

import reduxApi from 'redux-api';
import thunk from 'redux-thunk'; //for midleware -> redux-api
import adapterFetch from 'redux-api/lib/adapters/fetch';

import { connect, Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';


//npm install redux --save
//npm install redux_api --save
//npm install redux-tunk --save



//=========== server url ============================ 
const server_url = "http://127.0.0.1:5659";

//========== endpoint links =========================
const links = [
    "/view_profiles",
    "/register_user",
    "/view_all_users"
];

// ========= http-request module ====================
const http_post_data = {
    method: 'post',
    headers: {
        "Accept": "application/json",
        'Content-Type': 'application/json'
    }
}

// ====== http-response function ====================
const http_response = { transformer(data, prevData) { serverReply: data } }


//======= redux api reduces =========================
const http_connector = reduxApi({

    endpoint1 : {
        url: server_url + "/register_user",
        options : http_post_data,
        http_response,
    },

    endpoint2 : {
        url: server_url + "/view_all_profiles",
        options : http_post_data,
        http_response,
    },

    endpoint2 : {
        url: server_url + "/profiles",
        options : http_post_data,
        http_response,
    },


}).use('fetch', adapterFetch(fetch));


// ========== redux store ===========================
const redux_store = createStore(combineReducers({ ...rest.reducers, textFieldReducer: reducer }), undefined, applyMiddleware(thunk));


const mapStateToProps = state => ({


});

const mapDispatchToProps = (dispatch) => ({

    reducer_f1(){
         dispatch(http_connector.actions.endpoint1() );
    },

    reducer_f2(){
         dispatch(http_connector.actions.endpoint2() );
    },

    reducer_f3(){
       dispatch(http_connector.actions.endpoint3() );  
    }


});



//register
function f1(){
        //dispatch
       // http_connector.actions.endpoint1();

}
//view all users
function f2(){
     //http_connector.actions.endpoint2();
}
//view profiles
function f3(){
    // http_connector.actions.endpoint3();
}




export {f1};






//export { http_connector }