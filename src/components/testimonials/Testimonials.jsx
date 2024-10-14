import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Vikram Singh",
      role: "Full-stack developer. Improving open-source projects, one commit at a time.",
      test: " As a software engineer and critical thinker,I find Amit  to be an excellent collaborator. I first met him while working on some introductory JavaScript and React projects, and since then, I’ve seen significant growth in his understanding of the development process. He consistently maintains a professional environment and ensures high-quality audio and video, which greatly enhances our communication..",
    },
    {
      id: 2,
      name: "Abhishek Viswakarma",
      role: "Full-stack developer | Technical Support Engineer at virtusa",
      test: "It was a pleasure collaborating with Amit on different projects. One of the things that I think is special about him is that he never settles, even after completing the projects he finds other resources and strengthens him knowledge. Collaborating with him is easy and comfortable, it's like working with someone you've known for a long period of time.",
    },
    {
      id: 3,
      name: "Chetan",
      role: "Full Stack Developer| PostgreSQL | JavaScript | React | Redux | Html&Css | Java|Spring-Boot.",
      test: "I worked with Amit  in the same team and him communication skills are very strong. Him programming skill is one of the bests, given the time frame in the field. He is a good team player.  He will probably fit in most of the companies not only because he's a good team worker, but also because he has very good skills and I know he has much more potential to be shown.",
    },
   
  ];
  return (
    <section id="testmonials">
      <h5>Feedback from my peers</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
            <div className="client__avatar">
              <a href={test.link}>
                <BsLinkedin />
              </a>
            </div>
            <h5 className="client__name">{test.name}</h5>
            <small className="client__review">{test.test}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
