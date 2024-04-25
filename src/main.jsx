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
        element: <AllArtAndCraft></AllArtAndCraft>
      },
      {
        path: '/addcraft',
        element: <AddCraftItem></AddCraftItem>
      },
      {
        path: '/myartlist',
        element: <MyArtAndCraftList></MyArtAndCraftList>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
