import { IconArrowAutofitUpFilled } from "@tabler/icons-react";

IconHttpTrace
const Project = (props) => {
  return (
    <div className="project-container">
      <img className="project-image" src={props.image} alt="project image">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <IconArrowAutofitUpFilled className="project-link" />
    </div>
  )
}

export default Project;
