import React, { useEffect, useState } from 'react';
import './spa_and_salon.css';
import { Spa } from './Spa';
import { Salon } from './Salon';
import Aos from 'aos';
import '../../../node_modules/aos/dist/aos.css';
import { EnquireModal } from '../enquire-modal/EnquireModal';

export const SpaAndSalon = () => {
    const[enquireModal, setEnquireModal] = useState(false);
    const [state, setState] = useState({
      category : "",
      name : ""
    });
  
    useEffect(() => {
      window.scrollTo({ left: 0, top: 0 })
      Aos.init({ duration: 1000, delay: 200 });
    }, []);
  
    const enquireNow = (serviceCategory, serviceName) => {
      setState({ ...state, category: serviceCategory, name : serviceName });
      setEnquireModal(true);
    }
  
    return (
      <>
      {
        enquireModal && <EnquireModal onclose={()=>{setEnquireModal(false)}} serviceCategory={state.category} serviceName={state.name}/>
      }
        <div className="spa-and-salon-container">
          <Spa enquireNow={enquireNow} />
          <Salon enquireNow={enquireNow} />
        </div>
      </>
    )
}
