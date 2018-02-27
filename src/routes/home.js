import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import Home from '../components/Home/Home'
export default {

    home: connect((store) => ({
            
        }), (dispatch) => bindActionCreators({

        }, dispatch)
    )(Home),

}