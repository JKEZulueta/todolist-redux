import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddTodos, selectToDoIds } from "../../../todoSlice";
import TodoItem from "./TodoItem";
import { AddTodo } from "../../../todoSlice";
import { addTodo, getTodos } from "../../apis/todos";
import { Input } from 'antd';
import 'antd/dist/antd.css';
 


//function to const
function TodoGroup () {
    const {Search} = Input;
    const todoIds = useSelector(selectToDoIds);
    const dispatch = useDispatch();

        getTodos().then((response) => {
            dispatch(AddTodos(response.data))
        })

        const [text, setText] = useState('');

    function changeHandler(event){
        setText(event.target.value);
        //console.log(event.target.value);
    }

    function handleAdd(){
        addTodo(text).then((response) => {
            dispatch(AddTodo(response.data));
        });
        
        setText("");
    }
    return(
        <React.Fragment>
             <marquee behavior="scroll" direction="right"><h2>Kyle's Todo List</h2></marquee>
        <div>
            <center>
            <Search 
            style={{width: 700, marginTop: '25px', marginBottom: '10px'}} 
            type = "text" placeholder="input todo here" 
            value={text}
            onChange={changeHandler} 
            enterButton="Add"  
            size="large" 
            onSearch ={handleAdd} />

            {/* <input className="myInput"
            type="text" 
            placeholder="Input a new todo" 
            value={text} 
            onChange={changeHandler}/>
            <button className="addButton" onClick={handleAdd}><span>Add</span></button> */}
            </center>
        </div>
        

        
          

            {
                todoIds.map((id) =>  (
                <TodoItem key={id} id={id}/>
                    ))
            }
        </React.Fragment>
    );


}

export default TodoGroup;