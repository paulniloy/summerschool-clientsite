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
import Auth, { Authcontext } from "./com/Authprovider/Auth";
import Class from "./com/Classes/Class";
import Instructor from "./com/Instructors/Instructor";
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
import { useState } from "react";
import { useContext } from "react";
import Instructordash from "./com/Instructordash/Instructordash";
import Manageclass from "./com/Manageclasses/Manageclass";
import Addclasses from "./com/addclasses/Addclasses";
import Showclasses from "./com/showclasses/Showclasses";
import Update from "./com/updateclass/Update";
import Studentdash from "./com/studentdas/Studentdash";
import Myclasses from "./com/Myclasses/Myclasses";
import Myenrolled from "./com/myenrolled/Myenrolled";
import Payment from "./com/Payment/Payment"
import Private from "./com/Privateroute/Private";

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
        element: <Private><Class></Class></Private>
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
        path: '/admindash',
        element: <Manageuser></Manageuser>
      },
      {
        path: "/admindash/manage",
        element: <Tableusers></Tableusers>
      },
      {
        path: "/admindash/bye",
        element: <Manageclass></Manageclass>
      }
    ]
  },
  {
    path : "/instructordash",
    element : <Instructordash></Instructordash>,
    children : [
      {
        path: "/instructordash",
        element : <div className='flex justify-center items-center text-4xl italic font-bold'>Instructor's panel</div>
      },
      {
        path: "/instructordash/addclasses",
        element : <Addclasses></Addclasses>
      },
      {
        path : "/instructordash/showclasses",
        element : <Showclasses></Showclasses>
      }
    ]
  },
  {
    path : "/class/updateclass/:id",
    element : <Update></Update>,
    // loader : ({params})=> fetch(`http://localhost:3000/getitems/${params.id}`)
  },
  {
    path : "/studentdash",
    element : <Studentdash></Studentdash>,
    children : [
      {
        path : "/studentdash",
        element : <div className='flex justify-center items-center text-4xl italic font-bold'>Student's Panel</div>
      },
      {
        path : "/studentdash/myclasses",
        element : <Myclasses></Myclasses>
      },
      {
        path : "/studentdash/myenrolled",
        element : <Myenrolled></Myenrolled>
      },
      {
        path : "/studentdash/payment",
        element : <Payment></Payment>
      }
    ]
  },
  {
    path: "*",
    element: <Error></Error>
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