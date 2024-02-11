import { CiMail } from "react-icons/ci";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function Footer(){
    return(
        <>
        <section className="footer-section">
            <img src="../images/M.png" alt="mavro's logo" className="footer-img"/>
            <div className="footer-links-container">
                <a href="#about">About us</a>
                <a href="#services">Services</a>
                <a href="#reserve">Reserve</a>   
                <a href="#products">Products</a>
            </div>
            <div className="footer-contact-container">
                <h2>Contact us</h2>
                <div className="contact-links">
                    <CiMail className="contact-icon"/>
                    <p>Nikosmavro3@gmail.com</p>
                </div>
                <div className="contact-links">
                    <IoPhonePortraitOutline className="contact-icon"/>
                    <p>+1 310-397-2227</p>
                </div>
                <div className="contact-links">
                    <CiFacebook className="contact-icon"/>
                    <p>Mavro Coffee</p>
                </div>
                <div className="contact-links">
                    <FaInstagram className="contact-icon"/>
                    <p>Mavro Coffee</p>
                </div>
                
            </div>
            <div className="location-container">
                    <FaLocationDot/>
                    <p>12224 Venice Blvd
                    Los Angeles, CA 90066</p>
            </div>
        </section>
        <footer>Copyright 2024 Marvo Coffee All rights are reserverd</footer>

        </>
    )
}