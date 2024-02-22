import { ProductProvider } from "../context/Product.Context"
import ProductsDashboard  from "../components/products"

export const ProviderDashboard = () => {
    return (
        <>
            <ProductProvider>
                <ProductsDashboard />
            </ProductProvider>
        </>
    )
}

export default ProviderDashboard;
