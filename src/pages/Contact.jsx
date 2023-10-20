import { Container, Col, Row } from "react-bootstrap";
import computer from '../assets/971.jpg'


export default function Contact() {
    const prod = false

  return (
    <Container>
      <Row>
        <Col className=" my-4 ">
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
                value={prod ? "https://portfolio2023-eta-ten.vercel.app/thanks" : "http://localhost:5173/thanks"}
            
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
              <button type="submit" className="btn btn-lg btn-dark btn-block bg-sky-300 first-letter my-4">
                Submit Form
              </button>
            </form>
          </div>
        </Col>
        <Col>
        <img src={computer} alt="" className="my-4 rounded-2xl"/>
        </Col>
      </Row>
    </Container>
  );
}
