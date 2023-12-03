import { createContext, useEffect, useState } from 'react';
import ENDPOINTS from '../lib/api-endpoints';
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext(null);

export function UserProvider({ children }) {
    let navigate = useNavigate();
    const [user, setUser] = useState({
        authenticated: false,
        ID: ""
    });

    useEffect(() => {
        fetch(ENDPOINTS.GET_API_AUTH_AUTHENTICATE, {
            method: 'GET',
            credentials: 'include'
        })
            .then(response => {
                if (response.ok)
                    return response.json();
                
                throw new Error('Not 200');
            })
            .then(json => {
                if (json.authenticated) {
                    setUser({
                        authenticated: json.authenticated,
                        ID: json.ID
                    });
                }
                else 
                    navigate("/auth/login");
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <UserContext.Provider
            value={{
                user, setUser
            }}
        >
            {children}
        </UserContext.Provider>
    );
}
