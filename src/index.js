import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { UserProvider } from "./pages/UserProvider";
import { BrowserRouter} from "react-router-dom";

ReactDOM.render(
  
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>,

  document.getElementById("root")
)
