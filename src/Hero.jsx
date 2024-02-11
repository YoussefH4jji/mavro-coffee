import { BiSolidCoffeeBean } from "react-icons/bi";

export default function Hero(){
    return(
        <section className="hero-section">
            <div className="infos-container">
                <div className="hero-text-container">
                    <h1 className="hero-title">Crafting Coffee With Hearts</h1>
                    <div className="hero-divider">
                        <BiSolidCoffeeBean className="hero-icon"/>
                        <div className="hero-line"></div>
                    </div>
                    <p className="hero-p">Indulge in the artistry of coffee at Mavro . 
                    Crafting coffee with heart is our passion and promise to you. 
                    Each bean is meticulously selected, each roast a labor of love. 
                    Our commitment to excellence ensures that every cup tells a tale of dedication and flavor
                    </p>
                    <button className="btn hero-btn">ORDER NOW</button>
                </div>
                <img src="../images/splashed coffee.png" alt="A cup of coffee" className="hero-img"/>
            </div>
            <div className="hero-our-infos">
                <div className="info">
                    <p className="info-numbers">55+</p>
                    <p className="info-p">Items of Coffee</p>
                </div>
                <div className="info">
                    <p className="info-numbers">40+</p>
                    <p className="info-p">Order Running</p>
                </div>
                <div className="info">
                    <p className="info-numbers">6k+</p>
                    <p className="info-p">Happy Customer</p>
                </div>
            </div>
        </section>
    )
}