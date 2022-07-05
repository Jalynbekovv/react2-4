import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {clearPostsAction, getPostsAction} from "../../redux/actions/actions";
import classes from "../postsPage/postsPage.module.css"

function PostsPage () {

    const dispatch = useDispatch()
    const posts = useSelector(state => state.postsReducer.posts)

    const getPosts = () => {
        dispatch(getPostsAction())
    }

    const clearPosts = () => {
        dispatch(clearPostsAction())
    }

    return (
        <div>
            <button onClick={getPosts}>Get Posts</button>
            <button onClick={clearPosts}>Clear Posts</button>


            <div className={classes.posts}>
                {
                    posts.length > 0
                        ?
                        posts.map((post, key) => <div key={key} className={classes.post}>
                            <h4>Id: {post.id}</h4>
                            <h4>Title: {post.title}</h4>
                            <p>Body: {post.body}</p>
                        </div>)
                        :
                        <p>Постов нет</p>
                }
            </div>
        </div>
    )
}

export default PostsPage;