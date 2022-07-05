import {types} from "../../types";

const initialState = {
    posts: []
}

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_POSTS:
            return {...state, posts: [...action.payload]}
        case types.CLEAR_POSTS:
            return {...state, posts: []}
        default:
            return state
    }
}