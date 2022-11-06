import { useState } from "react";
import "./App.css";
import Router from "./routes";

function App() {
  const [toogle, setToogle] = useState(true);
  return (
    <div className={`App ${toogle ? "first-layout" : "second-layout"}`}>
      <button
        style={{ position: "fixed", zIndex: 9999 }}
        onClick={() => setToogle(!toogle)}
      >
        Change layout
      </button>
      <Router />
    </div>
  );
}

export default App;
