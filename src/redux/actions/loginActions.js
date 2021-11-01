export const ADD_USER = 'ADD_USER';


export const addUser = (id) => {
    return {
        type: ADD_USER,
        payload: { id: id }
    }
};