import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const todosAdapter = createEntityAdapter();
const initialState = todosAdapter.getInitialState({
    ids: ["1"],
    entities: {
        1: {
            id: "1",
            text: "",
            done: false,
        }
    }
});

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        AddTodo(state, action){
            todosAdapter.addOne(state, {
                id: uuid(),
                text: action.payload,
                done: false,
            });
            // console.log("Add Todo: ", action);
            // return state;
        },
        ToggleTodo(state, action){
            {
                const todo = state.entities[action.payload];
                todo.done = !todo.done;
            };
        },
        DeleteFromState(state, action)
            {
                todosAdapter.removeOne(state, action.payload)
            }
    },
    
});

export const { AddTodo, ToggleTodo } = todoSlice.actions;

export const{ selectIds: selectToDoIds, selectById: selectTodoById } = todosAdapter.getSelectors
((state) => state.todoList);

export default todoSlice.reducer;