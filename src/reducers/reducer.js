import { combineReducers } from 'redux';
import comments from './comments.js';
import users from './users.js';
import input from './input.js';

const reducer = combineReducers({
  comments,
  users,
  input
});

export default reducer;