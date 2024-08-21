import React from "react";
import CollectionItem from "./CollectionItem";

// Import local images
import image1 from '../img/image1.jpg';
import image2 from '../img/image2.jpg';
import image3 from '../img/image3.jpg';
import image4 from '../img/image5.jpg';

const images = [
  {
    id: 1,
    src: image1,
    title: "FACES"
  },
  {
    id: 2,
    src: image2,
    title: "Awkward Astronauts"
  },
  {
    id: 3,
    src: image3,
    title: "NOOBPUNKS"
  },
  {
    id: 4,
    src: image4,
    title: "Gold"
  },
];

const Collections = () => {
  return (
    <section className="collections">
      <div className="section-title">
        <h4>Pines News</h4>
      </div>
      <div className="collection-item">
        {images.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Collections;
