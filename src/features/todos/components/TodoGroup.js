import React from "react";
import { useSelector } from "react-redux";
import { selectToDoIds } from "../../../todoSlice";
import TodoItem from "./TodoItem";
import { useEffect } from "react";
import { getTodos } from "../../apis/todos";

//function to const
function TodoGroup () {
    const todoIds = useSelector(selectToDoIds);

    useEffect(() => {
        getTodos().then((response) => {
            console.log("response: ", response.data);
        })
    }, [])

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