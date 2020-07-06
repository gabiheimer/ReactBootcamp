import {v4 as uuid} from 'uuid';
import useLocalStorageState from './useLocalStorageState';

export default function (initialTodos){
    const [ todos, setTodos ] = useLocalStorageState('todos', initialTodos);

    const addTodo = (newTodoTask) => {
        setTodos([...todos, {id: uuid(), task: newTodoTask, completed: false}]);
    }
    
    const removeTodo = (todoId) => {
        const updatedTodos = todos.filter(todo => todo.id !== todoId);
        setTodos(updatedTodos);
    
    }
    
    const toggleTodo = (todoId) => {
        const updatedTodos = todos.map(todo => (
            todo.id === todoId ? {...todo, completed: !todo.completed} : todo
        ));
        setTodos(updatedTodos);
    }
    
    const editTodo = (todoId, newTask) => {
        const updatedTodos = todos.map(todo => (
            todo.id === todoId ? {...todo, task: newTask} : todo
        ));
        setTodos(updatedTodos);
    }

    return { 
        todos, 
        addTodo: addTodo, 
        toggleTodo: toggleTodo,
        editTodo: editTodo,
        removeTodo: removeTodo
    }
}
