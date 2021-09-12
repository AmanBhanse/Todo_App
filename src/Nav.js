import React from 'react'
import {Link } from "react-router-dom";
function Nav() {
    return (
       <nav>
           <h2>Todo Manager</h2>
           <ul className="nav-items">
            <Link to="/runningTodo">
               <li>Pending Todos</li>
            </Link>
            <Link to="/completedTodo">
               <li>Done Todos</li>
            </Link>
           </ul>
       </nav>
    )
}

export default Nav
