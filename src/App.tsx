import React from 'react';
import {Grid, Paper} from '@mui/material';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import Header from "./components/Header";

const App: React.FC = () => {
    return (
        <Grid container alignItems="center" justifyContent="center">
          <Grid item>
            <Paper sx={{width: 700, padding: 1}}>
              <Header />
              <TodoForm />
              <TodoList />
            </Paper>
          </Grid>
        </Grid>
    );
}

export default App;
