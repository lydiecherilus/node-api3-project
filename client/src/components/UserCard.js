import React from 'react'

const UserCard = props => {
    return (
        <div className="usercard">
            <h3>User name: {props.user.name}</h3>
            <h4>User id: {props.user.id}</h4>
        </div>
    )
}
export default UserCard;