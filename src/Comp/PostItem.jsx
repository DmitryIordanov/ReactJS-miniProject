import React, {useContext} from 'react';
import MyButton from "./UI/Button/MyButton";
import {useNavigate} from "react-router-dom";
import {AuthCreatePost} from "../context";

const PostItem = (props) => {
    const {isCreatePost, setIsCreatePost} = useContext(AuthCreatePost)
    const router = useNavigate()

    return (
        <div className='post'>
            <div className="img__posts">
                <img src="https://dummyimage.com/1280x720/3e57e0/d4d7ff.jpg" alt=""/>
            </div>
            <div className="content__posts">
                <h1 className='title__posts'>{props.post.title.slice(0, 45)}</h1>
                <div className='body__posts'><p>{props.post.body}</p></div>
                <div className='post__btn'>
                    <MyButton onClick={() => router(`/posts/${props.post.id}`)}>Відкрити</MyButton>
                    {isCreatePost
                        ?<MyButton onClick={() => props.remove(props.post)}>Видалити</MyButton>
                        :null
                    }
                </div>
            </div>
        </div>
    );
};

export default PostItem;