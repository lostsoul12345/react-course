import { Outlet } from "react-router-dom"

function Layout() {
    return (
        <div>
            <header>
                This is the header
            </header>
            <Outlet />
        </div>
    )
}

export default Layout