import * as actionTypes from '../action/actionType'
import axios from 'axios';

export const getTodos_ = (todos) => {
    return { type: actionTypes.GET_ALL, todos: todos };
};

export const getTodos = () => {
    return dispatch => {
        return axios.get('/api/todo/')
            .then(res => dispatch(getTodos_(res.data)));
    };
}

export const postTodo_ = (td) => {
    return {
        type: actionTypes.ADD_TODO,
        id: td.id,
        title: td.title,
        content: td.content
    };
};

export const postTodo = (td) => {
    return (dispatch) => {
        return axios.get('/api/todo/', td)
            .then(res => {
                dispatch(postTodo_(res.data));
            });
    };
};

export const deleteTodo_ = (id) => {
    return  {
        type: actionTypes.DELETE_TODO,
        targetID: id
    };
};

export const deleteTodo = (id) => {
    return (dispatch) => {
        return axios.delete(`api/todo/${id}/`)
            .then(res => {
                dispatch(deleteTodo_(id));
            })
    };
};

export const toggleTodo_ = (id) => {
    return {
        type: actionTypes.TOGGLE_DONE,
        targetID: id
    };
};

export const toggleTodo = (id) => {
    return (dispatch) => {
        return axios.put(`api/todo/${id}/`)
            .then(res => {
                dispatch(toggleTodo_(id));
            })
    };
};

export const getTodo_ = (todo) => {
    return {
        type: actionTypes.GET_TODO,
        target: todo
    };
};

export const getTodo = (id) => {
    return (dispatch) => {
        return axios.post(`api/todo/${id}/`)
            .then(res => {
                dispatch(getTodo_(res.data));
            })
    };
};