import { ProductProvider } from "../context/Product.Context"
import ProductsDashboard  from "../components/products"
import "./ProviderDashboard"

export const ProviderDashboard = () => {
    return (
        <div className="dashboardBox">
            <ProductProvider>
                <ProductsDashboard />
            </ProductProvider>
        </div>
    )
}

export default ProviderDashboard;
