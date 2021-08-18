import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddTodos, selectToDoIds } from "../../../todoSlice";
import TodoItem from "./TodoItem";
import { AddTodo } from "../../../todoSlice";
import { addTodo, getTodos } from "../../apis/todos";
 


//function to const
function TodoGroup () {
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
        

        
           <marquee behavior="scroll" direction="right"><h2>Kyle's Todo List</h2></marquee>

            {
                todoIds.map((id) =>  (
                <TodoItem key={id} id={id}/>
                    ))
            }
        </React.Fragment>
    );


}

export default TodoGroup;