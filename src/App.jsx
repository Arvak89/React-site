import './App.css'
import {Outlet} from "react-router";
import SideMenu from "./components/SideMenu/SideMenu.jsx";

function App() {

    return (
        <div className={"App"}>
            <SideMenu/>
            <Outlet/>
        </div>
    )
}

export default App
