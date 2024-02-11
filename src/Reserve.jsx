import { CiClock1 } from "react-icons/ci";
import { IoMdContacts } from "react-icons/io";
import { IoIosContact } from "react-icons/io";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";


export default function Reserve(){
    return(
        <section className="booking-section" id="reserve">
            <h1>Reserve a table</h1>
            <div className="booking-container">
                <img src="../images/splashed coffee 2.png" alt="Splashed Coffee" className="splashed-coffee" />
                <div className="contact-container">
                    <form action="">
                        <input type="date" name="reservation date" id="date" />
                            <div className="input-container">
                                <div className="time">
                                <CiClock1 className="icon"/>
                                <input type="time" placeholder="Time"/>
                                </div>
                               
                            <div className="input-container">
                                <div className="guests">
                                <IoMdContacts className="icon guest-icon"/>
                                <input type="number" placeholder="Guests"/>
                                </div>
                                
                            </div>
                       
                        </div>
                        <div className="input-container">
                            <IoIosContact className="icon"/>
                            <input type="text" name="name" id="name" placeholder="Your Full Name"/>
                        </div>
                        <div className="input-container">
                            <IoPhonePortraitOutline className="icon"/>
                            <input type="number" name="phone" id="phone" placeholder="Your Phone Number"/>
                        </div>
                        <div className="input-container">
                            <MdOutlineEmail className="icon"/>
                            <input type="email" name="email" id="email" placeholder="Your email address"/>
                        </div>
                        <button className="btn reserve-btn">Reserve</button>
                    </form>                    
                </div>
            </div>
        </section>

    )
}