import { useUserAuth, useUserContext } from './UserContext';
import { useOnlineStatus } from '../Hooks/useOnlineStatus';
import { Link } from 'react-router-dom';
import './index.css';
const Navbar = () => {
    const { name } = useUserContext();
    const { isAuthorized, handleLoginLogout } = useUserAuth();
    const internetStatus = useOnlineStatus();
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
                <div className="about-us-container">
                    <Link to='/about'>
                        <span>About</span>
                    </Link>
                </div>
                <div className="last">
                    <button>Help</button>
                    <button>Cart</button>
                    <button onClick={() => handleLoginLogout()}>
                        {isAuthorized ? `Logout ${name}` : `Login`}
                    </button>
                    <span>{internetStatus ? "✅" : "🔴"}</span>
                </div>
            </div>

        </div>
    )
}

export default Navbar;