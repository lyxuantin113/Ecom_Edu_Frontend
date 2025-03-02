import React, { useEffect, useState } from 'react';
import { getUsers, createUser } from './api';

const App = () => {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        const data = await getUsers();
        setUsers(data);
    };

    const handleAddUser = async (e) => {
        e.preventDefault();
        await createUser({ name, email, password: '123456' });
        setName('');
        setEmail('');
        fetchUsers();
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>User List</h2>
            <ul>
                {users.map((user) => (
                    <li key={user._id}>{user.name} - {user.email}</li>
                ))}
            </ul>
            <h3>Add User</h3>
            <form onSubmit={handleAddUser}>
                <input type="text" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)} required />
                <input type="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default App;