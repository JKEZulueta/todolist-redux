import React from "react";
import TodoItem from "./TodoItem";
import {initialTodoList} from "../../../constants/constants";
import {getAllToDoIds} from "../../../utils/utils";
import {selectToDoIds} from "../../../todoSlice";
import { useSelector } from "react-redux";


function TodoGroup(){
    
    const todoIds = useSelector(selectToDoIds);

    return(
        <div>
            <span>To Do Group: </span>
            {
                todoIds.map((id) =>  (
                <TodoItem key={id} itemId={id}/>
                    ))
            }
        <TodoItem/>
        </div>
    );


}

export default TodoGroup;