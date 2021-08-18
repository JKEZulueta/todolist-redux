import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddTodos, selectToDoIds } from "../../../todoSlice";
import TodoItem from "./TodoItem";
import { getTodos } from "../../apis/todos";

//function to const
function TodoGroup () {
    const todoIds = useSelector(selectToDoIds);
    const dispatch = useDispatch();

        getTodos().then((response) => {
            dispatch(AddTodos(response.data))
        })

    return(
        <React.Fragment>
           <center><h1>Todo List</h1></center>
            {
                todoIds.map((id) =>  (
                <TodoItem key={id} id={id}/>
                    ))
            }
        </React.Fragment>
    );


}

export default TodoGroup;