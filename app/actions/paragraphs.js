// @flow
import type { wordsStateType, Dispatch } from '../reducers/types';

export const ADD_PARAGRAPH =  'ADD_PARAGRAPH';
export const DELETE_PARAGRAPH =  'DELETE_PARAGRAPH';
export const EDIT_PARAGRAPH =  'EDIT_PARAGRAPH';
export const SAVE_PARAGRAPH =  'SAVE_PARAGRAPH';

export function addParagraph() {
    return {
        type: ADD_PARAGRAPH
    };
}

export function deleteParagraph(data) {
    return {
        type: DELETE_PARAGRAPH,
        data
    };
}

export function editParagraph(data) {
    return {
        type: EDIT_PARAGRAPH,
        data
    };
}

export function saveParagraph(data) {
    return {
        type: SAVE_PARAGRAPH,
        data
    };
}