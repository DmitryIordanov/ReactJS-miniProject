import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostServise from "../API/PostServise";
import MyLoader from "../Comp/UI/Loader/MyLoader";

const PostsPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [fetchPostById, isLoading, error] = useFetching(async () => {
        const response = await PostServise.getById(params.id)
        setPost(response.data)
    })

    useEffect(() => {
        fetchPostById(params.id)
    }, [])

    return (
        <div className='container'>
            {isLoading
                ?<div style={{display: 'flex', justifyContent: 'center', marginTop: '25px'}}>
                    <MyLoader></MyLoader>
                </div>
                :<div className="Post__content">
                    <li><h1>ID: {params.id}</h1></li>
                    <li><h1>Title: {post.title}</h1></li>
                    <li><div>Body: {post.body}</div></li>
                </div>
            }
        </div>
    );
};

export default PostsPage;