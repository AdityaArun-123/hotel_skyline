import React, { useEffect, useRef, useState } from 'react';
import './book_room_form.css';
import { Calender } from '../calender/Calender';
import countriesStatesApiData from '../../DataBase/countriesStatesApiData.json';
import { FinalPriceDetailsModal } from '../final_price_details_modal/FinalPriceDetailsModal';
import { toast } from 'react-toastify';

export const BookRoomForm = () => {
    const [openCheckInCalender, setOpenCheckInCalender] = useState(false);
    const [openCheckOutCalender, setOpenCheckOutCalender] = useState(false);
    const [priceDetailsModal, setPriceDetailsModal] = useState(false);
    const [isActiveStateField, setIsActiveStateField] = useState(false);
    const [selectedCountryIndex, setSelectedCountryIndex] = useState(0);
    const [countryStatesData, setCountryStatesData] = useState([]);
    const [filteredCountryData, setFilteredCountryData] = useState([]);
    const [filteredStateData, setFilteredStateData] = useState([]);
    const [currentFocused, setCurrentFocused] = useState(0);
    const [userInputData, setUserInputData] = useState({
        first_name: "",
        last_name: "",
        email_id: "",
        mob_num: "",
        check_in: "",
        check_out: "",
        no_of_rooms: 0,
        no_of_days: 0,
        address: "",
        selectedCountry: "",
        selectedState: ""
    });
    const media = matchMedia("(max-width : 1100px)");

    // useState and useRef for room select box
    const [showRoomsDropDown, setShowRoomsDropDown] = useState(false);
    const [roomDropdownTop, setRoomDropdownTop] = useState(0);
    const roomButtonRef = useRef();  //use for dynamic positionf of room drop down. This is used to calculate the current available space in bottom of room select box.
    const roomContentRef = useRef(); //use for dynamic positionf of room drop down. This is used to calculate dynamic height of the room drop down.

    // useState and useRef for country select box
    const [showCountryDropDown, setShowCountryDropDown] = useState(false);
    const countryButtonRef = useRef(); //use for dynamic positionf of country drop down. This is used to calculate the current available space in bottom of country select box.

    // useState and useRef for state select box
    const [showStateDropDown, setShowStateDropDown] = useState(false);
    const stateButtonRef = useRef(); //use for dynamic positionf of state drop down. This is used to calculate the current available space in bottom of state select box.

    useEffect(() => {
        //removing all the select boxes when all 4 drop downs are closed
        if (showCountryDropDown === false && showStateDropDown === false && showRoomsDropDown === false) {
            removeAllPointerEvents();
        }
        if (showRoomsDropDown) {
            addSpecialInputFieldFloatingLabel("room-input-field", "room-label");
            toggleRoomDropdown();
        }
        if (showCountryDropDown) {
            addSpecialInputFieldFloatingLabel("country-input-field", "country-label");
            toggleCountryDropdown();
        }
        if (showStateDropDown) {
            addSpecialInputFieldFloatingLabel("state-input-field", "state-label");
            toggleStateDropdown();
        }
        if (showRoomsDropDown === false) {
            removeSpecialInputFieldFloatingLabel("room-input-field", "room-label");
        }
        if (showCountryDropDown === false) {
            removeSpecialInputFieldFloatingLabel("country-input-field", "country-label");
        }
        if (showStateDropDown === false) {
            removeSpecialInputFieldFloatingLabel("state-input-field", "state-label");
        }
    }, [showRoomsDropDown, showCountryDropDown, showStateDropDown]);

    useEffect(() => {
        if (openCheckInCalender) {
            addSpecialInputFieldFloatingLabel("check-in-input-field", "check-in-date-label");
        }
        if (openCheckOutCalender) {
            addSpecialInputFieldFloatingLabel("check-out-input-field", "check-out-date-label");
        }
        if (openCheckInCalender === false) {
            removeSpecialInputFieldFloatingLabel("check-in-input-field", "check-in-date-label");
        }
        if (openCheckOutCalender === false) {
            removeSpecialInputFieldFloatingLabel("check-out-input-field", "check-out-date-label");
        }
    }, [openCheckInCalender, openCheckOutCalender]);

    useEffect(() => {
        setCountryStatesData(countriesStatesApiData);
        setFilteredCountryData(countriesStatesApiData);
    }, []);

    const addSpecialInputFieldFloatingLabel = (inputId, labelId) => {
        document.getElementById(inputId).style.border = "2px solid var(--text-primary-color)";
        document.getElementById(labelId).style.top = "-0.5rem";
        document.getElementById(labelId).style.left = "1rem";
        document.getElementById(labelId).style.fontSize = "0.9rem";
        document.getElementById(labelId).style.backgroundColor = "var(--body-bg-color)";
    }

    const removeSpecialInputFieldFloatingLabel = (inputId, labelId) => {
        document.getElementById(inputId).style.border = "2px solid var(--banner-bg-color)";
        let roomValue = document.getElementById(inputId).value;
        if (roomValue === "") {
            document.getElementById(labelId).style.top = "0.8rem";
            document.getElementById(labelId).style.left = "1.3rem";
            document.getElementById(labelId).style.fontSize = "1rem";
            document.getElementById(labelId).style.backgroundColor = "transparent";
        }
    }

    const toggleRoomDropdown = () => {
        //remove pointer events of other select boxes when clicked on room select box
        document.getElementById("country-field").style.pointerEvents = "none";
        document.getElementById("state-field").style.pointerEvents = "none";
        //dynamic positiong of room drop down according to the apace available in bottom of select box
        const roomSpaceRemaining = window.innerHeight - roomButtonRef.current.getBoundingClientRect().bottom;
        const roomContentHeight = roomContentRef.current.clientHeight;
        const roomTopPosition = (roomSpaceRemaining > roomContentHeight) ? null : -roomContentHeight - 10;
        setRoomDropdownTop(roomTopPosition);
    }

    const toggleCountryDropdown = () => {
        //remove pointer events of other select boxes when clicked on country select box
        document.getElementById("room-field").style.pointerEvents = "none";
        document.getElementById("state-field").style.pointerEvents = "none";
    }

    const toggleStateDropdown = () => {
        //remove pointer events of other select boxes when clicked on state select box
        document.getElementById("country-field").style.pointerEvents = "none";
        document.getElementById("room-field").style.pointerEvents = "none";
    }

    const noOfPersonDropDownHandler = (value) => {
        document.getElementById("room-input-field").value = document.getElementsByClassName("rooms-filter")[value].innerHTML;
        setShowRoomsDropDown(!showRoomsDropDown);
    }

    const countryDropDownHandler = (selectedName, index) => {

        document.getElementById("country-input-field").value = selectedName;
        document.getElementById("state-input-field").value = "";
        removeSpecialInputFieldFloatingLabel("state-input-field", "state-label");

        if (filteredCountryData.at(index).states.length > 0) {
            let temparry = filteredCountryData.at(index).states;
            setFilteredStateData(temparry);
        }
        else {
            setFilteredStateData([]);
        }
        setShowCountryDropDown(!showCountryDropDown);
        setIsActiveStateField(true);
        setSelectedCountryIndex(index);
        setCurrentFocused(0);
    }

    const stateDropDownHandler = (selectedName) => {
        document.getElementById("state-input-field").value = selectedName;
        setShowStateDropDown(!showStateDropDown);
        setCurrentFocused(0);
    }

    const removeAllPointerEvents = () => {
        if (document.getElementById("state-field").classList.contains("select-state")) { // if state select box is not disabled then remove all the pointer events from all select boxes
            document.getElementById("state-field").style.pointerEvents = "auto";
            document.getElementById("country-field").style.pointerEvents = "auto";
            document.getElementById("room-field").style.pointerEvents = "auto";
        }
        else { // state select boxes are disabled then only remove the pointer events of country and room select box
            document.getElementById("country-field").style.pointerEvents = "auto";
            document.getElementById("room-field").style.pointerEvents = "auto";
        }
    }

    const selectedCheckInOutDate = (date, category) => {
        if (category === "check_in") {
            document.getElementById("check-in-input-field").value = date;
        } else if (category === "check_out") {
            document.getElementById("check-out-input-field").value = date;
        }
        setUserInputData({ ...userInputData, [category]: date });
    }

    const RoomsCountryStateHandler = (name, value) => {
        setUserInputData({ ...userInputData, [name]: value });
    }

    const inputAndTextFieldHandler = (event) => {
        const { name, value } = event.target;
        setUserInputData({ ...userInputData, [name]: value });
    }

    const sendData = (e) => {
        e.preventDefault();
        let x = requiredInput();
        if (x !== false) {
            let Difference_In_Time = new Date(userInputData.check_out).getTime() - new Date(userInputData.check_in).getTime();
            let total_number_of_days = Math.round(Difference_In_Time / (1000 * 3600 * 24)) + 1;
            setUserInputData({ ...userInputData, "no_of_days": total_number_of_days });
            setPriceDetailsModal(true);
        }
    }

    const handleCountryInput = (e) => {
        let value = e.target.value;
        let filteredList = countryStatesData.filter((el) => {
            return el.name.toLowerCase().startsWith(value.toLowerCase());
        });
        if (filteredList.length === 0) {
            setFilteredCountryData([{ ...filteredList, name: "Not a Valid Country Name..." }]);
        } else {
            setFilteredCountryData(filteredList);
        }
        setCurrentFocused(0);
    }

    const handleStateInput = (e) => {
        let value = e.target.value;

        let filteredList = filteredCountryData.at(selectedCountryIndex).states.filter((el) => {
            return el.name.toLowerCase().startsWith(value.toLowerCase());
        });
        console.log(filteredList);

        if (filteredList.length === 0) {
            setFilteredStateData([{ ...filteredList, name: "Not a Valid State Name..." }]);
        } else {
            setFilteredStateData(filteredList);
        }
        setCurrentFocused(0);
    }

    const handelCountryKeyEvent = (e) => {
        let myElement, topPos;
        myElement = document.getElementsByClassName("country-filter")[currentFocused];
        if (e.key === "ArrowDown") {
            if (currentFocused < filteredCountryData.length - 1) {
                topPos = myElement.offsetTop;
                setCurrentFocused(currentFocused + 1);
                document.getElementById("country-drop-down").scrollTop = topPos;
            }
            else {
                setCurrentFocused(filteredCountryData.length - 1)
            }
        }
        else if (e.key === "ArrowUp") {
            if (currentFocused > 0) {
                topPos = myElement.offsetTop;
                setCurrentFocused(currentFocused - 1);
                document.getElementById("country-drop-down").scrollTop = topPos - myElement.clientHeight;
            }
            else {
                setCurrentFocused(0);
            }
        }
        else if (e.key === "Enter" && filteredCountryData[filteredCountryData.length - 1].name !== "Not a Valid Country Name...") {
            countryDropDownHandler(myElement.innerHTML, currentFocused);
            RoomsCountryStateHandler("selectedCountry", myElement.innerHTML);
            document.getElementById("country-drop-down").scrollTop = 0;
        }
    }

    const handelStateKeyEvent = (e) => {
        let myElement, topPos;
        myElement = document.getElementsByClassName("state-filter")[currentFocused];
        if (e.key === "ArrowDown") {
            if (currentFocused < filteredStateData.length - 1) {
                topPos = myElement.offsetTop;
                setCurrentFocused(currentFocused + 1);
                document.getElementById("state-drop-down").scrollTop = topPos;
            }
            else {
                setCurrentFocused(filteredStateData.length - 1)
            }
        }
        else if (e.key === "ArrowUp") {
            if (currentFocused > 0) {
                topPos = myElement.offsetTop;
                setCurrentFocused(currentFocused - 1);
                document.getElementById("state-drop-down").scrollTop = topPos - myElement.clientHeight;
            }
            else {
                setCurrentFocused(0);
            }
        }
        else if (e.key === "Enter" && filteredStateData[filteredStateData.length - 1].name !== "Not a Valid State Name...") {
            stateDropDownHandler(myElement.innerHTML);
            RoomsCountryStateHandler("selectedState", myElement.innerHTML);
            document.getElementById("state-drop-down").scrollTop = 0;
        }
    }

    const handelCountryClick = () => {
        const pos = countryButtonRef.current.getBoundingClientRect();
        if(media.matches === false){
            window.scrollBy({ left: 0, top: pos.top - 350, behavior: "smooth" });
        }
        setShowCountryDropDown(!showCountryDropDown);
    }

    const handelStateClick = () => {
        const pos = stateButtonRef.current.getBoundingClientRect();
        if(media.matches === false){
            window.scrollBy({ left: 0, top: pos.top - 350, behavior: "smooth" });
        }
        setShowStateDropDown(!showStateDropDown);
    }

    const requiredInput = () => {
        let firstName = document.forms["myForm"]["first_name"].value;
        let lastName = document.forms["myForm"]["last_name"].value;
        let emailId = document.forms["myForm"]["email_id"].value;
        let mobileNumber = document.forms["myForm"]["mob_num"].value;
        let checkIn = document.forms["myForm"]["check_in"].value;
        let checkOut = document.forms["myForm"]["check_out"].value;
        let NumberOfRooms = document.forms["myForm"]["no_of_rooms"].value;
        let Address = document.forms["myForm"]["address"].value;
        let CountryName = document.forms["myForm"]["country_input"].value;
        let StateName = document.forms["myForm"]["state_input"].value;
        if (firstName === "") {
            toast.error("First Name must be Filled out");
            return false;
        }
        else if (lastName === "") {
            toast.error("Last Name must be Filled out");
            return false;
        }
        else if (emailId === "") {
            toast.error("Email Id must be Filled out");
            return false;
        }
        else if (mobileNumber === "") {
            toast.error("Mobile Number must be Filled out");
            return false;
        }
        else if (checkIn === "") {
            toast.error("Check In Date must be Filled out");
            return false;
        }
        else if (checkOut === "") {
            toast.error("Check Out Date must be Filled out");
            return false;
        }
        else if (NumberOfRooms === "") {
            toast.error("Number Of Rooms must be Filled out");
            return false;
        }
        else if (Address === "") {
            toast.error("Address must be Filled out");
            return false;
        }
        else if (CountryName === "") {
            toast.error("Country Name must be Filled out");
            return false;
        }
        else if (StateName === "") {
            toast.error("State Name must be Filled out");
            return false;
        }
    }

    return (
        <>
            {
                openCheckInCalender && <Calender onclose={() => { setOpenCheckInCalender(!openCheckInCalender) }} selectedCheckInOutDate={selectedCheckInOutDate} categ={"check_in"} />
            }
            {
                openCheckOutCalender && <Calender onclose={() => { setOpenCheckOutCalender(!openCheckOutCalender) }} selectedCheckInOutDate={selectedCheckInOutDate} categ={"check_out"} />
            }
            {
                priceDetailsModal && <FinalPriceDetailsModal onclose={() => { setPriceDetailsModal(false) }} noOfDays={userInputData.no_of_days} noOfRooms={userInputData.no_of_rooms} />
            }
            <div className="book-room-form" onClick={(e) => { if (e.target.className === "book-room-form") { setShowRoomsDropDown(false); setShowCountryDropDown(false); setShowStateDropDown(false) } }}>
                <form action="#" method='post' onSubmit={sendData} id='myForm' autoComplete='off' onKeyDown={(event) => {
                    if (event.key === "Enter" && (showCountryDropDown === true || showStateDropDown === true)) {
                        event.preventDefault();
                    }
                }}>
                    <div className="name-field">
                        <div className="book-room-input-field">
                            <div className="first-name">
                                <input type="text" name="first_name" tabIndex={1} className='input-field' placeholder='' onChange={inputAndTextFieldHandler} />
                                <label htmlFor="">first name</label>
                            </div>
                            <div className="last-name">
                                <input type="text" name="last_name" tabIndex={2} className='input-field' placeholder='' onChange={inputAndTextFieldHandler} />
                                <label htmlFor="">last name</label>
                            </div>
                        </div>
                    </div>
                    <div className="phone-email-field">
                        <div className="book-room-input-field">
                            <div className="email-id">
                                <input type="email" name="email_id" tabIndex={3} placeholder='' className='input-field' onChange={inputAndTextFieldHandler} />
                                <label htmlFor="">email Id</label>
                            </div>
                            <div className="mobile-num">
                                <input type='number' name="mob_num" tabIndex={4} placeholder='' className='input-field' onChange={inputAndTextFieldHandler} />
                                <label htmlFor="">mobile number</label>
                            </div>
                        </div>
                    </div>
                    <div className="check-in-and-out-field">
                        <div className="book-room-input-field">
                            <div className="check-in" onClick={() => { setOpenCheckInCalender(!openCheckInCalender) }} >
                                <input type="text" readOnly name='check_in' className="remove-caret special-drop-down-input-field" tabIndex={5} id='check-in-input-field' />
                                <span id='check-in-date-label'>check in</span>
                                <i className="fa-solid fa-calendar-days"></i>
                            </div>
                            <div className="check-out" onClick={() => { setOpenCheckOutCalender(!openCheckOutCalender) }} >
                                <input type="text" readOnly name='check_out' className="remove-caret special-drop-down-input-field" tabIndex={6} id='check-out-input-field' />
                                <span id='check-out-date-label'>check out</span>
                                <i className="fa-solid fa-calendar-days"></i>
                            </div>
                        </div>
                    </div>
                    <div className="no-of-rooms">
                        <div className="book-room-input-field">
                            <div onClick={() => { setShowRoomsDropDown(!showRoomsDropDown) }} className="no-of-rooms-select remove-caret" id='room-field'>
                                <input type="text" readOnly name='no_of_rooms' className='remove-caret special-drop-down-input-field' id='room-input-field' ref={roomButtonRef} autoComplete='off' />
                                <div className={showRoomsDropDown ? "custom-select-box show no-of-rooms-custom-select-box" : "custom-select-box"} style={{ top: roomDropdownTop ? `${roomDropdownTop}px` : "115%" }} ref={roomContentRef}>
                                    {
                                        new Array(10).fill(0).map((_, index) =>
                                            <li className='rooms-filter' onClick={() => { noOfPersonDropDownHandler(index); RoomsCountryStateHandler("no_of_rooms", index + 1) }} key={index}>{index + 1} Room</li>
                                        )
                                    }
                                </div>
                                <span id='room-label'>number of rooms</span>
                                <i className="fa-solid fa-house-user"></i>
                            </div>
                        </div>
                    </div>
                    <div className="address-details">
                        <textarea name="address" placeholder='' tabIndex={7} className='textarea-field' onChange={inputAndTextFieldHandler}></textarea>
                        <label htmlFor=''>enter your address</label>
                    </div>
                    <div className="country-state-city-select">
                        <div className="book-room-input-field">
                            <div className="country" id='country-field' onClick={handelCountryClick} onKeyDown={handelCountryKeyEvent}>
                                <input type="text" className={showCountryDropDown ? "select-country special-drop-down-input-field" : "select-country special-drop-down-input-field remove-caret"} id='country-input-field' ref={countryButtonRef} name='country_input' onChange={handleCountryInput} autoComplete='off' />
                                <div id='country-drop-down' className={showCountryDropDown ? "custom-select-box show" : "custom-select-box"} style={{ top: "100%" }} >
                                    {
                                        filteredCountryData.map((item, index) =>
                                            <li className={currentFocused === index ? "country-filter highlight" : "country-filter"} onClick={() => { countryDropDownHandler(item.name, index); RoomsCountryStateHandler("selectedCountry", item.name) }} key={index}>{item.name}</li>
                                        )
                                    }
                                </div>
                                <span id='country-label'>Select Country</span>
                                <i className="fa-solid fa-caret-down"></i>
                            </div>

                            <div onClick={handelStateClick} className={isActiveStateField && filteredStateData.length > 0 ? "select-state" : "select-state deactive"} id='state-field' onKeyDown={handelStateKeyEvent}>
                                <input type="text" className={showStateDropDown ? "special-drop-down-input-field" : "special-drop-down-input-field remove-caret"} id='state-input-field' name='state_input' ref={stateButtonRef} onChange={handleStateInput} autoComplete='off' />
                                <div id='state-drop-down' className={showStateDropDown && filteredCountryData.at(selectedCountryIndex).states.length > 0 ? "custom-select-box show" : "custom-select-box"} style={{ top: "100%" }}>
                                    {
                                        filteredStateData && filteredStateData.map((item, index) =>
                                            <li className={currentFocused === index ? "state-filter highlight" : "state-filter"} onClick={() => { stateDropDownHandler(item.name); RoomsCountryStateHandler("selectedState", item.name) }} key={index}>{item.name}</li>
                                        )
                                    }
                                </div>
                                <span id='state-label'>Select State</span>
                                <i className="fa-solid fa-caret-down"></i>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="book-room-page-book-now-btn common-button">proceed to payment</button>
                </form>
            </div >
        </>
    )
}
