import { createBrowserRouter } from "react-router";
import axiosInstance from "../hooks/axiosInstance"; // ✅ You still use this for other loaders if needed
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
        index: true,
        element: <Home />, 
      },
      { path: '/login', element: <Login /> },
      { path: '/register', element: <Register /> },
      { path: '/sharetips', element: <PrivatePage><ShareTips /></PrivatePage> },
      { path: '/sharetips/:email', element: <PrivatePage><MyTips /></PrivatePage> },
      { path: '/alltips', element: <AllTips /> },
      { path: '/publictips/:id', element: <PrivatePage><TipsDetails /></PrivatePage> },
      { path: '/updatetips/:id', element: <PrivatePage><UpdateTips /></PrivatePage> },
      { path: '/allgardeners', element: <AllGardeners /> },
      { path: '/activegardeners', element: <ActiveGardeners /> },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
  {
    path: 'dashboard',
    Component: DashLayout,
    children: [
      {
        index: true,
        element: <PrivatePage><DashBoard /></PrivatePage>,
        loader: async () => {
          const gardenersRes = await axiosInstance.get('/api/gardeners');
          const activeGardenersRes = await axiosInstance.get('/api/active-gardener');
          const tipsRes = await axiosInstance.get('/api/top-trending');
          const allTipsRes = await axiosInstance.get('/api/alltips');

          return {
            gardeners: gardenersRes.data,
            activegardeners: activeGardenersRes.data,
            trendingtips: tipsRes.data,
            alltips: allTipsRes.data,
          };
        },
      },
      { path: '/dashboard/alltips', element: <AllTips /> },
      { path: '/dashboard/sharetips', element: <PrivatePage><ShareTips /></PrivatePage> },
      { path: '/dashboard/browsetips', element: <PrivatePage><BrowseTips /></PrivatePage> },
      { path: '/dashboard/allgardeners', element: <AllGardeners /> },
      {
        path: '/dashboard/mytips/:email',
        element: <PrivatePage><MyTips /></PrivatePage>,
      },
    ],
  },
]);

export default router;
