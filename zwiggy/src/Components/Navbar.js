import { useUserAuth, useUserContext } from './UserContext';
import './index.css';
const Navbar = () => {

    const { name } = useUserContext();
    const { isAuthorized, handleLoginLogout } = useUserAuth()
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
                        {isAuthorized ? `Logout ${name}` : `Login`}
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Navbar;