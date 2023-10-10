import { useState, useEffect } from "react";
export const useOnlineStatus = () => {
    const [internetStatus, setInternetStatus] = useState(true);

    useEffect(() => {
        window.addEventListener("offline",
            () => {
                setInternetStatus(false);
            }
        );

        window.addEventListener("online",
            () => {
                setInternetStatus(true);
            }
        );

    }, []);
    return internetStatus;
}
