import React from 'react'
import {List , ListItemText , ListItemAvatar  , Avatar ,ListItem,ListItemSecondaryAction }from '@material-ui/core'
import { green  } from '@material-ui/core/colors';
import AssignmentIcon from '@material-ui/icons/Assignment';


function DoneTask(props) {
    return (
        <div>
            <List>
            <ListItem>
                  <ListItemAvatar>
                        <Avatar style={{ color: '#fff',backgroundColor: green[500]}}>
                            <AssignmentIcon  />
                        </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary= {props.todo.task}
                  />
                  <ListItemSecondaryAction>
                  </ListItemSecondaryAction>
                </ListItem>
            </List>
 
        </div>
    )
}

export default DoneTask
