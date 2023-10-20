import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import image from "../assets/sunset.jpeg";
import freeway from "../assets/971.jpg";
import { useState } from "react";
import { Button } from "react-bootstrap";

const data = [
  {
    image: image,
    caption: "Los Angeles",
    description: "City that made me who I am.",
  },
  {
    image: freeway,
    caption: "Caption",
    description: "Description Here",
  },
  {
    image: image,
    caption: "Caption",
    description: "Description Here",
  },
];

export default function Jumbotron() {
  const bgImg = {
    position: "absolute",
    zIndex: -1,
    left: 0,
    top: 0,
    width: "100%",
    filter: "opacity(30%)",
  };



  return (
    <div className="h-1/2">
      <AwesomeSlider bullets={false} className="my-4 sliderContainer" animation="cubeAnimation" >
        {data.map((item, i) => (
          <div key={i} style={{ zIndex: 2 }}>
            <div>
              <img style={bgImg} alt="Wow" src={item.image} />
              <h1 className="text-white bg-gray-800 p-3.5 italic rounded-tl-3xl rounded-br-3xl">
                {item.caption}
              </h1>
              <h3 className="text-white italic ">{item.description}</h3>
            </div>
          </div>
        ))}
      </AwesomeSlider>
    </div>
  );
}
