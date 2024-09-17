import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Layout from "./Layout";
import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements
} from "react-router-dom";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route
                path="/"
                element={<Home />}
            />
            <Route
                path="/auth/login"
                element={<Login />}
            />
            <Route
                path="/auth/register"
                element={<Register />}
            />
        </Route>
    )
);

function ApplicationRouter(){
    return(
        <RouterProvider router={router}/>
    )
}

export default ApplicationRouter