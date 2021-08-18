import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddTodo } from "../../../todoSlice";

function TodoForm(){
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    function changeHandler(event){
        setText(event.target.value);
        //console.log(event.target.value);
    }

    function handleAdd(){
        dispatch(AddTodo(text));
        //console.log("handleAdd: ", text);
    }

    return(
        <div>
            <center>
            <input className="myInput"
            type="text" 
            placeholder="Input a new todo" 
            value={text} 
            onChange={changeHandler}/>
            <button className="addButton" onClick={handleAdd}><span>Add</span></button>
            </center>
        </div>

    );
}

export default TodoForm;