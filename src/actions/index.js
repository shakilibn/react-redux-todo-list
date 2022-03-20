export const addTodo = (data) => {
    return {
        type: 'ADD_TODO',
        payload: {
            id: new Date().getTime().toString(),
            data
        }
    }
}

export const removeTodo = (id) => {
    return {
        type: 'REMOVE_TODO',
        id
    }
}

export const clearTodo = () => {
    return {
        type: 'CLEAR_TODO'
    }
}