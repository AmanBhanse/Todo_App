import db from ".";
import {collection, getDocs ,addDoc  } from 'firebase/firestore/lite';


export async function getDoneTodos(){
    const todos = collection(db , 'doneTodos');
    const todosSnapshot = await getDocs(todos);
    const tasks = todosSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    return tasks;
}

export async function addToCompletedTodoDatabase(TodoObject){
    const ref = await addDoc( collection(db , 'doneTodos') , {task: TodoObject.task} );
    return {task:TodoObject.task , id:ref.id }
}