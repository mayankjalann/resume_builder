import React from "react";
import Banner from "../components/home/Banner.jsx";
import Hero from "../components/home/Hero.jsx";
import { useNavigate } from "react-router-dom";
import Features from "../components/home/Features.jsx";
import Testimonials from "../components/home/Testimonials.jsx";
import CTA from "../components/home/CTA.jsx";
import Footer from "../components/home/Footer.jsx";

function Home(){
    return(
        <>
        <Banner/>
        <Hero/>
        <Features/>
        <Testimonials/>
        <CTA/>
        <Footer/>
        </>
    )
}

export default Home;