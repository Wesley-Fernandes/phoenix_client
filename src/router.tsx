import { createBrowserRouter } from "react-router-dom";

//Paginas
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Auth/Dashboard";
import Profile from "./pages/Auth/Profile";
import Chats from "./pages/Auth/Chats";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/auth",
    element: <Auth />,
    children: [
      {
        path: "/auth/dashboard",
        element: <Dashboard/>
      },{
        path: "/auth/profile",
        element: <Profile/>
      },{
        path: "/auth/chats",
        element: <Chats/>
      }
    ]
  }
]);


export { router };
