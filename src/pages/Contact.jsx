import { Container, Col, Row } from "react-bootstrap";

export default function Contact() {
  return (
    <Container>
      <Row>
        <Col>
          <div className="container">
            <h1 className="formTitle">FormSubmit Demo</h1>
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
                value="http://localhost:5173/thanks"
              ></input>
              <div className="form-group">
                <div className="form-row">
                  <div className="col">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Full Name"
                      required
                    />
                  </div>
                  <div className="col">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Email Address"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <textarea
                  placeholder="Your Message"
                  className="form-control"
                  name="message"
                  rows="10"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-lg btn-dark btn-block">
                Submit Form
              </button>
            </form>
          </div>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}
