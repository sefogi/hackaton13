import { ProductProvider } from "../context/Product.Context"
import { ProductsFront }  from "../components/frontProducts"
import "./AvailableProducts.css"

export const AvailableProducts = () => {
    return (
        <div className="AvailableSection">
            <h1>Checkout our Amazing Products</h1>
            <ProductProvider>
                <ProductsFront />
            </ProductProvider>
        </div>
    )
}

export default AvailableProducts;
