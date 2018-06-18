import React from 'react';
import './App.css';

const Comment = ({text, votes, id, thumbUpComment, thumbDownComment, editComment, remComment, addComment}) => 
<li>{text} <br />
  <span>votes: {votes}</span>  
  <button onClick={() => thumbUpComment(id)}>+</button>
  <button onClick={() => thumbDownComment(id)}>-</button>
  <button className={'edit'} onClick={() => editComment(id)}>Edit</button>
  <button onClick={() => remComment(id)}>Remove</button>
</li>;

export default Comment;