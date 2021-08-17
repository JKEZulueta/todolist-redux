import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTodoById } from '../../../todoSlice';




function TodoItem(props){

    const dispatch = useDispatch();
    const { id } = props;

    const todo = useSelector(state => selectTodoById(state, id));


    return(
        <div>
            {todo.text}
        </div>

    );
}

export default TodoItem;