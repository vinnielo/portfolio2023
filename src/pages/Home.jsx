import { Col, Container, Row } from "react-bootstrap";
import Jumbotron from "../components/Jumbotron";

export default function Home() {
  return (
    <Container fluid >
      <Row>
        <Col>
          <Jumbotron className="h-1/2" />
        </Col>
      </Row>
      <Row>
        <Col className="flex flex-column justify-center items-center font-face-nunito">
          <h3 className="font-face-nunito-italic">
            Welcome to Vinnie's Web Development World!
          </h3>

          <p className="font-face-nunito">
            🌐 Hi! I'm Vinnie, a dedicated web developer based in Los Angeles.
            Within this realm of ones and zeros, I transform concepts into
            interactive, user-friendly, and visually captivating online
            experiences.
          </p>

          <p className="font-face-nunito">
            Thank you for visiting my web development haven. Feel free to
            navigate, click, and explore the endless possibilities. If you have
            any questions or if there's a project you'd like to discuss, don't
            hesitate to get in touch.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
