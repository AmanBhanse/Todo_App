import db from "." // import from this folder/index.js

import {collection, getDocs , addDoc , doc, deleteDoc ,getDoc } from 'firebase/firestore/lite';
import {addToCompletedTodoDatabase} from './completedTodos'

const runningTodosRef = collection(db , 'runningTodos');

export async function getTodos(){
   
    const todosSnapshot = await getDocs(runningTodosRef);
    const tasks = todosSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    return tasks;
}

export async function addTodoToRunningTodoDatabase(task){
    const ref = await addDoc( runningTodosRef, {task} );
    return {task , id:ref.id }
}

export async function deleteTodoFromrunningTodoDatabase(id){
    const docRef = await doc(db, "runningTodos", id);
    const docSnap = await getDoc(docRef);
    
    await deleteDoc(docRef);
    
    return docSnap.data();
}

export async function convertRunningTodoToCompletedTdo(id){
    deleteTodoFromrunningTodoDatabase(id).then( (value) => { addToCompletedTodoDatabase(value)}).catch(alert);
}
