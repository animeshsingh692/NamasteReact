import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './Components/Navbar';
import Restaurant from './Components/Restaurant';
import Footer from './Components/Footer';
import { UserContext } from './Components/UserContext';
import { useState, useContext } from 'react';
const App = () => {
    const { loginName } = useContext(UserContext);
    const [name, setName] = useState(loginName);
    const [userStatus, setUserStatus] = useState(0);


    const handleLoginLogout = () => {
        if (userStatus) {
            setName(loginName);
            setUserStatus(0);
        } else {
            setName('Ani');
            setUserStatus(1);
        }
    }

    return (
        <UserContext.Provider value={{ loginName: name }}>
            <div>
                <Navbar name={name} userStatus={userStatus} handleLoginLogout={handleLoginLogout} />
                <Restaurant />
                <Footer />
            </div>
        </UserContext.Provider>

    )
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);