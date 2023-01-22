import React from "react";
import "./Testimonials.css";
import Client from "../../images/logo.jpeg";
// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const clients = [
    {
      id: 1,
      name: "Quest Regency",
      image: Client,
      owner: "Karan Singh",
      review:
        "We were truly impressed! All the deliverables reached us on time. The marketing produced definitive and solid results. Everything was organised to perfection and delivered very systematically.",
    },
    {
      id: 2,
      name: "MBS White Palace",
      image: Client,
      owner: "Charan",
      review:
        "Vishal and his team are a bunch of incredibly talented and passionate professionals who have done a tremendous job in helping us establish a digital presence in the local market. They always came up to my expectations.",
    },
    // {
    //   id: 3,
    //   name: "Amrit Kumar Sahu",
    //   image: Client,
    //   review:
    //     "You are a quick learner, and got a good skill on finding solutions. Have seen you working hard and adding your extra time and effort whenever its required.",
    // },
    // {
    //   id: 4,
    //   name: "Princy R",
    //   image: Client,
    //   review:
    //     "Technically good resource. Completes the work on time and exhibits interest in learning new technologies and spent extra efforts to achieve it. She is good and much confident in presenting and communicating. She's proactive in her work.",
    // },
  ];
  return (
    <section id="testimonials">
      <div className="test">
        <h5 className="text">Review from clients</h5>
        <h2 className="para">Testimonials</h2>
      </div>

      <Swiper
        className="container testimonials_container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((data, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              {/* <div className="client_avatar">
                <img src={data.image} alt="client" />
              </div> */}
              <h5 className="client_name">{data.name}</h5>
              <small className="client_review">{data.review}</small>
              <small className="client_owner">-{data.owner}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
