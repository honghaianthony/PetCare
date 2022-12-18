import { useState } from "react";
import "./App.css";
import Router from "./routes";
import { Icon } from "@iconify/react";
import { HelmetProvider } from "react-helmet-async";

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
    return (
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
                <Router />
            </HelmetProvider>
        </div>
    );
}

export default App;
