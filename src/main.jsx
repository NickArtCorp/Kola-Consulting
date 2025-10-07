import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { HashRouter } from "react-router-dom";
import { AppContextProvider } from "./AppContext";

const root = ReactDOM.createRoot(document.getElementById("root")); 

root.render(
   <HashRouter>
   <AppContextProvider>
      <App />
    </AppContextProvider>
    </HashRouter>
  
 ,
);
