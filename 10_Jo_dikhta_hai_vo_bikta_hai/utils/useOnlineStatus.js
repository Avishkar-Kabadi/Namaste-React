import { useEffect, useState } from "react";

/**
 * useOnlineStatus - Detects and returns the user's online/offline status in real-time.
 *
 * @returns {boolean} - true if online, false if offline
 */

const useOnlineStatus = () => {

    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {
        const handleOnline = () => setIsOnline(true);
        const handleOffline = () => setIsOnline(false);

        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        return () => {
            window.removeEventListener("offline", handleOffline);
            window.removeEventListener("online", handleOnline)
        }
    }, []);

    return isOnline;
}

export default useOnlineStatus;