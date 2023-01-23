import { useState, useEffect } from "react";
import "./App.css";
import Router from "./routes";
import { Icon } from "@iconify/react";
import { HelmetProvider } from "react-helmet-async";
import { SkeletonTheme } from "react-loading-skeleton";

function App() {
    const [toogle, setToogle] = useState(() => {
        const x = localStorage.getItem("theme");
        if (x) {
            return x === "true";
        } else {
            localStorage.setItem("theme", true);
            return true;
        }
    });
    const [isLoading, setIsLoading] = useState(true);
    const handleLoading = () => {
        setTimeout(() => setIsLoading(false), 1500);
    };
    useEffect(() => {
        window.addEventListener("load", handleLoading);
        return () => window.removeEventListener("load", handleLoading);
    }, []);
    return !isLoading ? (
        <div className={`App ${toogle ? "first-layout" : "second-layout"}`}>
            <Icon
                className="btn-switch-theme"
                icon="ant-design:setting-filled"
                onClick={() => {
                    setToogle(!toogle);
                    localStorage.setItem("theme", !toogle);
                }}
            />

            <HelmetProvider>
                <SkeletonTheme>
                    <Router />
                </SkeletonTheme>
            </HelmetProvider>
        </div>
    ) : (
        <img
            src="/assets/images/loading.png"
            alt="Loading"
            style={{ height: "100vh", width: "100vw", objectFit: "cover" }}
        />
    );
}

export default App;
