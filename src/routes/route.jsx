import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../components/Home/Home";
import Register from "../components/Register/Register";
import Login from "../components/Login/Login";
import BrowseTips from "../Pages/Categories";
import UpdateTips from "../Pages/UpdateTips";
import PrivatePage from "../Pages/PrivatePage";
import AllGardeners from "../Pages/AllGardeners";
import MyTips from "../Pages/MyTips";
import ShareTips from "../Pages/ShareTips";
import ActiveGardeners from "../Pages/ActiveGardeners";
import AllTips from "../Pages/AllTips";
import TipsDetails from "../Pages/TipsDetails";
import ErrorPage from "../Pages/ErrorPage";
import DashBoard from "../Pages/DashBoard/DashBoard";
import DashLayout from "../Layout/DashLayout";



const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true, element: <Home></Home>, loader: async () => {
                    const gardenersRes = await fetch('https://garden-guidance-server.vercel.app/api/gardeners');
                    const tipsRes = await fetch('https://garden-guidance-server.vercel.app/api/top-trending');


                    return {
                        gardeners: await gardenersRes.json(),
                        trendingtips: await tipsRes.json(),

                    };
                }
            },
            { path: '/login', element: <Login></Login> },
            { path: '/register', element: <Register></Register> },
            { path: '/sharetips', element: <PrivatePage><ShareTips></ShareTips></PrivatePage> },
            { path: '/sharetips/:email', element: <PrivatePage><MyTips></MyTips></PrivatePage>, loader: ({ params }) => fetch(`https://garden-guidance-server.vercel.app/api/sharetips/${params.email}`) },
            { path: '/alltips', element: <AllTips></AllTips>, loader: () => fetch('https://garden-guidance-server.vercel.app/api/alltips') },
            { path: '/publictips/:id', element: <PrivatePage> <TipsDetails></TipsDetails></PrivatePage>, loader: ({ params }) => fetch(`https://garden-guidance-server.vercel.app/api/publictips/${params.id}`) },
            { path: '/updatetips', element: <PrivatePage><UpdateTips></UpdateTips></PrivatePage> },
            { path: '/allgardeners', element: <AllGardeners></AllGardeners>, loader: () => fetch('https://garden-guidance-server.vercel.app/api/allgardeners') },
            { path: '/activegardeners', element: <ActiveGardeners></ActiveGardeners> },
            { path: '/updatetips/:id', element: <PrivatePage><UpdateTips></UpdateTips></PrivatePage>, loader: ({ params }) => fetch(`https://garden-guidance-server.vercel.app/api/updatetips/${params.id}`) },
            {
                path: "*",
                element: <ErrorPage />,
            }

        ]
    },
    {
        path: 'dashboard',
        Component: DashLayout,

        children: [
            {
                index: true,
                element: <PrivatePage><DashBoard /></PrivatePage>,
                loader: async () => {
                    const gardenersRes = await fetch('https://garden-guidance-server.vercel.app/api/gardeners');
                    const activeGardenersRes = await fetch('https://garden-guidance-server.vercel.app/api/active-gardener')
                    const tipsRes = await fetch('https://garden-guidance-server.vercel.app/api/top-trending');
                    const allTipsRes = await fetch('https://garden-guidance-server.vercel.app/api/alltips');


                    return {
                        gardeners: await gardenersRes.json(),
                        activegardeners: await activeGardenersRes.json(),
                        trendingtips: await tipsRes.json(),
                        alltips: await allTipsRes.json(),
                    };
                },
            },
            { path: '/dashboard/alltips', element: <AllTips></AllTips>, loader: () => fetch('https://garden-guidance-server.vercel.app/api/alltips') },
            { path: '/dashboard/sharetips', element: <PrivatePage><ShareTips /></PrivatePage> },
            { path: '/dashboard/browsetips', element: <PrivatePage><BrowseTips /></PrivatePage> },
            { path: '/dashboard/allgardeners', element: <AllGardeners></AllGardeners>, loader: () => fetch('https://garden-guidance-server.vercel.app/api/allgardeners') },
            {
                path: '/dashboard/mytips/:email',
                element: <PrivatePage><MyTips /></PrivatePage>,
                loader: ({ params }) => fetch(`https://garden-guidance-server.vercel.app/api/sharetips/${params.email}`)
            }
        ]
    }

])

export default router;