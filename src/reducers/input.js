import {CHANGE_INPUT} from '../actions/actions';
import {CLEAR_INPUT} from '../actions/actions';

export default function input(state = '', action) {
    switch(action.type) {
		case CHANGE_INPUT:
			return state = action.text;
		case CLEAR_INPUT:
		   return state = '';
	default:
	return state;
	}
}

