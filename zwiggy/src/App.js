import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    UserProvider,
    UserAuthProvider
} from './Components/UserContext';
import Body from './Components/Body';
const App = () => {
    return (
        <>
            <UserAuthProvider>
                <UserProvider>
                    <Body />
                </UserProvider>
            </UserAuthProvider>
        </>

    )
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);