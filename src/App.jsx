import Header from "./components/Header"
import { Outlet } from "react-router"

export default function App() {
    return(
        <div id="app" className="mx-auto px-5 md:px-20 mt-32 py-4">
            <Header />
            <Outlet />
        </div>
    )
}