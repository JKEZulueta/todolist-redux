import React from "react";
import TodoItem from "./TodoItem";
import {selectToDoIds} from "../../../todoSlice";
import { useSelector } from "react-redux";


function TodoGroup(){
    
    const todoIds = useSelector(selectToDoIds);

    return(
        <div>
            <h1>Todo List</h1>
            {
                todoIds.map((id) =>  (
                <TodoItem key={id} id={id}/>
                    ))
            }
        </div>
    );


}

export default TodoGroup;