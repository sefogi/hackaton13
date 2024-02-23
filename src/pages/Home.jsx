import { Hero } from "../components/HeroImg/Hero"
import React from "react";
import Stack from 'react-bootstrap/Stack';

import Brands from "../components/brands/Brands.jsx";
import "./Home.css"
import GalleryTop from "../components/GalleryTop/GalleryTop.jsx";

export const Home = () => {
    return (
        
        <Stack gap={5} className='homeBody'>
        <Hero/>
       <GalleryTop/>
        <br></br>
        <br></br>
        <Brands/>
        </Stack>
    )
}

export default Home;
