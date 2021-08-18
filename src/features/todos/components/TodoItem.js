import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTodoById, ToggleTodo, DeleteFromState } from '../../../todoSlice';
import "../../../styles/TodoItem.css"
import { deleteTodo, updateTodo } from '../../apis/todos';

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
        deleteTodo(props.id).then((response)=>  {
            err.stopPropagation();
            dispatch(DeleteFromState(response.data));
        })
        
    }


    let todoStatus = todo.done ? "done" : "";
    
    return(
        
        <div className={`TodoItem-todo ${todoStatus}`} onClick={handleClick}>
            <button className="delButton" type="button" onClick={deleteTask}><span className="toDelete">X</span></button>
            <i class="pin"></i>
            <blockquote className="note yellow">
            {todo.text} <cite class="author">- Kyle</cite>
            </blockquote>
            </div>
    );
};

export default TodoItem;