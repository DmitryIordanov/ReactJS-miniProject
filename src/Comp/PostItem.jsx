import React from 'react';
import MyButton from "./UI/Button/MyButton";

const PostItem = (props) => {
    return (
        <div className='post'>
            <h1 className='title'>{props.post.id}. {props.post.title}</h1>
            <div className='body'><p>{props.post.body}</p></div>
            <MyButton onClick={() => props.remove(props.post)} style={{margin: "0 auto"}}>Удалить</MyButton>
        </div>
    );
};

export default PostItem;