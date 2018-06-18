import {connect} from 'react-redux';
import Comment from '../presentationals/Comment';
import {thumbUpComment} from '../actions/actions';
import {thumbDownComment} from '../actions/actions';
import {remComment} from '../actions/actions';
import {editComment} from '../actions/actions';


const mapDispatchToProps = dispatch => ({
  thumbUpComment: (id) => dispatch(thumbUpComment(id)),
  thumbDownComment: (id) => dispatch(thumbDownComment(id)),
  remComment: (id) => dispatch(remComment(id)),
  editComment: (id, text) => dispatch(editComment(id, text))
});

export default connect(null, mapDispatchToProps)(Comment);
