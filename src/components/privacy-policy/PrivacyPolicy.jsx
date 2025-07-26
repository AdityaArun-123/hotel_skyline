import React, { useEffect } from 'react';
import './privacy_policy.css';

export const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo({ left: 0, top: 0 });
    }, []);

    return (
        <div className="priv-pol-page-container">
            <div className="priv-pol-page">
                <div className="priv-pol-page-heading">Hotel Skyline <span>A Luxurious Stay in the Heart of the City</span></div>
                <div className="priv-pol-content">
                    <div className="priv-pol-heading">hotel skyline privacy policy</div>
                    <h2>1. Introduction</h2>
                    <p>Hotel Skyline values the privacy of our customers and is committed to protecting it. This privacy
                        policy outlines how we collect, use, and protect your personal information when you use our website
                        and services.
                        <span>Please Note :- </span>
                        <p>The privacy practices set forth in this privacy policy are for www.maidenshotel.com only. If you link
                            to other web sites, please review their respective privacy policies, which may be very different.
                        </p>
                    </p>

                    <h2>2. Collection of Information</h2>
                    <p>We may collect personal information such as your name, email address, phone number, and credit card
                        information when you make a reservation or book a room on our website. We may also collect
                        non-personal information such as your IP address, browser type, and operating system for analytical
                        purposes.</p>

                    <h2>3. Use of Information</h2>
                    <p>We may use your personal information to process your reservations, provide you with the requested
                        services, and communicate with you about your bookings. We may also use your information to
                        personalize your experience, improve our website and services, and send you promotional offers and
                        updates.</p>

                    <h2>4. Protection of Information</h2>
                    <p>We are committed to protecting your personal information and have implemented security measures to
                        prevent unauthorized access, use, or disclosure. However, no method of transmission over the
                        internet or electronic storage is 100% secure, and we cannot guarantee the absolute security of your
                        information.</p>

                    <h2>5. Sharing of Information</h2>
                    <p>We may share your personal information with third-party service providers who assist us in providing
                        our services, such as payment processors and marketing agencies. We may also disclose your
                        information if required by law or to protect our rights or the safety of others.</p>

                    <h2>6. Third-Party Links</h2>
                    <p>Our website may contain links to third-party websites. We are not responsible for the privacy
                        practices of these websites and encourage you to read their privacy policies.</p>

                    <h2>7. Changes to Privacy Policy</h2>
                    <p>We reserve the right to update or modify this privacy policy at any time. Any changes will be
                        reflected on this page, and we encourage you to review this policy periodically.</p>

                    <h2>8. Consent</h2>
                    <p>By using our website and services, you consent to the collection and use of your personal information
                        as outlined in this privacy policy.</p>

                    <h2>9. Contact Us</h2>
                    <p>If you have any questions or concerns about our privacy policy, please contact us at <a
                        href="https://x.com/?lang=en">info@hotelskyline.com.</a></p>
                </div>
            </div>
        </div>
    )
}
