import React from 'react';
import { useSelector } from 'react-redux';
import { initialTodoList } from '../../../constants/constants';
import { selectToDoIds } from '../../../todoSlice';
import { getTodoById } from '../../../utils/utils';


function TodoItem(props){

    const todo = useSelector(state => selectToDoIds(state, props.itemId));

    return(
        <div>
            {todo.text}
        </div>

    );
}

export default TodoItem;