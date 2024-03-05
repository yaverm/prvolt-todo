import {RootState} from "../store";
import {createSelector} from "reselect";

export const selectTodos = (state: RootState) => state.todo?.list;
export const selectCompletedCount = createSelector(
    (state: RootState) => state.todo,
    (todo) => todo.list.filter((item) => item.completed).length
)
export const selectUnCompletedCount = createSelector(
    (state: RootState) => state.todo,
    (todo) => todo.list.filter((item) => !item.completed).length
)