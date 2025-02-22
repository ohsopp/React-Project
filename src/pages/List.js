import React from 'react';

const User = ({userData}) => {
    return (
        <tr>
            <td>{userData.name}</td>
            <td>{userData.email}</td>
        </tr>
    )
}

const UserList = () => {
    const users = [
        {email: 'ohsopp@gmail.com', name: 'ohsopp'},
        {email: 'dabeen@gmail.com', name: 'dabeen'},
        {email: 'loxeve@gmail.com', name: 'loxeve'},
        {email: 'qwer@gmail.com', name: 'qwer'}
    ];

    return (
        <table>
            <thead>
                <tr>
                    <th>이름</th>
                    <th>이메일</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => <User userData={user} />)}
            </tbody>
        </table>
    )
}

export default UserList;