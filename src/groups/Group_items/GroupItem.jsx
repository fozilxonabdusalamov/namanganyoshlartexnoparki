import React from "react";
import "./GroupItem.css";
import fozilxon from "../../assets/fozilxon.jpg";
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Jamoa ma'lumotlari
const groupData = [
  {
    id: 1,
    name: "Fozilxon",
    image: fozilxon,
    position: "Front-end Developer",
    description:
      "Fozilxon is a talented front-end developer with a passion for creating beautiful and user-friendly web applications.",
    contact: {
      email: "fozilxonabdusalamov2006@gmail.com",
      facebook: "https://www.facebook.com/fozilxon.abdusalamov.1",
      instagram: "https://www.instagram.com/fozilxon_abdusalamov/",
      github: "https://github.com/fozilxonabdusalamov",
      telegram: "https://t.me/fozilxonabdusalamov",
    },
  },

  {
    id: 2,
    name: "Fozilxon",
    image: fozilxon,
    position: "Front-end Developer",
    description:
      "Fozilxon is a talented front-end developer with a passion for creating beautiful and user-friendly web applications.",
    contact: {
      email: "fozilxonabdusalamov2006@gmail.com",
      facebook: "https://www.facebook.com/fozilxon.abdusalamov.1",
      instagram: "https://www.instagram.com/fozilxon_abdusalamov/",
      github: "https://github.com/fozilxonabdusalamov",
      telegram: "https://t.me/fozilxonabdusalamov",
    },
  },
  {
    id: 3,
    name: "Fozilxon",
    image: fozilxon,
    position: "Front-end Developer",
    description:
      "Fozilxon is a talented front-end developer with a passion for creating beautiful and user-friendly web applications.",
    contact: {
      email: "fozilxonabdusalamov2006@gmail.com",
      facebook: "https://www.facebook.com/fozilxon.abdusalamov.1",
      instagram: "https://www.instagram.com/fozilxon_abdusalamov/",
      github: "https://github.com/fozilxonabdusalamov",
      telegram: "https://t.me/fozilxonabdusalamov",
    },
  },
  {
    id: 4,
    name: "Fozilxon",
    image: fozilxon,
    position: "Front-end Developer",
    description:
      "Fozilxon is a talented front-end developer with a passion for creating beautiful and user-friendly web applications.",
    contact: {
      email: "fozilxonabdusalamov2006@gmail.com",
      facebook: "https://www.facebook.com/fozilxon.abdusalamov.1",
      instagram: "https://www.instagram.com/fozilxon_abdusalamov/",
      github: "https://github.com/fozilxonabdusalamov",
      telegram: "https://t.me/fozilxonabdusalamov",
    },
  },
  {
    id: 5,
    name: "Fozilxon",
    image: fozilxon,
    position: "Front-end Developer",
    description:
      "Fozilxon is a talented front-end developer with a passion for creating beautiful and user-friendly web applications.",
    contact: {
      email: "fozilxonabdusalamov2006@gmail.com",
      facebook: "https://www.facebook.com/fozilxon.abdusalamov.1",
      instagram: "https://www.instagram.com/fozilxon_abdusalamov/",
      github: "https://github.com/fozilxonabdusalamov",
      telegram: "https://t.me/fozilxonabdusalamov",
    },
  },
  {
    id: 6,
    name: "Fozilxon",
    image: fozilxon,
    position: "Front-end Developer",
    description:
      "Fozilxon is a talented front-end developer with a passion for creating beautiful and user-friendly web applications.",
    contact: {
      email: "fozilxonabdusalamov2006@gmail.com",
      facebook: "https://www.facebook.com/fozilxon.abdusalamov.1",
      instagram: "https://www.instagram.com/fozilxon_abdusalamov/",
      github: "https://github.com/fozilxonabdusalamov",
      telegram: "https://t.me/fozilxonabdusalamov",
    },
  },
];

function GroupItem() {
  return (
    <Swiper
      modules={[Navigation]}
      loop={true} // Infinite aylanish
      slidesPerView={4.2} // Bir vaqtning o'zida nechta ko'rinsin
      //   spaceBetween={1} // Slaydlar orasidagi masofa
      //   breakpoints={{
      //     320: { slidesPerView: 1 },
      //     768: { slidesPerView: 2 },
      //     1024: { slidesPerView: 4.3 },
      //   }}
    >
      {groupData.map((member) => (
        <SwiperSlide key={member.id}>
          <div className="group_card">
            <img
              src={member.image}
              alt={member.name}
              className="profile_image"
            />
            <div className="social_links">
              <div className="name_position">
                <h2>{member.name}</h2>
                <p>{member.position}</p>
              </div>
              <p className="description">{member.description}</p>
              <div className="links">
                <a href={`mailto:${member.contact.email}`}>
                  <MdEmail />
                </a>
                <a href={member.contact.facebook}>
                  <FaFacebook />
                </a>
                <a href={member.contact.instagram}>
                  <FaInstagram />
                </a>
                <a href={member.contact.github}>
                  <IoLogoGithub />
                </a>
                <a href={member.contact.telegram}>
                  <FaTelegram />
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default GroupItem;
