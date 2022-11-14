import React from "react";
import "../scss/rating.scss";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
const Rating = () => {
    const reviews = [
        {
            name: "Adam Watson",
            role: "Barista",
            comment: "“Great! This is one of the best apps I have ever used before.”",
            img: "https://toka.b-cdn.net/wp-content/uploads/2022/02/100-testimonial.png",
            rating: "5",
        },
        {
            name: "Lisa Smith",
            role: "Designer",
            comment: "“Great! This is one of the best apps I have ever used before.”",
            img: "https://toka.b-cdn.net/wp-content/uploads/2022/02/100-testimonial.png",
            rating: "5",
        },
        {
            name: "Nick Green",
            role: "Developer",
            comment: "“Great! This is one of the best apps I have ever used before.”",
            img: "https://toka.b-cdn.net/wp-content/uploads/2022/02/100-testimonial.png",
            rating: "4",
        },
    ];

    // {
    //     [...Array(5)].map((item, i) => {
    //         return (
    //             <span onClick={() => updateRating(i)}>
    //                 {" "}
    //                 {rating > i ? (
    //                     <AiFillStar fontSize="20px" cursor="pointer" />
    //                 ) : (
    //                     <AiOutlineStar fontSize="20px" cursor="pointer" />
    //                 )}
    //             </span>
    //         );
    //     });
    // }
    return (
        <>
            <section className="rating">
                <div className="container">
                    <div className="grid">
                        <div className="start">
                            <h5>TESTIMONIAL </h5>
                            <h1 data-aos="fade" className="aos-init aos-animate">
                                Trusted by over 300K users around the world
                            </h1>
                            {/* <p data-aos="fade" className="aos-init aos-animate">
                                Save Time and Diversify Your Portfolio, Royal Stake App Work
                                While You Just Live.
                            </p> */}
                        </div>
                        <div className="end">
                            <img src="/images/ertbg-1024x957.png" alt="" />
                        </div>
                    </div>
                    <div className="reviews">
                        <div className="review__grid">
                            {reviews.map((review, ind) => {
                                return (
                                    <div className="review">
                                        <div className="stars">
                                            {[...Array(5)].map((item, i) => {
                                                return (
                                                    <span>
                                                        {" "}
                                                        {review.rating > i ? (
                                                            <AiFillStar
                                                                fontSize="20px"
                                                                cursor="pointer"
                                                                className="yellow"
                                                            />
                                                        ) : (
                                                            <AiFillStar
                                                                fontSize="20px"
                                                                cursor="pointer"
                                                                className="white"
                                                            />
                                                        )}
                                                    </span>
                                                );
                                            })}
                                        </div>
                                        <p>{review.comment}</p>
                                        <div className="person">
                                            <div className="person__info">
                                                <h2>{review.name}</h2>
                                                <h3>{review.role}</h3>
                                            </div>
                                            <div className="img">
                                                <img src={review.img} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Rating;
