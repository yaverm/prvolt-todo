import { Grid, Paper } from '@mui/material';

import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App: React.FC = () => {
   return (
      <Grid container alignItems='center' justifyContent='center'>
         <Grid item>
            <Paper sx={{ width: 700, padding: 3 }}>
               <Header />
               <TodoForm />
               <TodoList />
            </Paper>
         </Grid>
      </Grid>
   );
};

export default App;
