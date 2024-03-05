import {useAppDispatch, useAppSelector} from "../redux/hooks";
import {toggleTodo, removeTodo} from '../redux/actions/todo';
import {selectTodos, selectCompletedCount, selectUnCompletedCount} from '../redux/selectors/todo';
import {SelectChangeEvent} from '@mui/material/Select';
import TodoItem from './TodoItem';
import {Select, MenuItem, Box, List} from '@mui/material';
import {useState} from "react";

const TodoList: React.FC = () => {
    const dispatch = useAppDispatch();
    const [filter, setFilter] = useState<string>('all')

    const todos = useAppSelector(selectTodos);
    const completedCount = useAppSelector(selectCompletedCount);
    const unCompletedCount = useAppSelector(selectUnCompletedCount);

    const filteredTodos = todos.filter((todo) => {
        if (filter === 'completed') {
            return todo.completed;
        } else if (filter === 'current') {
            return !todo.completed;
        }
        return true;
    });

    const handleToggleTodo = (id: number) => {
        dispatch(toggleTodo(id));
    };

    const handleSetFilter = (event: SelectChangeEvent) => {
        setFilter(event.target.value);
    };

    const handleRemoveTodo = (id: number) => {
        dispatch(removeTodo(id));
    };


    return (
        <>
            <Box display="flex" justifyContent="space-between" mb={3}>
                <Select size="small" value={filter} onChange={handleSetFilter}>
                    <MenuItem value="all">All</MenuItem>
                    <MenuItem value="completed">Completed</MenuItem>
                    <MenuItem value="current">Current</MenuItem>
                </Select>
                <Box display="flex" gap={1}>
                    <p>Completed: {completedCount}</p>
                    <p>Uncompleted: {unCompletedCount}</p>
                </Box>
            </Box>

            {filteredTodos.length > 0 ? filteredTodos.map((todo) => (
                <List key={todo.id}>
                    <TodoItem
                        todo={todo}
                        onRemove={() => handleRemoveTodo(todo.id)}
                        onClick={() => handleToggleTodo(todo.id)}
                    />
                </List>
            )) : 'No Data'}
        </>
    );
};

export default TodoList;