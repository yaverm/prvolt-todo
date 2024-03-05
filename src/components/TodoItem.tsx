import { Todo } from '../redux/types';
import {ListItem, Divider, Typography, Button} from '@mui/material'

interface TodoItemProps {
    todo: Todo;
    onClick: VoidFunction;
    onRemove: VoidFunction;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onClick, onRemove }) => {
    return (
        <>
            <ListItem  onClick={onClick} sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Typography sx={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
                    {todo.text}
                </Typography>
                <Button variant="contained" color="error" onClick={onRemove}>Delete</Button>
            </ListItem>
            <Divider/>
        </>
    );
};

export default TodoItem;