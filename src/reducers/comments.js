import {ADD_COMMENT} from '../actions/actions';
import {REMOVE_COMMENT} from '../actions/actions';
import {EDIT_COMMENT} from '../actions/actions';
import {THUMB_UP_COMMENT} from '../actions/actions';
import {THUMB_DOWN_COMMENT} from '../actions/actions';

function comments(state = [], action) {
	switch(action.type) {
		case ADD_COMMENT:
			return [{
				id: action.id,
				text: action.text,
				votes: 0
			}
			, ...state];
		case REMOVE_COMMENT:
			return state.filter(comment => comment.id !== action.id);			
		case EDIT_COMMENT:
			var newText = prompt('Edit your comment', action.text);
			return state.map(comment => {
				if(comment.id === action.id) {
					return {...comment, text: newText} 
				} 
				return comment;
			});
		case THUMB_UP_COMMENT:   
			return state.map(comment => {
				if(comment.id === action.id) {
					return {...comment, votes: comment.votes + 1}
				}
				return comment;
			});
		case THUMB_DOWN_COMMENT:   
			return state.map(comment => {
				if(comment.id === action.id) {
					return {...comment, votes: comment.votes - 1}
				}
				return comment;
			});
		default:
			return state;
	}
}

export default comments;