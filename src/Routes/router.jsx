import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../component/Login/Login";
import Registration from "../component/Registration/Registration";
import LearnMore from "../component/pages/LearnMore";
import PrivetRouter from "./privetRouter";


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
    },
    {
        path: "/profile",
        element: <h1>Profile Page</h1>,
    },
    {
        path: "/about",
        element: <h1>About Page</h1>,
    },
    {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/login",
                element: <Login></Login>,
            },
            {
                path: "/auth/registration",
                element: <Registration></Registration>,
            },
        ],
    },

    {
        path: "/LearnMore/:id",
        element: <PrivetRouter>
             <LearnMore></LearnMore>
              </PrivetRouter> ,
        loader: async({params})=>{
             const Response = await fetch(`/JsonFile.json`)
             const data = await Response.json()
      

             const singledata = data.find((d) => d.id === params.id || d.id === Number(params.id));
           

             return singledata

             
        }
    },
    
    
    

    
    {
        path: "*",
        element: (
            
                <h1 className="text-3xl font-bold">Error: Page Not Found</h1>
            
            
        ),
    },
]);

export default router;
