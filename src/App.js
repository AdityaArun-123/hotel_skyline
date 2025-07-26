import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Contact } from './components/contact/Contact';
import { Gallery } from './components/gallery/Gallery';
import { GoToTopBtn } from './components/go-to-top-btn/GoToTopBtn';
import { HomePage } from './components/home-page/HomePage';
import { RoomsLandingPage } from './components/rooms-landing-page/RoomsLandingPage';
import { OffersLandingPage } from './components/offers-landing-page/OffersLandingPage';
import { WhyChooseUsLandingPage } from './components/why-choose-us-landing-page/WhyChooseUsLandingPage';
import { ReviewsLandingPage } from './components/reviews-landing-page/ReviewsLandingPage';
import { SpaAndSalon } from './components/spa-and-salon/SpaAndSalon';
import { PrivacyPolicy } from './components/privacy-policy/PrivacyPolicy';
import { TermsAndConditions } from './components/terms-and-condition/TermsAndConditions';
import { AboutLandingPage } from './components/about-landing-page/AboutLandingPage';
import { BookRoom } from './components/book_room/BookRoom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/roons-page' element={<RoomsLandingPage />} />
        <Route path='/contact-us' element={<Contact />} />
        <Route path='/offers-page' element={<OffersLandingPage />} />
        <Route path='/why-choose-us-page' element={<WhyChooseUsLandingPage />} />
        <Route path='/reviews-page' element={<ReviewsLandingPage />} />
        <Route path='/spa-and-salon-page' element={<SpaAndSalon />} />
        <Route path='/privacy-policy-page' element={<PrivacyPolicy />} />
        <Route path='/terms-and-condition-page' element={<TermsAndConditions />} />
        <Route path='/gallery-page' element={<Gallery />} />
        <Route path='/about-page' element={<AboutLandingPage />} />
        <Route path='/book-room-page' element={<BookRoom />} />
      </Routes>
      <GoToTopBtn />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
