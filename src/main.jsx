import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Homepage from "./com/Homepage/Homepage";
import Login from "./com/Login/Login";
import Home from "./com/Home/Home";
import Register from "./com/Register/Register";
import Auth from "./com/Authprovider/Auth";
import About from "./com/About/About";
import Private from "./com/Privateroute/Private";
import Class from "./com/Classes/Class";
import Instructor from "./com/Instructors/Instructor";
import Dash from "./com/Dashboard/AdminDash";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import Error from "./com/Error/Error";
import AdminDash from "./com/Dashboard/AdminDash";
import Manageuser from "./com/instructoruser/Manageuser";
import Tableusers from "./com/Tableusers/Tableusers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage></Homepage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      }
      ,
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/classes",
        element: <Class></Class>
      },
      {
        path: "/instructors",
        element: <Instructor></Instructor>
      }
    ]
  },
  {
    path: "/admindash",
    element: <AdminDash></AdminDash>,
    children: [
      {
        path : '/admindash',
        element : <Manageuser></Manageuser>
       },
      {
        path : "/admindash/manage",
        element : <Tableusers></Tableusers>
      },
      {
        path : "/admindash/bye",
        element : <div>hello therer</div>
      }
    ]
  },
  {
    path : "*",
    element : <Error></Error>
  }
]);

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Auth>
  </React.StrictMode>
);