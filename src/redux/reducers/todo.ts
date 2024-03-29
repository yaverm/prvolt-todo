import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../actions/todo';
import { PayloadAction, TodoState } from '../types';

const initialState: TodoState = {
   list: [],
};

const todoReducer = (state = initialState, action: PayloadAction): TodoState => {
   switch (action.type) {
      case ADD_TODO:
         return {
            ...state,
            list: [action.payload, ...state.list],
         };
      case TOGGLE_TODO:
         return {
            ...state,
            list: state.list.map(todo => (todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo)),
         };
      case REMOVE_TODO:
         return {
            ...state,
            list: state.list.filter(todo => todo.id !== action.payload),
         };
      default:
         return state;
   }
};

export default todoReducer;
