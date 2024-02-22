import { Hero } from "../components/HeroImg/Hero"
import Navbar from "../components/Navbar/Navbar"
import React from "react";
import Top5products from "../components/addProductsForm/top5products/Top5products";
import Brands from "../components/brands/Brands.jsx";
import Footer from "../components/Footer/Footer.jsx";




export const Home = () => {
    return (
        <>
        <Navbar />
        <Hero/>
        <Top5products/>
        <Brands/>
        <Footer/>
        </>
        
    )
}

export default Home;
