import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTodoById, ToggleTodo, DeleteFromState } from '../../../todoSlice';
import "../../../styles/TodoItem.css"
import { updateTodo } from '../../apis/todos';

function TodoItem(props){
    const dispatch = useDispatch();
    // const { id } = props;
    const todo = useSelector(state => selectTodoById(state, props.id));

    function handleClick() {
        updateTodo(props.id, {done: !todo.done}).then((response) => {
            dispatch(ToggleTodo({id:props.id, updateTodo:response.data}));
        })
    }

    function deleteTask(err){
        err.stopPropagation();
        dispatch(DeleteFromState(props.id));
    }


    let todoStatus = todo.done ? "done" : "";
    
    return(
        
        <div className={`TodoItem-todo ${todoStatus}`} onClick={handleClick}>
            
            {todo.text}
            <button className="delButton" type="button" onClick={deleteTask}><span className="toDelete">X</span></button>
            
        </div>

    );
};

export default TodoItem;