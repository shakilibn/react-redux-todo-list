const initialData = {
    list: []
}

const todoReducer = (state = initialData, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            const {id, data} = action.payload;
            return {
                ...state,
                list:[...state.list, {id, data}]
            }
        case 'REMOVE_TODO':
            const newList = state.list.filter(item => item.id !== action.id);
            return {
                ...state,
                list: newList
            }
        case 'CLEAR_TODO':
            return {
                ...state,
                list: []
            }
        default: return state;
    }
}

export default todoReducer;