//import uuid from uuid;

export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';
export const CHANGE_INPUT = 'CHANGE_INPUT';
export const CLEAR_INPUT = 'CLEAR_INPUT';

function randomString() {
    var chars = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ';
    var str = '';
    for (var i = 0; i < 10; i++) {
      str += chars[Math.floor(Math.random() * chars.length)];
    }
  return str;
  };
  
export function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: randomString()
    }
}

export function remComment(id) {
    return {
        type: REMOVE_COMMENT,
        id
    }
}

export function editComment(id, text) {
    return {
        type: EDIT_COMMENT,
        id,
        text
    }
}

export function thumbUpComment(id) {
    return {
        type: THUMB_UP_COMMENT,
        id
    }
}

export function thumbDownComment(id) {
    return {
        type: THUMB_DOWN_COMMENT,
        id
    }
}

export function changeInput(text) {
    return {
        type: CHANGE_INPUT,
        text
    }
}

export function clearInput(text) {
    return {
        type: CLEAR_INPUT,
        text
    }
}