import React, {useContext, useEffect, useState} from "react";
import {usePosts} from "../hooks/usePosts";
import {useFetching} from "../hooks/useFetching";
import PostServise from "../API/PostServise";
import {getPageCount} from "../utils/Pages";
import MyButton from "../Comp/UI/Button/MyButton";
import MyModal from "../Comp/UI/MyModal/MyModal";
import PostForm from "../Comp/PostForm";
import PostFilter from "../Comp/PostFilter";
import MyLoader from "../Comp/UI/Loader/MyLoader";
import PostList from "../Comp/PostList";
import MyPagination from "../Comp/UI/Pagination/MyPagination";
import {AuthCreatePost} from "../context";
import MainFon from "../Comp/StyleComp/MainFon";

const Posts = () => {
    const {isCreatePost, setIsCreatePost} = useContext(AuthCreatePost)

    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false);
    const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query)
    const [totalPage, setTotalPage] = useState(0)
    const [limit, setLimit] = useState(6)
    const [page, setPage] = useState(1)

    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostServise.getAll(limit, page);
        setPosts(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPage(getPageCount(totalCount, limit))
    })

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }
    useEffect(() => {
        fetchPosts()
    }, [page])

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }
    const changePage = (page) => {
        setPage(page)
    }

    return (
        <div className="App">
            <MainFon
                title="Блог"
                desc="Ця сторінка блогу, тут ви можете знайти всі статті та не тільки."
            />
            <div className='container'>
                {isCreatePost
                    ?<div>
                        <MyButton style={{marginTop: '15px'}} onClick={() => setModal(true)}>
                            Створити пост
                        </MyButton>
                        <hr style={{margin: "15px 0"}}/>
                        <MyModal visible={modal} setVisible={setModal}>
                            <PostForm create={createPost}/>
                        </MyModal>
                    </div>
                    :<div></div>
                }
                <PostFilter
                    filter={filter}
                    setFilter={setFilter}
                />
                {postError &&
                    <h1 style={{textAlign: "center"}}>Поизошла ошибка {postError}</h1>
                }
                {isPostsLoading
                    ?<div style={{display: 'flex', justifyContent: 'center', marginTop: '25px'}}>
                        <MyLoader></MyLoader>
                    </div>
                    :<PostList remove={removePost} posts={sortedAndSearchPosts} title={'Список постов'}/>
                }
                <MyPagination
                    totalPage={totalPage}
                    page={page}
                    changePage={changePage}
                ></MyPagination>
            </div>
        </div>
    );
}

export default Posts;
