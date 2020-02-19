import React from 'react'

const PostCard = props => {
    return (
        <div className="postcard">
            <h4>Post: {props.post.text}</h4>
            <h4>User id: {props.post.user_id}</h4>
            <h5>Post id: {props.post.id}</h5>
        </div>
    )
}
export default PostCard;