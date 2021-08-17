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
            <input 
            type="text" 
            placeholder="Input a new todo" 
            value={text} 
            onChange={changeHandler}/>
            <button onClick={handleAdd}>Add</button>
        </div>

    );
}

export default TodoForm;