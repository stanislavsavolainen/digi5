
import React from 'react';
import { render } from 'react-dom';

import Dialog from 'material-ui/Dialog';

/*
export default class DialogList extends React.Component {

    render(){
       return(
        <div> 
            <Dialog
          title="Scrollable Dialog"
          > 
          <font> 1 </font> <font> 2 </font>
          </Dialog>   
         </div> );
    }

}
*/

export default function dialogComponent( dialogObject) {


    if(dialogObject.type == "list") {

    }


 return <div> 
     React render 
     <Dialog title="dialog title">
         <font> 1 </font>
     </Dialog>     
          </div>;
}