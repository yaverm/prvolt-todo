import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions/todo';
import {TextField, Box, Button} from '@mui/material';

const TodoForm: React.FC = () => {
    const dispatch = useDispatch();

    const [text, setText] = useState<string>('');

    const handleAddTodo = () => {
        if (text.trim() !== '') {
            dispatch(addTodo(text));
            setText('');
        }
    };

    return (
        <Box my={2} display="flex">
            <TextField
                type="text"
                label="Add Todo"
                variant="outlined"
                value={text}
                onChange={(e) => setText(e.target.value)}
                autoComplete="off"
                sx={{ width: '100%', marginRight: 1 }}

            />
            <Button
                variant="contained"
                color="primary"
                disabled={text.trim() === ''}
                onClick={handleAddTodo}
                sx={{ height: 'auto'}}
            >
                Add
            </Button>
        </Box>
    );
};

export default TodoForm;