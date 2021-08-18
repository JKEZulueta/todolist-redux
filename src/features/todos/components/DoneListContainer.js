import React from 'react';
import { useSelector } from 'react-redux';
import { selectDoneTodo } from '../../../todoSlice';
import TodoItem from './TodoItem';


function DoneList() {
    const doneTodoIds = useSelector(selectDoneTodo);

    return (
        <div>

            <center>
            <h2>Done List</h2>
            <ul>
                List of done todo
            </ul>
           
            {doneTodoIds.map((doneItem) => (
                    <TodoItem key={doneItem.id} id={doneItem.id} />
                ))
        } 
        </center>
            
        </div>
    )
}

export default DoneList