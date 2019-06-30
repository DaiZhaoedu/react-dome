import React from 'react';
import {connect} from 'dva';
import {withRouter} from "react-router-dom" 

class  Video extends React.Component {
    render(){
        return(<div>
            {console.log(this)}
            <h1
             style={{fontSize:'40px'}}
            > 视频详情</h1>
           
            </div>
        )
    }
   
}
export default withRouter(connect()(Video))