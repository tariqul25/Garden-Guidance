import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../components/Home/Home";
import Register from "../components/Register/Register";
import Login from "../components/Login/Login";
import BrowseTips from "../Pages/BrowseTips";
import UpdateTips from "../Pages/UpdateTips";
import PrivatePage from "../Pages/PrivatePage";
import AllGardeners from "../Pages/AllGardeners";
import MyTips from "../Pages/MyTips";
import ShareTips from "../Pages/ShareTips";
import ActiveGardeners from "../Pages/ActiveGardeners";
import AllTips from "../Pages/AllTips";
import TipsDetails from "../Pages/TipsDetails";

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
            { path: '/sharetips', element: <PrivatePage><ShareTips></ShareTips></PrivatePage> },
            { path: '/sharetips/:email', element: <PrivatePage><MyTips></MyTips></PrivatePage>, loader: ({ params }) => fetch(`http://localhost:3000/api/sharetips/${params.email}`) },
            { path: '/alltips', element: <AllTips></AllTips>, loader: () => fetch('http://localhost:3000/api/publictips') },
            { path: '/publictips/:id', element: <PrivatePage> <TipsDetails></TipsDetails></PrivatePage>, loader: ({ params }) => fetch(`http://localhost:3000/api/publictips/${params.id}`) },
            { path: '/updatetips', element: <PrivatePage><UpdateTips></UpdateTips></PrivatePage> },
            { path: '/allgardeners', element: <AllGardeners></AllGardeners> },
            { path: '/activegardeners', element: <ActiveGardeners></ActiveGardeners> },
            { path: '/updatetips/:id', element: <PrivatePage><UpdateTips></UpdateTips></PrivatePage>, loader: ({ params }) => fetch(`http://localhost:3000/api/updatetips/${params.id}`) },
     

        ]
    }
])

export default router;