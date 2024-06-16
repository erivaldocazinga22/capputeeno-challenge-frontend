import { createBrowserRouter } from "react-router-dom";

import RootLayout from "./app/pages/Layout";
import Catalog from "./app/pages/Catalog";
import Product from "./app/pages/Product";
import Cart from "./app/pages/Cart";

export const Routers = createBrowserRouter([
    {
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <Catalog />
            },
            {
                path: "/product/:id",
                element: <Product />
            },
            {
                path: "/cart",
                element: <Cart />
            }
        ]
    }
]);