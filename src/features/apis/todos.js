import api from "./api";

export const getTodos = () => {
    return api.get("/todos")
}

export const addTodo = (text) =>{
    return api.post("/todos", {text})
}