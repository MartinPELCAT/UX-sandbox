import React from "react";
import ReactDOM from "react-dom";
import "./__generated__/index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.unstable_createRoot(document.getElementById("root")!).render(<App />);

serviceWorker.unregister();
