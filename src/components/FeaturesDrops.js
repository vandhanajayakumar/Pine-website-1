import React, { useRef } from "react";
import { useFeaturedRightShutter, useParallaxEffect } from "../hooks/gsap";
import newImage from "../img/img1.jpg"; // Updated image import

const FeaturesDrops = () => {
  const featuredRef = useRef(null);
  const featuredRightShutter = useRef(null);

  useFeaturedRightShutter(featuredRightShutter, featuredRef);

  return (
    <section className="features-drops" ref={featuredRef}>
      <div className="section-title">
        <h4>WHO WE ARE</h4>
      </div>
      <div className="featured">
        <div className="features-left">
          <h6>Empowering Your Success through Reliable IT Services</h6>
          <p>
            Pinesphere is at the forefront of technological advancements, offering advanced products, innovative services, and cutting-edge workforce solutions. Our comprehensive range of offerings harnesses the power of data convergence, technology integration, and groundbreaking innovation to unlock unlimited possibilities.
          </p>
        </div>
        <div className="features-right">
          <img src={newImage} alt="Feature Image" /> {/* Updated image source */}
          <span className="right-shutter" ref={featuredRightShutter}></span>
        </div>
      </div>
    </section>
  );
};

export default FeaturesDrops;
