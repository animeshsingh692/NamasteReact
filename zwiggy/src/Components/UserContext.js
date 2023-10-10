import React, { createContext, useContext, useState } from "react";

const UserContext = createContext({
    loginName: ""
});

const UserAuthenticated = createContext({
    auth: false
});

export const useUserContext = () => {
    return useContext(UserContext);
}

export const useUserAuth = () => {
    return useContext(UserAuthenticated);
}

export function UserProvider({ children }) {
    const { loginName } = useUserContext()
    const [name, setName] = useState(loginName);

    const userContextValues = {
        name, setName
    }

    return (
        <UserContext.Provider value={userContextValues}>{children}</UserContext.Provider>
    )
}

export function UserAuthProvider({ children }) {

    const { auth } = useUserAuth();
    const [isAuthorized, setIsAuthorized] = useState(auth);

    const handleLoginLogout = () => {
        if (isAuthorized) setIsAuthorized(false)
    }

    const userAuthValues = {
        isAuthorized, setIsAuthorized, handleLoginLogout
    }
    return (
        <UserAuthenticated.Provider value={userAuthValues}>{children}</UserAuthenticated.Provider>
    )
}

