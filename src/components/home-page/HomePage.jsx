import React, { useEffect } from 'react'
import { Offers } from '../offers/Offers'
import { About } from '../about/About'
import { Rooms } from '../rooms/Rooms'
import { Amenities } from '../amenities/Amenities'
import { Reviews } from '../reviews/Reviews'
import { WhyChooseUs } from '../why-choose-us/WhyChooseUs'
import { HeaderImg } from '../header-img/HeaderImg'

export const HomePage = () => {
    useEffect(()=>{
        window.scrollTo({top: 0, left: 0});
      }, []);
    
      return (
        <>
            <HeaderImg />
            <Offers />
            <About />
            <WhyChooseUs />
            <Rooms />
            <Amenities />
            <Reviews />
        </>
      )
}
