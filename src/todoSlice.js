

import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const todosAdapter = createEntityAdapter();
const initialState = todosAdapter.getInitialState({
    ids: ["1"],
    entities: {
        1: {
            id: "1",
            text: "test todo 1",
            done: false,
        }
    }
});


const todoSlice = createSlice({
    name: "todos",
    initialState: initialState,
    reducers: {
        AddTodo(state, action){
            todosAdapter.addOne(state, {
                id: "4",
                text: action.payload,
                done: false,
            });
            console.log("Add Todo: ", action);
            return state;
        }
    },
});

export const { AddTodo } = todoSlice.actions;

export default todoSlice.reducer;

export const{ selectIds: selectToDoIds, selectById: selectTodoById } = todosAdapter.getSelectors
((state) => state.todoList);