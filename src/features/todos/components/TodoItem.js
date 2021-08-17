import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTodoById, ToggleTodo } from '../../../todoSlice';
import "../../../styles/TodoItem.css"




function TodoItem(props){
    const dispatch = useDispatch();
    const { id } = props;
    const todo = useSelector(state => selectTodoById(state, id));

    function handleClick(){
        dispatch(ToggleTodo(props.id));
    }


    var todoStatus = todo.done ? "done" : "";
    return(
        <div className={`TodoItem-todo ${todoStatus}`} onClick={handleClick}>
            {todo.text}
        </div>

    );
}

export default TodoItem;