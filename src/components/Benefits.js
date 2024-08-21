import React from "react";
import CardItem from "./CardItem";

const data = [
  {
    id: 1,
    title: "Digital Web & Mobility",
    des: "By Leveraging our 360-degree Web and Mobility Solutions, we enable next-generation digital experiences.!",
  },
  {
    id: 2,
    title: "Cloud Transformation",
    des: "Utilize the transformational power of cloud computing to realize the boundless potential of our company.!",
  },
  {
    id: 3,
    title: "Application Development",
    des: "Innovating Tomorrow, Coding Today: Crafting Next-Gen Applications with Technology Expertise.",
  },
];

const Benefits = () => {
  return (
    <section className="join">
      <div className="section-title">
        <h4>Services</h4>
      </div>
      <div className="join-info">
        {data.map((item) => (
          <CardItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Benefits;
