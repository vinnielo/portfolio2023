import { Container, Col, Row } from "react-bootstrap";
import computer from "../assets/971.jpg";
import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";

export default function Contact() {
  const prod = true;

  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <Container fluid>
      <Row>
        <Col className=" my-4 backdrop-blur bg-white/50 rounded-xl">
          <div className="container">
            <h1 className="formTitle">Contact me</h1>
            <h4 className="text-center">Reach Out Today</h4>
            <form
              target="_blank"
              action="https://formsubmit.co/2c996bf5d2b19ea8835a40050313b4d7"
              method="POST"
            >
              <input
                type="hidden"
                name="_autoresponse"
                value="Thanks For your inquiry i'll get back to you as soon as possible. "
              />
              <input
                type="hidden"
                name="_next"
                value={
                  prod
                    ? "https://portfolio2023-eta-ten.vercel.app/thanks"
                    : "http://localhost:5173/thanks"
                }
              ></input>
              <div className="form-group">
                <div className="form-row">
                  <div className="col my-2">
                    <input
                      type="text"
                      name="name"
                      className="form-control rounded-xl"
                      placeholder="Full Name"
                      required
                    />
                  </div>
                  <div className="col my-2">
                    <input
                      type="email"
                      name="email"
                      className="form-control rounded-xl"
                      placeholder="Email Address"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <textarea
                  placeholder="Your Message"
                  className="form-control rounded-xl"
                  name="message"
                  rows="8"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-dark btn-block bg-violet-950 hover:bg-sky-700 first-letter my-4"
              >
                Submit Form
              </button>
            </form>
          </div>
        </Col>
        <Col className="">
          <Particles
            id="tsparticles"
            // init={particlesInit}
            // loaded={particlesLoaded}
            // options={{
            //   fpsLimit: 120,
            //   interactivity: {
            //     events: {
            //       onClick: {
            //         enable: true,
            //         mode: "push"
            //       },
            //       onHover: {
            //         enable: true,
            //         mode: "repulse"
            //       },
            //       resize: true
            //     },
            //     modes: {
            //       push: {
            //         quantity: 4
            //       },
            //       repulse: {
            //         distance: 200,
            //         duration: 0.4
            //       }
            //     }
            //   },
            //   particles: {
            //     color: {
            //       value: "#ffffff"
            //     },
            //     links: {
            //       color: "#ffffff",
            //       distance: 150,
            //       enable: true,
            //       opacity: 0.5,
            //       width: 1
            //     },
            //     collisions: {
            //       enable: true
            //     },
            //     move: {
            //       direction: "none",
            //       enable: true,
            //       outModes: {
            //         default: "bounce"
            //       },
            //       random: false,
            //       speed: 1,
            //       straight: false
            //     },
            //     number: {
            //       density: {
            //         enable: true,
            //         area: 800
            //       },
            //       value: 80
            //     },
            //     opacity: {
            //       value: 0.5
            //     },
            //     shape: {
            //       type: "circle"
            //     },
            //     size: {
            //       value: { min: 1, max: 5 }
            //     }
            //   },
            //   detectRetina: true
            // }}
            options={{
              fullScreen: {
                enable: true,
                zIndex: -1,
              },
              particles: {
                number: {
                  value: 100,
                  limit: 300,
                  density: {
                    enable: true,
                    value_area: 800,
                  },
                },
                color: {
                  value: "#ffffff",
                },
                shape: {
                  type: "circle",
                  stroke: {
                    width: 0,
                    color: "#000000",
                  },
                  polygon: {
                    nb_sides: 5,
                  },
                  image: {
                    src: "images/github.svg",
                    width: 100,
                    height: 100,
                  },
                },
                opacity: {
                  value: 0.5,
                  random: true,
                  anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.5,
                    sync: false,
                  },
                },
                size: {
                  value: 20,
                  random: true,
                  anim: {
                    enable: true,
                    speed: 10,
                    size_min: 10,
                    sync: false,
                  },
                },
                line_linked: {
                  enable: true,
                  distance: 100,
                  color: "#ffffff",
                  opacity: 1,
                  width: 1,
                },
                move: {
                  enable: true,
                  speed: 3,
                  direction: "none",
                  random: false,
                  straight: false,
                  out_mode: "out",
                  bounce: false,
                  attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200,
                  },
                },
              },
              interactivity: {
                // detect_on: "canvas",
                events: {
                  // onHover: {
                  //   enable: true,
                  //   mode: "bubble",
                  //   parallax: {
                  //     enable: false,
                  //     force: 60,
                  //     smooth: 10,
                  //   },
                  // },
                  // onClick: {
                  //   enable: true,
                  //   mode: "push",
                  // },
                  resize: true,
                },
                modes: {
                  grab: {
                    distance: 400,
                    lineLinked: {
                      opacity: 1,
                    },
                  },
                  bubble: {
                    distance: 400,
                    size: 100,
                    duration: 2,
                    opacity: 1,
                    speed: 1,
                  },
                  repulse: {
                    distance: 200,
                  },
                  push: {
                    particles_nb: 4,
                  },
                  remove: {
                    particles_nb: 2,
                  },
                },
              },
              backgroundMask: {
                enable: true,
                cover: {
                  color: {
                    value: {
                      r: 0,
                      g: 0,
                      b: 0,
                    },
                  },
                },
              },
              retina_detect: true,
              fps_limit: 60,
              background: {
                image: "url('https://particles.js.org/images/background3.jpg')",
              },
            }}
          />
          <img src={computer} alt="" className="my-4 rounded-2xl " />
        </Col>
      </Row>
    </Container>
  );
}
