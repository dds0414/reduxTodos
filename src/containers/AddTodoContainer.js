/**
 * Created by yangbo on 16/12/31.
 */
import { connect } from 'react-redux';
import AddTodo from '../components/AddTodo'
import {AddTodoAction} from '../actions/action'

const mapStateToProps = (state, ownProp) =>({
    text:state.todos
});

const mapDispatchToProps = (dispatch, ownProp) => ({
    onButtonClick : function(text){
        dispatch(AddTodoAction(text))
    }
});


const AddTodoContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTodo);

export default AddTodoContainer