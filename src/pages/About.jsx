import { Container, Row, Col } from "react-bootstrap";
import stairs from "../assets/stairs.jpg";
import coat from "../assets/coat.jpg";
import avatarOne from "../assets/avatarimg1.jpg";
import avatarTwo from "../assets/avatarimg2.jpg";

export default function About() {
  return (
    <Container fluid className="mb-5 mt-5">
      <Row>
        <Col className="flex justify-center items-center flex-col">
          <p>
            Greetings! I'm Jose Lopez, also known as Vinnie, and I'm a
            forward-thinking full-stack developer and coding enthusiast with a
            relentless commitment to exceeding expectations. My professional
            journey has equipped me with extensive experience in diverse
            front-end and back-end frameworks, full-stack development, and a
            comprehensive grasp of programming languages, enabling me to craft
            cutting-edge, visually stunning applications and websites that
            operate at peak performance.
          </p>
          <p>
            {" "}
            A bit about my background – I hail from Los Angeles and have spent
            much of my life in the vibrant San Fernando Valley. Growing up as a
            middle child among two older brothers, one older sister, and one
            younger sister with special needs has instilled in me an unwavering
            dedication to family values and a fervent desire to empower others
            in their life journeys. Rooted in this foundation, I chose to merge
            my passion for technology and coding to genuinely assist people in
            expanding their knowledge and achieving sustainable growth in the
            competitive digital realm.
          </p>
        </Col>
        <Col>
          <img src={stairs} alt="" className="rounded-bl-3xl rounded-tr-3xl" />
        </Col>
      </Row>

      <Row>
        <Col >
          <img src={coat} alt="" className="rounded-tl-3xl rounded-br-3xl" />
        </Col>
        <Col className="flex justify-center items-center flex-col">
          <p>
            I hold a Full Stack Coding Boot Camp certification from UCLA,
            co-founded Third Project Development, and have been immersed in the
            world of coding for over a year now. My ultimate satisfaction comes
            from aiding others in realizing their development and coding
            aspirations, all while making the journey enjoyable. I approach my
            work with a genuine ardor, collaborate wholeheartedly, and deliver
            solutions that culminate in high-performing, profit-generating
            platforms, all while prioritizing my clients' best interests. My
            extensive background and reputation for unwavering client support
            underscore my ability to bring your vision to life, no matter the
            scope.
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="flex justify-center items-center flex-col">
          <p>
            I wholeheartedly love what I do and consistently stay attuned to the
            ever-evolving industry trends to offer my clients the top-tier
            support they deserve. When I'm not immersed in the digital world,
            you'll often find me indulging in video games (primarily
            PlayStation, although Xbox has its merits), savoring family movie
            nights, and hosting a weekly YouTube show known as 'The Screen
            Squad' podcast with my brother.
          </p>
        </Col>
        <Col className="flex">
          <img src={avatarOne} alt="" className="rounded-full w-50" />
          <img src={avatarTwo} alt="" className="rounded-full w-50" />
        </Col>
      </Row>
    </Container>
  );
}
