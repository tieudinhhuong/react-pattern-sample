import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RenderPropsDemo from "./sample/render-props";
import ChildrenPassThrough from "./sample/children-pass-through";

const router = createBrowserRouter([
    {
        path: "/render-props",
        element: <RenderPropsDemo/>,
    },
    {
        path: "/children-pass-through",
        element: <ChildrenPassThrough/>,
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
