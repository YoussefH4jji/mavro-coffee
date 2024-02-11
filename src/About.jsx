import { GiCoffeeBeans } from "react-icons/gi";

export default function About(){
    return(
        <section className="about-section">
            <div className="title">
                <h1 className="about-title">About us</h1>
                <div className="divider">
                    <div className="line"></div>
                    <GiCoffeeBeans/>
                    <div className="line"></div>
                </div>
            </div>
            <div className="about-container">
                <img src="../images/coffee cup.png" alt="A cup of coffee" className="about-img"/>
                <p>The coffee at Mavro is made by hand. 
                    We are a company committed to offering premium coffee enjoyment experiences. 
                    From selecting top quality beans to the attention to detail in our roasting process each cup is a reflection of our commitment to excellence. 
                    Come with us on this walk of taste, comfort, and fellowship at Marvo</p>
            </div>
        </section>
    )
}