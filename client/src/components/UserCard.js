import React from 'react'

const UserCard = props => {
    return (
        <div className="usercard">
            <h3>User id: {props.user.id}</h3>
            <h3>User Name: {props.user.name}</h3>
        </div>
    )
}
export default UserCard;