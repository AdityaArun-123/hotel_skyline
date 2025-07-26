import React, { useEffect } from 'react';
import './terms_and_condition.css';

export const TermsAndConditions = () => {
    useEffect(() => {
        window.scrollTo({ left: 0, top: 0 });
    }, []);

    return (
        <div className="terms-and-condition-page-container">
            <div className="terms-cond-page">
                <div className="terms-and-condition-heading">Hotel Skyline <span>A Luxurious Stay in the Heart of the City</span></div>
                <div className="terms-cond-content">
                    <div className="terms-cond-heading">hotel skyline terms & conditions</div>

                    <h2>1. General Information</h2>
                    <ul>
                        <li>The terms and conditions set out below (the “Terms”) apply to your use of the site and any
                            services provided by Hotel Skyline.</li>
                        <li>These Terms also contain information about how we use cookies and how we collect and process
                            your personal data. Please see our Privacy Policy for further details.</li>
                        <li>Please read these Terms carefully before accessing, using or obtaining any materials,
                            information, products or services. By accessing, the Hotel Skyline website or by completing a
                            reservation you agree to be bound by these Terms. If you do not accept all of these Terms, then
                            you are not permitted to use this site or make a reservation.</li>
                        <li>Hotel Skyline may modify these Terms at any time at its sole discretion. If you do not agree to
                            any modification of these Terms, you must immediately stop using this site.</li>
                        <li>These Terms are effective for reservations made on or after 20th August 2024.</li>
                    </ul>
                    <h2>2. Information on our website</h2>
                    <ul>
                        <li>Hotel Skyline uses reasonable care in compiling the information appearing on this site. However,
                            Hotel Skyline cannot guarantee that the information is accurate or up to date, and does not
                            accept any liability for any errors or omissions.</li>
                        <li>The information on this site is not intended to be comprehensive and is not promised or
                            guaranteed to be correct, current or complete and may be changed at any time without prior
                            notice. In particular, Hotel Skyline makes no representations or warranties about the accuracy,
                            completeness, or suitability for any purpose of the information and related graphics published
                            on this site.</li>
                        <li>Hotel Skyline is not responsible for the content of any third-party websites linked to or from
                            the site. Hotel Skyline does not endorse the information or materials appearing on any
                            third-party website and is not responsible for the content of any third-party website that links
                            to or from this site.</li>
                    </ul>
                    <h2>3. Reservations</h2>
                    <ul>
                        <li>To make a reservation you must be able to enter into a legally binding contract and be over 18
                            years of age. You may make a reservation by completing the online reservation form on the site.
                        </li>
                        <li>The rates listed on the site are per room per night, unless otherwise specified, and include VAT
                            and service charges.</li>
                        <li>Rates are subject to availability and Hotel Skyline reserves the right to refuse any booking for
                            good reason.</li>
                        <li>The description of the room type is not exhaustive and only reflects the general amenities of
                            the room at the time the description was published on the site.</li>
                        <li>If you require further information about the hotel or the room type before making a reservation,
                            please contact the Hotel Skyline reservations team on +44 20 8709 4400.</li>
                    </ul>
                    <h2>4. Payment</h2>
                    <ul>
                        <li>Hotel Skyline accepts most major credit and debit cards.</li>
                        <li>Payment is due upon arrival unless otherwise stated at the time of booking.</li>
                        <li>Please note that we do not accept cash as a method of payment for accommodation or
                            pre-authorisation on arrival.</li>
                        <li>Pre-authorisation of a credit or debit card may be taken on arrival to cover any incidentals
                            that you may incur during your stay. Any charges will be billed to your room and must be settled
                            prior to departure.</li>
                        <li>Please note that a deposit is required on arrival to cover any incidental extras that you may
                            incur during your stay. If you do not have a credit card, a cash deposit will be required.</li>
                        <li>In the event of a payment not being authorised by the card issuer, Hotel Skyline reserves the
                            right to cancel the reservation.</li>
                        <li>If you have booked a non-refundable rate, please note that the card used must be presented on
                            arrival.</li>
                    </ul>
                    <h2>5. Cancellation Policy</h2>
                    <ul>
                        <li>Reservations must be cancelled before 2pm, 24 hours prior to arrival to avoid a charge of 1
                            night stay per room booked.</li>
                        <li>If the reservation has been made on a non-refundable rate, the reservation cannot be cancelled
                            or modified and the full amount of the reservation will be charged.</li>
                        <li>If you have booked a non-refundable rate, you will be required to present the card used to make
                            the reservation on arrival.</li>
                    </ul>
                    <h2>6. Check-In/Check-Out</h2>
                    <ul>
                        <li>Check-in is from 2pm.</li>
                        <li>Check-out is by 11am.</li>
                        <li>If you require a later check-out, please contact the Hotel Skyline team on +44 20 8709 4400.
                            Late check-out is subject to availability and may incur additional charges.</li>
                    </ul>
                    <h2>7. Liability</h2>
                    <ul>
                        <li>Hotel Skyline will not be liable for any loss, damage, costs or expenses, however arising,
                            whether in contract or tort or otherwise, which you may incur as a result of your use of the
                            site or your reliance upon any information contained on it.</li>
                        <li>Nothing in these Terms shall be construed as limiting or excluding liability for death or
                            personal injury caused by negligence or for any other liability which cannot be excluded by law.
                        </li>
                    </ul>
                    <h2>8. Data Protection</h2>
                    <ul>
                        <li>Hotel Skyline is committed to the protection of your personal data and will process your
                            personal data in accordance with the Hotel Skyline Privacy Policy.</li>
                        <li>By using this site, you consent to the processing of your personal data by Hotel Skyline.</li>
                    </ul>
                    <h2>9. Cookies</h2>
                    <ul>
                        <li>Hotel Skyline uses cookies to track your use of the site and to compile reports on website
                            activity.</li>
                        <li>For more information on the cookies used by this site, please see our Cookie Policy.</li>
                    </ul>
                    <h2>10. Intellectual Property</h2>
                    <ul>
                        <li>All intellectual property rights in any material (including text, photographs and other images
                            and sound, downloads, software, trade marks and logos) contained in this site is either owned by
                            Hotel Skyline or has been licensed to Hotel Skyline by the rights owner(s) so that Hotel Skyline
                            can use this material as part of its web site.</li>
                        <li>You are only allowed to use this site and the material contained in the site as set out in these
                            Terms.</li>
                        <li>You are not allowed to remove any copyright, trade mark or other intellectual property notices
                            or watermark contained in the original material or from any material copied or printed from the
                            site.</li>
                    </ul>
                    <h2>11. General</h2>
                    <ul>
                        <li>If any provision of these Terms is found to be invalid or unenforceable by a court, it will be
                            deleted from the rest of these Terms, which shall remain unaffected.</li>
                        <li>No delay or failure by Hotel Skyline to exercise any powers, rights or remedies under these
                            Terms will operate as a waiver of them nor will any single or partial exercise of any such
                            powers, rights or remedies preclude any other or further exercise of them.</li>
                        <li>These Terms are governed by the laws of England and Wales and any dispute in connection with
                            them shall be subject to the exclusive jurisdiction of the English courts.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
