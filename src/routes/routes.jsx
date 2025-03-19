import LayoutDefault from "../layout/LayoutDefault";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Detail from "../pages/Detail";
import Error404 from "../pages/Error404";
import Featured  from "../layout/template/Featured";

export const routes = [
    {
        path: "/",
        element: <LayoutDefault />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "/product",
                element: <Featured />,
            },
            {
                path: "/product/:id",
                element: <Detail />,
            },
            {
                path: "*",
                element: <Error404 />,
            },
        ],
    },
];
