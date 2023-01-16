import { Col } from "react-bootstrap";

const ProjectCard = ({ project }) => {
  console.log(project);
  return (
    <Col size={12} sm={6} md={4} className="asdsdasdadasd">
      <div className="proj-imgbx">
        <img src={project.imgUrl} alt="card" />
        <div className="proj-txtx">
          <h4>{project.title}</h4>
          <span>{project.description}</span>
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard;
