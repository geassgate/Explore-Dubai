import React from 'react';
import NavBar from '../components/Navbar/Navbar';
import Hero from '../components/hero/hero';
import Appaly from '../components/applay/applay';
import Explore from '../components/explore/explore';
import Tours from '../components/tours/tours';
import Rating from '../components/rateing/rating';
import Relocation from '../components/relocations/Relocations';
import RentCar from '../components/reantCar/rentCar';
import Achievements from '../components/achievements/achievements';
import ContactUs from '../components/contactus/ContactUs';
import Footer from '../components/footer/footer';


const Home = () => {
    return (
        <>
            <NavBar/>
            <Hero />
            <Appaly />
            <Explore/>
            <Tours />
            <Rating />
            <Relocation />
            <RentCar />
            <Achievements />
            <ContactUs />
            <Footer />
        </>

    )
}

export default Home;
