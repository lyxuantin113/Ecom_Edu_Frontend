const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const getUsers = async () => {
    const res = await fetch(`${API_URL}/users`);
    return res.json();
};

export const createUser = async (userData) => {
    const res = await fetch(`${API_URL}/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
    });
    return res.json();
};
