import Home from "./pages/home/Home";
import Login from "../src/pages/login/Login";
import List from "./pages/list/List";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import {AuthContext} from "../src/context/Authcontext";
import EventDetails from "./pages/eventDetails/eventDetails";
import Create from "../src/pages/login/Login";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  const Protectedroutes = ({children})=>{
    const {user} =useContext(AuthContext);
    if(!user){
      return  <Navigate to= "/login" />
    }
    return children;
  }

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="/login" element={<Create/>} />
            <Route path="user/:userId" element={ <Protectedroutes>  <EventDetails/></Protectedroutes>  } />
            <Route index element={<Protectedroutes><Home /></Protectedroutes>  } />
            <Route path="user">
              <Route index element={<Protectedroutes> <List /></Protectedroutes>  } />
          </Route>
              <Route
                path="/new"
                element={ <Protectedroutes> <New/></Protectedroutes>}
              />
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
