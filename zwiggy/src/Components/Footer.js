import { useContext } from "react";
import { UserContext } from "./UserContext";

const Footer = () => {
    const { loginName } = useContext(UserContext)
    return (
        <div className="footer-content">
            <h5>
                {loginName ? `Hello ${loginName}` : `Default User`}
            </h5>
        </div>

    )
}

export default Footer;