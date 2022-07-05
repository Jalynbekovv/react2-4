
import {types} from "../../types";

export const postsAction = (posts) => {
    return {
        type: types.GET_POSTS,
        payload: posts
    }
}

export const clearPostsAction = () => {
    return {
        type: types.CLEAR_POSTS
    }
}


export function getPostsAction () {
    return async function (dispatch) {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json();

        dispatch(postsAction(data))
    }
}