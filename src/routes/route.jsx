import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../components/Home/Home";
import Register from "../components/Register/Register";
import Login from "../components/Login/Login";
import AddTips from "../Pages/AddTips";
import BrowseTips from "../Pages/BrowseTips";
import UpdateTips from "../Pages/UpdateTips";
import ErrorPage from "../Pages/ErrorPage";
import PrivatePage from "../Pages/PrivatePage";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            { index: true, element: <PrivatePage><Home></Home></PrivatePage> },
            { path: '/login', element: <Login></Login> },
            { path: '/register', element: <Register></Register> },
            { path: '/addtips', element: <AddTips></AddTips> },
            { path: '/browsetips', element: <BrowseTips></BrowseTips> },
            { path: '/updatetips', element: <UpdateTips></UpdateTips> },
        ]
    }
])

export default router ;