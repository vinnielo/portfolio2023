import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import image from "../assets/971.jpg";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
// import AwesomeSliderStyles  from "react-awesome-slider/dist/custom-animations/fall-animation.css"

export default function Work() {
  const projects = [
    {
      name: "branded goodies",
      description: "A promotional goods e-commerce. Built PHP, SOAP and CSS.",
      image: image,
      url: "https://www.google.com",
    },
    {
      name: "branded goodies",
      description: "A promotional goods e-commerce. Built PHP, SOAP and CSS.",
      image: image,
      url: "https://www.google.com",
    },
    {
      name: "branded goodies",
      description: "A promotional goods e-commerce. Built PHP, SOAP and CSS.",
      image: image,
      url: "https://www.google.com",
    },
    {
      name: "branded goodies",
      description: "A promotional goods e-commerce. Built PHP, SOAP and CSS.",
      image: image,
      url: "https://www.google.com",
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
  };

  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            cupiditate odio velit qui magnam tempore natus veritatis vero
            explicabo distinctio praesentium. Est dolorem ducimus eaque
            cupiditate accusamus quasi hic debitis.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 className="text-center my-4">Applications</h2>
          <div className="h-1/2">
            <AwesomeSlider
              animation="cubeAnimation"
              bullets={false}
              className="my-4 "
            >
              {projects.map((item, i) => (
                <div key={i} style={{ zIndex: 2 }}>
                  <div>
                    <img style={bgImg} alt="Wow" src={item.image} />
                    <h1 className="text-white bg-gray-800 p-3.5 italic rounded-tl-3xl rounded-br-3xl">{item.name}</h1>
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
    </Container>
  );
}
