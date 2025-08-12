import { Outlet } from "react-router-dom";
import { NavBarComponent } from "./components"

function App() {

    return (
        <>
            <NavBarComponent />
            <Outlet />
        </>
    )
}

export default App
