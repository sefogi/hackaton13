import { Hero } from "../components/HeroImg/Hero"
import React from "react";
import Stack from 'react-bootstrap/Stack';
import Top5products from "../components/addProductsForm/top5products/Top5products";
import Brands from "../components/brands/Brands.jsx";
import "./Home.css"

export const Home = () => {
    return (
        
        <Stack gap={5} className='homeBody'>
        <Hero/>
        <Top5products/>
        <br></br>
        <br></br>
        <Brands/>
        </Stack>
    )
}

export default Home;
