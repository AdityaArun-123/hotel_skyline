import React, { useEffect, useState } from 'react';
import './gallery.css';
import { MainHeading } from '../main_heading/MainHeading';
import galleryData from '../../DataBase/galleryData.json';
import Aos from 'aos';
import '../../../node_modules/aos/dist/aos.css';
import { GalleryLightBox } from '../gallery-light-box/GalleryLightBox';

export const Gallery = () => {
  const [galleryLightBox, setGalleryLightBox] = useState(false);
  const [lightBoxId, setLightBoxId] = useState(0);
  useEffect(()=>{
    window.scrollTo({top: 0, left: 0});
    Aos.init({duration : 1000});
  }, []);

  return (
    <>
    {
      galleryLightBox && <GalleryLightBox id={lightBoxId - 1} onclose={()=>{setGalleryLightBox(false)}}/>
    }
      <div className="gallery-container">
        <div className="photo-gallery">
          <MainHeading heading='photo gallery' />
          <div className="gallery-content">
            <div className="triangle-part"></div>
            {
              galleryData.map((item, index) =>
                <div className="gallery-card" key={index} onClick={()=>{setGalleryLightBox(true); setLightBoxId(item.id)}} data-aos="zoom-in-up" data-aos-delay="100">
                  <div className="gallery-card-head">{item.gallery_card_name}</div>
                  <div className="gallery-card-img">
                    <img src={item.gallery_card_images.at(0).img_src} alt="" />
                  </div>
                </div>
              )
            }
          </div>
        </div>
        <div className="video-gallery">
          <MainHeading heading='video gallery' />
          <div className="gallery-content">
            <div className="triangle-part"></div>
            <iframe src="https://www.youtube.com/embed/x6UX2r0hftA&t=17s" frameborder="0" title='hotel video'></iframe>
          </div>
        </div>
      </div>
    </>
  )
}
