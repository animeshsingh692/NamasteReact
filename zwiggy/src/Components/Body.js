import Navbar from "./Navbar";
import Authentication from "./Authentication";
import Footer from "./Footer";
import { useUserAuth } from "./UserContext";
import Restaurant from "./Restaurant";
const Body = () => {
    const { isAuthorized } = useUserAuth()
    return (
        <>
            {isAuthorized ? <>
                <Navbar />
                <Restaurant />
                <Footer />
            </> : <Authentication />}
        </>
    )
}

export default Body;