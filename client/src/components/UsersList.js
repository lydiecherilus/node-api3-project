import React, { useState, useEffect } from 'react'
import axios from 'axios'
import UserCard from './UserCard'

const UsersList = function () {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/users`)
            .then(response => {
                console.log(response.data)
                setUsers(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <div className='users-list'>
            {users.map((user, key) => {
                return (
                    <UserCard
                        user={user}
                        key={key}
                    />
                );
            })}
        </div>
    )
}
export default UsersList