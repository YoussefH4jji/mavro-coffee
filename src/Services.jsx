// import { BiSolidCoffeeBean } from "react-icons/bi";
import { GiCoffeeBeans } from "react-icons/gi";
import { MdCoffeeMaker } from "react-icons/md";
import { PiCoffeeLight } from "react-icons/pi";
import { SiBuymeacoffee } from "react-icons/si";
import { GiCroissant } from "react-icons/gi";


export default function Services(){
    return(
        <section className="services-section" id="services">
            <div className="title">
                <h1 className="about-title">Services</h1>
                <div className="divider">
                    <div className="line"></div>
                    <GiCoffeeBeans/>
                    <div className="line"></div>
                </div>
            </div>
            <div className="row services-container">
                <div className="card">
                    <div className="services-info">
                        <MdCoffeeMaker className="services-icon"/>
                        <p className="service">Equipement</p>
                    </div>
                </div>
                <div className="card">
                    <div className="services-info">
                        <PiCoffeeLight className="services-icon"/>
                        <p className="service">Type of coffee</p>
                    </div>
                </div>
                <div className="card">
                    <div className="services-info">
                        <SiBuymeacoffee className="services-icon"/>
                        <p className="service">Take Away</p>
                    </div>
                </div>
                <div className="card">
                    <div className="services-info">
                        <GiCroissant className="services-icon"/>
                        <p className="service">Pastry</p>
                    </div>
                </div>
            </div>
        </section>
    )
}