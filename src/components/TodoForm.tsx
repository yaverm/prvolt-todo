import { useState } from 'react';
import { useDispatch } from 'react-redux';
import AddIcon from '@mui/icons-material/Add';
import { Box, Button, TextField } from '@mui/material';

import { addTodo } from '../redux/actions/todo';

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
      <Box my={2} display='flex'>
         <TextField
            type='text'
            label='Add Todo'
            variant='outlined'
            value={text}
            onChange={e => setText(e.target.value)}
            autoComplete='off'
            sx={{ width: '100%', marginRight: 1 }}
         />
         <Button
            variant='contained'
            color='primary'
            disabled={text.trim() === ''}
            onClick={handleAddTodo}
            sx={{ height: 'auto' }}
         >
            {'Add'}
            <AddIcon sx={{ marginLeft: 1 }} />
         </Button>
      </Box>
   );
};

export default TodoForm;
