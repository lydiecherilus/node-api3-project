import React from 'react'

const PostCard = props => {
    return (
        <div className="postcard">
            <h3>User id: {props.post.id}</h3>
            <h3>Post Content: {props.post.text}</h3>
            <h3>Post id: {props.post.user_id}</h3>
        </div>
    )
}
export default PostCard;