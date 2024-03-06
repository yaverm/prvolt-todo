import DeleteIcon from '@mui/icons-material/Delete';
import { Button, Divider, ListItem, Typography } from '@mui/material';

import { Todo } from '../redux/types';

interface TodoItemProps {
   todo: Todo;
   onClick: VoidFunction;
   onRemove: VoidFunction;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onClick, onRemove }) => {
   return (
      <>
         <ListItem onClick={onClick} sx={{ display: 'flex', justifyContent: 'space-between', cursor: 'pointer' }}>
            <Typography sx={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</Typography>
            <Button size='small' variant='contained' color='error' onClick={onRemove}>
               {'Delete'}
               <DeleteIcon sx={{ marginLeft: 1 }} />
            </Button>
         </ListItem>
         <Divider />
      </>
   );
};

export default TodoItem;
