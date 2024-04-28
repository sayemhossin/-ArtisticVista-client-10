import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home.jsx';
import Route from './Root/Route.jsx';
import Error from './Pages/Error.jsx';
import AllArtAndCraft from './Pages/AllArtAndCraft.jsx';
import AddCraftItem from './Pages/AddCraftItem.jsx';
import MyArtAndCraftList from './Pages/MyArtAndCraftList.jsx';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';
import AuthProvider from './Components/AuthProvider.jsx';
import CraftItem from './Components/CraftItem.jsx';
import CraftDetails from './Pages/CraftDetails.jsx';
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx';
import UpdateCraft from './Pages/UpdateCraft.jsx';
import ArtCraftMatch from './Components/ArtCraftMatch.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Route></Route>,
    errorElement:<Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/allart',
        element: <AllArtAndCraft></AllArtAndCraft>,
        loader:() => fetch('http://localhost:5000/crafts')
      },
      {
        path: '/addcraft',
        element: <PrivateRoute><AddCraftItem></AddCraftItem></PrivateRoute>
      },
      {
        path: '/myartlist',
        element: <PrivateRoute><MyArtAndCraftList></MyArtAndCraftList></PrivateRoute>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
     
     {
      path:'/craftdetails/:id',
      element: <PrivateRoute><CraftDetails></CraftDetails></PrivateRoute>,
      loader:({params}) =>fetch(`http://localhost:5000/crafts/${params.id}`)
     },
     {
      path:'/updatecraft/:id',
      element:<PrivateRoute><UpdateCraft></UpdateCraft>,</PrivateRoute>,
      loader:({params}) =>fetch(`http://localhost:5000/crafts/${params.id}`)

     },
     {
         path:'/artcraftmatch/:id',
         element:<ArtCraftMatch></ArtCraftMatch>,
         loader:({params}) =>fetch(`http://localhost:5000/artcraft/${params.id}`)

     }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <AuthProvider>
 <RouterProvider router={router} />
 </AuthProvider>
  </React.StrictMode>,
)
