import db from "." // import from this folder/index.js

import {collection, getDocs , addDoc , doc, deleteDoc  } from 'firebase/firestore/lite';



export async function getTodos(){
    const todos = collection(db , 'todos');
    const todosSnapshot = await getDocs(todos);
    const tasks = todosSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    return tasks;
}

export async function addTodoToDatabase(task){
    const ref = await addDoc( collection(db , 'todos') , {task} );
    return {task , id:ref.id }
}

export async function deleteTodoFromDatabase(id){
    await deleteDoc(doc(db, "todos", id));
}
