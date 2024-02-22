import { createBrowserRouter } from "react-router-dom";
// import Dashboard from "../pages/Dashboard";
import { Layout } from "../components/Layout"
import ProviderDashboard from "../pages/ProviderDashboard";
import { AvailableProducts } from "../pages/AvailableProducts"

// import ProductInfo from "../components/ProductInfo";
// import EditProduct from "../pages/EditProduct";

// import { productHandler } from "../handlers/productHandler";
// import CreateProduct from "../pages/CreateProduct";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
                        {
                path: "/",
                element: <AvailableProducts />,
                // loader: fetchProducts,
            },
            {
                path: "/ProviderDashboard",
                element: <ProviderDashboard />,
                // loader: fetchProducts,
            },
            // {
            //     path: "/products",
            //     element: <Dashboard />,
            //     // loader: fetchProducts,
            // },
            // {
            //     path: "products/:id",
            //     element: <ProductInfo />,
            //     // loader: fetchProduct,
            // },
            // {
            //     path: "newProduct",
            //     element: <CreateProduct />,
            // },
            // {
            //     path: "editProduct/:id",
            //     element: <EditProduct />,
            //     // loader: fetchProduct
            // },

        ],
    },
]);

// async function fetchProducts() {
//     const products = await productHandler.loadProducts();
//     return { products };
// }

// async function fetchProduct({ params }) {
//     const product = await productHandler.loadProduct(params.id);
//     return { product };
// }