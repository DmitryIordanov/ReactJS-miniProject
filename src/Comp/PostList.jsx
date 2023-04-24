import React from 'react';
import PostItem from "./PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = ({posts, title, remove}) => {
    if (!posts.length){
        return (
            <div>
                <h1 style={{textAlign: 'center', marginTop: '15px'}}>
                    Нечего не найдено!
                </h1>
            </div>
        )
    }

    return (
        <TransitionGroup className='row'>
            {posts.map((post, index) =>
                <CSSTransition
                    key={post.id}
                    timeout={500}
                    classNames="post"
                >
                <PostItem remove={remove} number={index + 1} post={post}/>
                </CSSTransition>
            )}
        </TransitionGroup>
    );
};

export default PostList;