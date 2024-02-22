import { ProductProvider } from "../context/Product.Context"
import { ProductsFront }  from "../components/frontProducts"

export const AvailableProducts = () => {
    return (
        <>
            <ProductProvider>
                <ProductsFront />
            </ProductProvider>
        </>
    )
}

export default AvailableProducts;
