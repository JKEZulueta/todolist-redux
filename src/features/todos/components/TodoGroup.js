import React from "react";
import TodoItem from "./TodoItem";
import {selectToDoIds} from "../../../todoSlice";
import { useSelector } from "react-redux";


function TodoGroup(){
    
    const todoIds = useSelector(selectToDoIds);

    return(
        <div>
            {
                todoIds.map((id) =>  (
                <TodoItem key={id} id={id}/>
                    ))
            }
        </div>
    );


}

export default TodoGroup;