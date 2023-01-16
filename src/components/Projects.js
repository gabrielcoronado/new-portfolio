import React from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import youtube from "../assets/img/youtube-clone.jpeg";
import portfolio from "../assets/img/my-portfolio.jpeg";
import beads from "../assets/img/beads-color.jpeg";
import chat from "../assets/img/chat-app.jpeg";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";

import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

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
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Projects</h2>
            <p>lorem ipsum</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab 3</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content id="slideInUp">
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, i) => {
                      return <ProjectCard key={i} project={project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Lorem</Tab.Pane>
                <Tab.Pane eventKey="third">Lorem</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" alt="" src={colorSharp2} />
    </section>
  );
};

export default Projects;
