import React from 'react';
import MyButton from "./UI/Button/MyButton";
import {useNavigate} from "react-router-dom";

const PostItem = (props) => {
    const router = useNavigate()

    return (
        <div className='post'>
            <h1 className='title'>{props.post.id}. {props.post.title}</h1>
            <div className='body'><p>{props.post.body}</p></div>
            <div className='post__btn'>
                <MyButton onClick={() => router(`/posts/${props.post.id}`)}>Открыть</MyButton>
                <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
            </div>
        </div>
    );
};

export default PostItem;