import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import Home from '../components/Home/Home'
export default {
    // 商圈列表
    home: connect((store) => ({
            init: store.init,

        }), (dispatch) => bindActionCreators({

        }, dispatch)
    )(Home),

}