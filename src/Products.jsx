import { GiCoffeeBeans } from "react-icons/gi";

export default function Product(){
    return(
        <section className="products-section" id="products">
            <div className="title">
                <h1 className="about-title">Best Selling Items</h1>
                <div className="divider">
                    <div className="line"></div>
                    <GiCoffeeBeans/>
                    <div className="line"></div>
                </div>
            </div>
            <div className="row prodcuts-container">
                    <img src="../images/img1.jpg" alt="A prodcut image" className="product-img"/>
                    <img src="../images/img2.jpg" alt="A prodcut image" className="product-img"/>
                    <img src="../images/img3.jpg" alt="A prodcut image" className="product-img"/>
                    <img src="../images/img4.jpg" alt="A prodcut image" className="product-img"/>
                    <img src="../images/img5.jpg" alt="A prodcut image" className="product-img"/>

            </div>
       
        </section>
    )
}