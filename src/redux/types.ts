export interface Todo {
   id: number;
   text: string;
   completed: boolean;
}

export interface TodoState {
   list: Todo[];
}

export interface PayloadAction {
   type: string;
   payload?: any;
}
