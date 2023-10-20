import Carousel from "react-bootstrap/Carousel";

import { Col, Container, Row } from "react-bootstrap";
import Jumbotron from "../components/Jumbotron";

export default function Home() {
  return (
    <Container fluid>
      <Row>
        <Col>
        <Jumbotron  />
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta omnis tempore deleniti, optio animi dicta voluptates sint sunt qui esse sit. Perferendis, architecto odit beatae inventore commodi ut esse voluptates?</h3>
        </Col>
      </Row>
    </Container>
  );
}
