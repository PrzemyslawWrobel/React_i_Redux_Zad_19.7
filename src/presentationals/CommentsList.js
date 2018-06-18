import React from 'react';
import Comment from '../containers/CommentContainer';

const CommentsList = ({comments, input, addComment, changeInput, clearInput}) => {
return (
<div>
<form>
  <textarea rows="6" cols="75" onChange={(event) => {this.text=event.target.value; changeInput(event.target.value)}} value={input}/>
  <button className={'new'} onClick={(event) => {addComment(this.text); clearInput(''); event.preventDefault()}} type={'submit'} >Add comment</button>
</form>
  <p>Number of comments: {comments.length}</p>
<ul>
  {comments.map(comment => <Comment key={comment.id} {...comment}/>)}
</ul>
</div>)
}
export default CommentsList;