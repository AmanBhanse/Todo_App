import React from 'react'
import {List , ListItemText , ListItemAvatar  , Avatar ,ListItem,ListItemSecondaryAction,IconButton }from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import {deleteTodoFromDatabase } from './database/todos'

function Task(props) {
    
    const deleteTodo = () => {
        deleteTodoFromDatabase(props.todo.id).finally( ()=> { props.setRefresh(true)});
    }
    
    
    return (
        <div>
            <List>
            <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      O
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary= {props.todo.task}
                  />
                  <ListItemSecondaryAction>
                    <IconButton onClick={deleteTodo} edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
            </List>
            
        </div>
    )
}

export default Task
