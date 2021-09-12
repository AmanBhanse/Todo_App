import React from 'react'
import {useEffect, useState} from 'react';
import { Button , FormControl , Input, InputLabel } from '@material-ui/core';
import Task from "./Task"
import {getTodos, addTodoToDatabase } from './database/todos'

function AddTodoPage() {

    const [todos , setTodos] = useState([]);  
    const [input , setInput] = useState("");
    const [refresh , setRefresh] = useState(true);
    
    //When Apps loads we need to grab the data present inside the database.
    //useEffect runs whenever the app componenet is loads
  
    useEffect(  ()=>{
      if(!refresh) return;
      getTodos().then( setTodos ).catch(alert);
      setRefresh(false);
    }, [refresh]);
  
    const addTodo = (event) =>{
      event.preventDefault(); //it will prevent the refresh 
      addTodoToDatabase(input).then( (todo) => {
        setRefresh(true);
        setInput(""); //once hit enter or submit button it will clear the input text area
      }).catch(alert);
    } 

    return (
        <div>
            <form>
                <FormControl>
                    <InputLabel htmlFor="my-input">Write Todo Task</InputLabel>
                    <Input value={input} onChange={event => setInput(event.target.value)} />
                </FormControl>
                <Button disabled={!input} type="submit" onClick={addTodo} variant="contained">Add Todo</Button>
            </form>

            <ul>
                {todos.map(todo =>  <Task key={todo.id} todo={todo} setRefresh = {setRefresh}></Task> )}
            </ul>
        </div>
    )
}

export default AddTodoPage
