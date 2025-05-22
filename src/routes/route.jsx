import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../components/Home/Home";
import Register from "../components/Register/Register";
import Login from "../components/Login/Login";
import BrowseTips from "../Pages/BrowseTips";
import UpdateTips from "../Pages/UpdateTips";
import ErrorPage from "../Pages/ErrorPage";
import PrivatePage from "../Pages/PrivatePage";
import AllGardeners from "../Pages/AllGardeners";
import MyTips from "../Pages/MyTips";
import ShareTips from "../Pages/ShareTips";
import ActiveGardeners from "../Pages/ActiveGardeners";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true, element: <Home></Home>, loader: async () => {
                    const gardenersRes = await fetch('http://localhost:3000/api/gardeners');
                    const tipsRes = await fetch('http://localhost:3000/api/top-trending');

                    return {
                        gardeners: await gardenersRes.json(),
                        alltips: await tipsRes.json()
                    };
                }
            },
            { path: '/login', element: <Login></Login> },
            { path: '/register', element: <Register></Register> },
            { path: '/sharetips', element: <ShareTips></ShareTips> },
            { path: '/browsetips', element: <BrowseTips></BrowseTips>, loader: () => fetch('http://localhost:3000/api/top-trending') },
            { path: '/updatetips', element: <UpdateTips></UpdateTips> },
            { path: '/allgardeners', element: <AllGardeners></AllGardeners> },
            { path: '/activegardeners', element: <ActiveGardeners></ActiveGardeners>, loader: () => fetch('http://localhost:3000/api/gardeners') },
            { path: '/mytips', element: <MyTips></MyTips> },
        ]
    }
])

export default router;