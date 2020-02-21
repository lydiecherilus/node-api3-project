import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PostCard from './PostCard'

const PostsList = function () {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/posts`)
            .then(response => {
                console.log(response.data)
                setPosts(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <div className='posts-list'>
            {posts.map((post, key) => {
                return (
                    <PostCard
                        post={post}
                        key={key}
                    />
                );
            })}
        </div>
    )
}
export default PostsList