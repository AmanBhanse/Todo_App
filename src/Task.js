import React from 'react'
import {List , ListItemText , ListItemAvatar  , Avatar ,ListItem,ListItemSecondaryAction,IconButton }from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';
import {deleteTodoFromrunningTodoDatabase , convertRunningTodoToCompletedTdo} from './database/runningTodos'
import { green , yellow } from '@material-ui/core/colors';
import AssignmentIcon from '@material-ui/icons/Assignment';

function Task(props) {
    
    const deleteTodo = () => {
      deleteTodoFromrunningTodoDatabase(props.todo.id).finally( ()=> { props.setRefresh(true)});
    }
    
    const moveTodoFromRunningToCompletedTodoDatabase=()=>{
      convertRunningTodoToCompletedTdo(props.todo.id).finally( ()=> { props.setRefresh(true)});
    }
    
    return (
        <div>
            <List>
            <ListItem>
                  <ListItemAvatar>
                    <Avatar style={{ color: '#fff',backgroundColor: yellow[800]}}>
                      <AssignmentIcon  />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary= {props.todo.task}
                  />
                  <ListItemSecondaryAction>
                    <IconButton onClick={deleteTodo} edge="end" aria-label="delete">
                      <DeleteIcon color="error" />
                    </IconButton>
                    <IconButton onClick={moveTodoFromRunningToCompletedTodoDatabase} edge="end" aria-label="addToCompletedList">
                      <DoneIcon style={{ color: green[500] }} />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
            </List>
            
        </div>
    )
}

export default Task
