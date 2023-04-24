import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostServise from "../API/PostServise";
import MyLoader from "../Comp/UI/Loader/MyLoader";

const PostsPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchPostById, isLoading, error] = useFetching(async () => {
        const response = await PostServise.getById(params.id)
        setPost(response.data)
    })
    const [fetchComments, isLoadingComm, Commerror] = useFetching(async () => {
        const response = await PostServise.getCommentPostById(params.id)
        setComments(response.data)
    })

    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])

    return (
        <div className='container'>
            {isLoading
                ?<div style={{display: 'flex', justifyContent: 'center', marginTop: '25px'}}>
                    <MyLoader></MyLoader>
                </div>
                :<div className="Post__content">
                    <li><h1>ID: {params.id}</h1></li>
                    <li><h1>Назва: {post.title}</h1></li>
                    <li><div>Опис: {post.body}</div></li>
                </div>
            }
            <h1 style={{marginTop: 30}}>Коментарі</h1>
            {isLoadingComm
                ?<div style={{display: 'flex', justifyContent: 'center', marginTop: '25px'}}>
                    <MyLoader></MyLoader>
                </div>
                :<div>
                    {comments.map(comm =>
                        <div key={comm.id} className="comment__block">
                            <h5>{comm.email}</h5>
                            <p>{comm.body}</p>
                        </div>
                    )}
                </div>
            }
        </div>
    );
};

export default PostsPage;