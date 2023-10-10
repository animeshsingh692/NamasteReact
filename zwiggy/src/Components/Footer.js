import { useUserContext } from "./UserContext";

const Footer = () => {
    const { name } = useUserContext()
    return (
        <div className="footer-content">
            <h5>
                {name ? `Hello ${name}` : `Default User`}
            </h5>
        </div>

    )
}

export default Footer;