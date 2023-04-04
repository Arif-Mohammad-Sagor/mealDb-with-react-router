import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from './App'
import Contact from './components/Pages/Contact';
import About from './components/Pages/About';
import Root from './components/Pages/Root';
import MealDetails from './components/Pages/MealDetails';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/:keyWord",
        element: <Root />,
        loader: ({params}) => {
          return fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?a=${params.keyWord}`
          );
        },
      },
      {
        path: "/meal/:mealId",
        element: <MealDetails></MealDetails>,
        loader: ({ params }) =>
          fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.mealId}`),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
