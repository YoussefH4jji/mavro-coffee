/* eslint-disable react/no-unescaped-entities */
import { HiMiniArrowSmallLeft } from "react-icons/hi2";
import { HiMiniArrowSmallRight } from "react-icons/hi2";

export default function Reviews(){
    return(
        <section className="reviews-section">
            <h1>What our client said about us</h1>
            <div className="reviews-container">
                <div className="reviews">
                    <div className="review">
                        <div className="comment-section">
                            <HiMiniArrowSmallLeft className="review-arrow prev"/>
                            <p>It's a wonderful little caffe with wonderful staff and wonderful atmosphere
                            its a wonderful little cafe with wonderful staff and wonderful atmosphere. 
                            I have been here twice and i am LOVING it, amazing coffee amazing pastries and they a really god hibiscus tea. 
                            personally my favorite drink is there chai latte iced with oat milk.
                            </p>
                            <HiMiniArrowSmallRight className="review-arrow next"/>
                        </div>
                        <img src="../images/customer1.jpg" alt="customer img"className="customer-img" />
                        
                    </div>
                    <img src="../images/cup of coffee.png" alt="A cup of coffee" className="cup-img" />

                </div>
            </div>
             

        </section>
    )
}