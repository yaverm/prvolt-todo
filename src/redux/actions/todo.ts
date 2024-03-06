export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export const addTodo = (text: string) => ({
   type: ADD_TODO,
   payload: {
      id: Date.now(),
      text,
      completed: false,
   },
});

export const toggleTodo = (id: number) => ({
   type: TOGGLE_TODO,
   payload: id,
});

export const removeTodo = (id: number) => ({
   type: REMOVE_TODO,
   payload: id,
});
