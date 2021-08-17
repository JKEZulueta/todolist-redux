import React, { useState } from 'react';
import TodoGroup from "./TodoGroup";
import TodoForm from './TodoForm';

function TodoList(){

    return(
        <div>
            <TodoGroup/>
            <TodoForm/>
        </div>
    );
}

export default TodoList;