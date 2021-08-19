import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTodoById, ToggleTodo, DeleteFromState } from '../../../todoSlice';
import "../../../styles/TodoItem.css"
import { deleteTodo, updateTodo } from '../../apis/todos';
import { Modal, Button } from 'antd';

function TodoItem(props){
    const dispatch = useDispatch();
    const [isModalVisible, setIsModalVisible] = useState(false);
    // const { id } = props;
    const todo = useSelector(state => selectTodoById(state, props.id));

    function handleClick() {
        updateTodo(props.id, {done: !todo.done}).then((response) => {
            dispatch(ToggleTodo({id:props.id, updateTodo:response.data}));
        })
    }

    function deleteTask(err){
        deleteTodo(props.id).then((response)=>  {
           
            dispatch(DeleteFromState(response.data));
        })
        err.stopPropagation();
    }

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };
    
    const handleCancel = () => {
        setIsModalVisible(false);
    };


    let todoStatus = todo.done ? "done" : "";
    
    return(
        <React.Fragment>
            
            
            <Modal title="Edit Todo" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <input type="text" value={todo.text}></input>
            </Modal>
            
        <div className={`TodoItem-todo ${todoStatus}`} onClick={handleClick}>
             
                <div className="delButton"> <button type="button" onClick={deleteTask}><span className="toDelete">X</span></button></div>
                <div className="editButton"><button className= {todo.done ? 'edit' : ""} onClick={showModal}>   Edit</button></div>
            
            <div>
            <i class="pin"></i>
            <blockquote className="note yellow">
            {todo.text} <cite class="author">- Kyle</cite>
            </blockquote>
            </div>
        </div>
        
        
        </React.Fragment>
    );
};

export default TodoItem;