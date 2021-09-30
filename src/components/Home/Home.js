import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
// import Nav from "react-bootstrap/Nav";
// import Button from "react-bootstrap/Button";
// import pdf from "../Home/SubhodipRoyResume.pdf";
// import { AiOutlineDownload } from "react-icons/ai";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There! <span className="wave" role="img" aria-labelledby="wave">👋</span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> SUBHODIP ROY</strong>
              </h1>

              {/* <Nav.Item className="fork-btn">
              <Button
                 href={pdf} 
                target="_blank"
                className="fork-btn-inner"
              >
                <AiOutlineDownload/>
                &nbsp;
                 Resume
                {/* <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} /> */}
              {/* </Button>
            </Nav.Item> */} *

            

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={homeLogo} alt="home pic" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
