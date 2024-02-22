//import Navbar from "./components/Navbar/Navbar";
//import ProductsFront from "./pages/frontProducts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsDashboard from "./pages/products";
import { ProductProvider } from "./context/productContext"
import { Home } from "./pages/Home";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <ProductProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/" element={<ProductsFront />} /> */}
            <Route path="/control-productos" element={<ProductsDashboard />} />
          </Routes>
        </ProductProvider>
      </BrowserRouter>
    </>
  );
}
