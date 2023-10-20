import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import image from "../assets/sunset.jpeg";
import freeway from "../assets/971.jpg";
import { useState } from "react";

const data = [
  {
    image: image,
    caption: "Caption",
    description: "Description Here",
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
  
  
  return (
    <AwesomeSlider className='w-full h-1/2 my-10' bullets={false}>
    {data.map((item)=> (
        <div >
            <img src={item.image} alt="" srcset="" className='w-full h-full' />
        </div>
    ))}
  </AwesomeSlider>
  );
}
