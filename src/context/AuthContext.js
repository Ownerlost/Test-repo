import React, { createContext, useState, useContext } from 'react';
import axios from '../api/axios';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [auth, setAuth] = useState(null);

    const login = async (email, password) => {
        try {
            const response = await axios.post('/users/login', { email, password });
            setAuth(response.data.token);
        } catch (error) {
            console.error('Error logging in', error);
        }
    };

    const logout = () => {
        setAuth(null);
    };

    return (
        <AuthContext.Provider value={{ auth, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
