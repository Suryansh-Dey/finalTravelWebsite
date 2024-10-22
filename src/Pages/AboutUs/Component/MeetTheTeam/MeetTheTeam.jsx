import React from "react";
import style from "./meetTheTeam.module.css";

const data = [
  {
    img: "/kabirTalade1.jpg",
    name: "Kabir Talade",
    title: "CEO & Co-Founder",
    description:
      "Kabir Talade, founder and CEO of Btech Travelwala, revolutionizes student travel by blending technology and tourism. Passionate about affordable luxury, he creates personalized, budget-friendly trips powered by AI-driven solutions, combining adventure and education for enriching, memorable journeys tailored to college students.",
  },
  {
    img: "/ashishPal.jpg",
    name: "Aashish Pal",
    title: "COO and Co-Founder",
    description:
      "Aashish Pal, COO of Btech Travelwala, ensures smooth operations and high-quality travel experiences. With expertise in managing large-scale projects, he focuses on operational excellence, enabling the company to offer personalized, enriching trips while upholding top customer satisfaction standards.",
  },
  {
    img: "https://www.w3schools.com/w3images/team3.jpg",
    name: "Suryansh Dey",
    title: "Chief Technology Officer",
    description:
      "Suryansh Dey, CTO of Btech Travelwala, leverages his software development and expertise to drive AI-driven, personalized itineraries. His passion for integrating cutting-edge technology ensures Btech Travelwala stays at the forefront of tech-enabled travel, providing seamless, customized experiences for college students.",
  },
  {
    img: "https://www.w3schools.com/w3images/team3.jpg",
    name: "Mayank Pal",
    title: "Chief Marketing Officer",
    description:
      "Mayank Pal, CMO of Btech Travelwala, leads innovative marketing strategies to connect with college students. With expertise in digital marketing and branding, he promotes the company’s AI-driven itineraries and experiential trips, building the brand’s presence and ensuring memorable, affordable travel experiences.",
  },
  {
    img: "/jayaTalade.jpg",
    name: "Jaya Talade",
    title: "Head of Content",
    description:
      "Jaya Talade, Head of Content at Btech Travelwala, curates content that aligns with the company’s vision. With expertise in travel storytelling and digital communication, she ensures every message resonates with students and travelers, from social media posts to in-depth trip guides, maintaining Btech Travelwala’s unique voice.",
  },
];

const MeetTheTeam = () => {
  return (
    <>
      <div className={style.container}>
        <h2 className={style.title}>MEET OUR TEAM</h2>
        <div className={style.cardContainer}>
          {data.map((item, index) => (
            <div className={style.card} key={index}>
              <img src={item.img} alt="John" />
              <div className={style.textContainer}>
                <h3>{item.name}</h3>
                <h6 className={style.cardTitle}>{item.title}</h6>
                <p>{item.description}</p>
                <p>
                  <button
                    className="btn btn-primary"
                    style={{ marginTop: "8px" }}
                  >
                    Contact
                  </button>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MeetTheTeam;
