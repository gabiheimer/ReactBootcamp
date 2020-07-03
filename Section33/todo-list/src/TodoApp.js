import React from 'react';
import { Typography, Paper, AppBar, Toolbar, Grid } from '@material-ui/core';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import useTodoState from './Hooks/useTodoState';

function TodoApp(){
    const { todos, addTodo, removeTodo, editTodo, toggleTodo } = useTodoState([]);

    return(
        <Paper
            style = {{
                padding: 0,
                margin: 0,
                height: '100vh',
                backgroundColor: '#fafafa'
            }}
            elevation={0}
        >
            <AppBar color='primary' position='static' style={{height: '64px'}}>
                <Toolbar>
                    <Typography color='inherit'>TODOS WITH HOOKS</Typography>
                </Toolbar>
            </AppBar>
            <Grid container justify='center' style={{marginTop: '1rem'}}>
                <Grid item xs={11} md={8} lg={4}>
                    <TodoForm addTodo={addTodo}/>
                    <TodoList 
                        toggleTodo={toggleTodo} 
                        removeTodo={removeTodo} 
                        editTodo={editTodo}
                        todos={todos}
                    />
                </Grid>
            </Grid>
        </Paper>
    );
}

export default TodoApp;