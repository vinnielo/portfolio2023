import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import image from "../assets/971.jpg";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import "react-awesome-slider/dist/custom-animations/fall-animation.css";
import bg from '../assets/projectImgs/brandedGoodies.png'

import {
  FaHtml5,
  FaCss3,
  FaPhp,
  FaJs,
  FaReact,
  FaAndroid,
  FaApple,
  FaAws,
  FaStripe,
  FaNodeJs, 
  FaDatabase
} from "react-icons/fa";

export default function Work() {
  const projects = [
    {
      name: "branded goodies",
      description: "A promotional goods e-commerce. Built PHP, SOAP, HTML and CSS.",
      image: bg,
      url: "https://brandedgoodies.com/",
    },
    {
      name: "branded goodies",
      description: "A promotional goods e-commerce. Built PHP, SOAP and CSS.",
      image: image,
      url: "https://www.google.com",
    },
  ];

  const bgImg = {
    position: "absolute",
    zIndex: -1,
    left: 0,
    top: 0,
    width: "100%",
    filter: "opacity(30%)",
  };

  const icons = [
    {
      image: <FaHtml5 />,
      caption: 'HTML5'
    },
    {
      image: <FaNodeJs />,
      caption: 'NodeJS'
    },
    {
      image: <FaCss3 />,
      caption: 'CSS3'
    },
    {
      image: <FaJs />,
      caption: 'JavaScript'
    },
    {
      image: <FaPhp />,
      caption: 'Php'
    },
    {
      image: <FaAndroid />,
      caption: 'Android/Kotlin'
    },
    {
      image: <FaApple />,
      caption: 'iOS/Xcode'
    },
    {
      image: <FaReact />,
      caption: 'ReactJS'
    },
    {
      image: <FaAws />,
      caption: 'AWS'
    },
    {
      image: <FaDatabase />,
      caption: 'MySQL/MongoDB/Firebase'
    },
    {
      image: <FaStripe />,
      caption: 'Stripe'
    },
  ];

  return (
    <Container fluid>
      <Row className="mt-5">
        <Col className="flex flex-column justify-center items-center text-xl">
          <p className="font-face-nunito">
            Below are some of the projects I have worked on and contributed to. Feel free to ask any questions. I'd be glad to answer them
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 className="text-center my-4">Applications</h2>
          <div className="h-1/2 ">
            <AwesomeSlider
              animation="fallAnimation"
              bullets={false}
              className="my-4 sliderContainer"
            >
              {projects.map((item, i) => (
                <div key={i} style={{ zIndex: 2 }}>
                  <div className="flex flex-column flex-wrap">
                    <img style={bgImg} alt="Wow" src={item.image} />
                    <h1 className="text-white bg-gray-800 p-3.5 italic rounded-tl-3xl rounded-br-3xl">
                      {item.name}
                    </h1>
                    <h3 className="text-white italic ">{item.description}</h3>
                    <div>
                      <Button
                        href={item.url}
                        target="_blank"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full self=end"
                      >
                        Open App
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </AwesomeSlider>
          </div>
        </Col>
      </Row>
      <Row >
        <Col className="flex flex-column justify-center items-center bg-slate-300 mb-4  ">
          <h1 className="mb-4 font-face-nunito-italic">Technologies</h1>
          <h3 className="font-face-nunito">A few I know</h3>
          <div className="scroll-container w-50 rounded-md mb-5 font-face-nunito-italic ">
            {icons.map((icon, i) => (
              <div className="flex flex-col justify-center items-center pt-3">
              <p key={i} className="mx-3 text-7xl">
                {icon.image}
              </p>
              <p className="m-0">{icon.caption}</p>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}
