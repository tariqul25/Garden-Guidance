import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../components/Home/Home";
import Register from "../components/Register/Register";
import Login from "../components/Login/Login";
import AddTips from "../Pages/AddTips";
import BrowseTips from "../Pages/BrowseTips";
import UpdateTips from "../Pages/UpdateTips";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            { index: true, Component: Home },
            { path: '/login', Component: Login },
            { path: '/register', Component: Register },
            { path: '/addtips', Component: AddTips },
            { path: '/browsetips', Component: BrowseTips },
            { path: '/updatetips', Component: UpdateTips },
            { path: '/errorpage', Component: ErrorPage }
        ]
    }
])

export default router ;