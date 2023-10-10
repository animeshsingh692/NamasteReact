import './index.css';
import { useContext, useState } from 'react';
import { UserContext } from './UserContext';
const Navbar = ({ name, userStatus, handleLoginLogout }) => {

    const loginName = useContext(UserContext);

    // const [name, setName] = useState('');
    // const [userStatus, setUserStatus] = useState(0);

    // const handleLogin = () => {
    //     if (userStatus) {
    //         setName('');
    //         setUserStatus(0);
    //     } else {
    //         setName(loginName.name);
    //         setUserStatus(1);
    //     }
    //     //userStatus ? setName('') && setUserStatus(0) : setName('Animesh'); setUserStatus(1);
    //     console.log(name);
    // }

    return (
        <div className="navbar">
            <div className="nav-items">
                <div className="first">
                    <span>Zwiggy</span>
                </div>

                <div className="middle">
                    <input type="text" name="searchTxt" id="" />
                    <button>Search</button>
                    <button>Top Rated Restaurants</button>
                </div>
                <div className="last">
                    <button>Help</button>
                    <button>Cart</button>
                    <button onClick={() => handleLoginLogout()}>
                        {userStatus ? `Logout ${name}` : `Login`}
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Navbar;