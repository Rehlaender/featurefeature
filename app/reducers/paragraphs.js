// @flow
import { 
    ADD_PARAGRAPH, 
    DELETE_PARAGRAPH, 
    EDIT_PARAGRAPH, 
    SAVE_PARAGRAPH 
} from '../actions/paragraphs';
import type { Action } from './types';

const initialState = [
    {
        id: 1,
        isEditing: false,
        words: ['hola jose jose jose', 'soy', 'mario']
    }
];

const emptyParagraph = {
    id: 0,
    isEditing: false,
    words: []
}
export default function counter(state: Array<any> = initialState, action: Action) {
  switch (action.type) {
    case ADD_PARAGRAPH:
      return [
        ...state,
        {
            ...emptyParagraph,
            // TODO: Add uuid
            id: state.length + 1,
            words: [state.length + 1]
        }
      ];
    case DELETE_PARAGRAPH:
      return state.filter(({ id }) => id !== action.data.id);
    case EDIT_PARAGRAPH:
        const editingParagraph = state.map(paragraph => {
            if(paragraph.id === action.data.id){
                return { ...paragraph, isEditing: true }
            } else {
                return { ...paragraph, isEditing: false }
            }
        })
        return editingParagraph;
      return [
          ...state,
          {}
      ];
    case SAVE_PARAGRAPH:
    const saveParagraph = state.map(paragraph => {
        console.log(action.data, '<data', paragraph, '<paragraph');
        if(paragraph.id === action.data.id){
            return { ...action.data }
        } else {
            return { ...paragraph, isEditing: false }
        }
        console.log(action.data, 'action data');
    })
      return saveParagraph;
    default:
      return state;
  }
}
