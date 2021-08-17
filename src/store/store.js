import { configureStore } from "@reduxjs/toolkit";
import  todosReducer  from "../todoSlice";


const store = configureStore({
    reducer: {
        todoList: todosReducer
    },
});

export default store;