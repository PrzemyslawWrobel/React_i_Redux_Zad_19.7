import {connect} from 'react-redux';
import CommentsList from '../presentationals/CommentsList';
import {addComment, changeInput, clearInput} from '../actions/actions';

const mapStateToProps = state => ({
  comments: state.comments,
  input: state.input
});
const mapDispatchToProps = dispatch => ({
	addComment: (text) => dispatch(addComment(text)),
	changeInput: (text) => dispatch(changeInput(text)),
	clearInput: (text) => dispatch(clearInput(text))
});
	
export default connect(mapStateToProps, mapDispatchToProps)(CommentsList);