import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTodoById, ToggleTodo, DeleteFromState } from '../../../todoSlice';
import "../../../styles/TodoItem.css"




function TodoItem(props){
    const dispatch = useDispatch();
    const { id } = props;
    const todo = useSelector(state => selectTodoById(state, id));

    function handleClick(){
        dispatch(ToggleTodo(props.id));
    }

    function deleteTask(err){
        err.stopPropagation();
        dispatch(DeleteFromState(props.id));
    }


    var todoStatus = todo.done ? "done" : "";
    return(
        <div className={`TodoItem-todo ${todoStatus}`} onClick={handleClick}>
            <h2>{todo.text}</h2>
            <button className="delButton" type="button" onClick={deleteTask}><span>Delete</span></button>
        </div>

    );
}

export default TodoItem;