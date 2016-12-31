/**
 * Created by yangbo on 16/12/31.
 */
import { connect } from 'react-redux'
import Footer from '../components/Footer'

import { SetFilterAction } from '../actions/action'

const mapStateToProps = (state, ownProp) => ({
    filter : state.filter
});

const mapDispatchToProps = (dispatch, ownProp) => ({
    onNameClick: function (filter) {
        dispatch(SetFilterAction(filter))
    }
});



const FooterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Footer);

export default FooterContainer;
