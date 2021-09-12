import React from 'react';
import {useEffect, useState} from 'react';
import {getDoneTodos} from "./database/completedTodos";
import DoneTask from "./DoneTask"


function DoneTodoPage() {
    
    const[doneTodos , setDoneTodos] = useState([]);


    const getDoneTodosFromDatabase = () =>{
        const ref = getDoneTodos();
        return ref;
    }
    
    useEffect(() => {
        getDoneTodosFromDatabase().then(setDoneTodos).catch(alert);
        
    }, [])

    return (
        <div>
            <ul>
                { doneTodos.map(doneTodo => <DoneTask key={doneTodo.id} todo={doneTodo} ></DoneTask> ) }
            </ul>
        </div>
    )
}

export default DoneTodoPage;
