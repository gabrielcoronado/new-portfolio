import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import youtube from "../assets/img/youtube-clone.jpeg";
import portfolio from "../assets/img/my-portfolio.jpeg";
import beads from "../assets/img/beads-color.jpeg";
import chat from "../assets/img/chat-app.jpeg";

const Projects = () => {
  const projects = [
    {
      title: "Youtube Clone",
      description:
        "A Youtube Clone application developed using React JS, Material UI and using Youtube v3 API.",
      imgUrl: youtube,
      link: "https://g-youtube-clone.netlify.app/",
    },
    {
      title: "Beads Color",
      description:
        "Fully functional E-Commerce site created for a client using React JS, Material UI, Redux and Strapi to fulfill payments.",
      imgUrl: beads,
    },
    {
      title: "My Portfolio",
      description: "",
      imgUrl: portfolio,
    },
    {
      title: "Chat App",
      description:
        "This fully responsive and real-time Chat App was created using React JS, Sass for styling and Firebase as a database.",
      imgUrl: chat,
      link: "https://gc-chat-app.netlify.app/login",
    },
  ];

  return (
    <section className="projects" id="project">
      <Container>
        <Row>
          <Col>
            <h2>PRojects</h2>
            <p>lorem ipsum</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
