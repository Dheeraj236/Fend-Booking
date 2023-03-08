import React, { useState } from "react";
import Title from "./Title";
import { FaPhoneAlt, FaMapMarker, FaMailchimp } from "react-icons/fa";

export default function Contact() {
  const services = [
    {
      icon: <FaPhoneAlt />,
      title: "Contact Us",
      info: "Phone:91xxxxxxx",
    },
    {
      icon: <FaMailchimp />,
      title: "Write To Us",
      info: "Mail:hotelbooking@gxxxx.in",
    },
    {
      icon: <FaMapMarker />,
      title: "Address",
      info: "Estates",
    },
  ];
  const [state] = useState(services);

  return (
    <section className="services">
      <Title title="Contact" />
      <div className="services-center">
        {state.map((item, index) => {
          return (
            <article key={index} className="service">
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
