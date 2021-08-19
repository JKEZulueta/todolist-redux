import { createSlice, createEntityAdapter, createSelector } from "@reduxjs/toolkit";

const todosAdapter = createEntityAdapter();
const initialState = todosAdapter.getInitialState({
    ids: ["1"],
    entities: {
        1: {
            id: "1",
            text: "My list of tasks",
            done: false,
        }
    }
});

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        AddTodo(state, action){
            todosAdapter.addOne(state, action.payload);
            // console.log("Add Todo: ", action);
            // return state;
        },
        ToggleTodo(state, action){
            todosAdapter.updateOne(state, {
                id: action.payload.id,
                changes: action.payload.updateTodo
            });
        },
        DeleteFromState(state, action)
            {
                todosAdapter.removeOne(state, action.payload.id);//deletefromState: 
            },
        AddTodos(state, action)
            {
                todosAdapter.addMany(state, action.payload);
            },
            setText(state, action)
            {
                todosAdapter.updateOne(state, {
                    text: action.payload.text,
                    changes: action.payload.editText
                });
            }
        },
        
        
    
});

export const { AddTodo, ToggleTodo, DeleteFromState, AddTodos, setText } = todoSlice.actions;

export const{ selectAll: selectTodos,selectIds: selectToDoIds, selectById: selectTodoById } = todosAdapter.getSelectors
((state) => state.todoList);

export const selectDoneTodo = createSelector([selectTodos], (todos) => todos.filter((todo) => todo.done));

export default todoSlice.reducer;