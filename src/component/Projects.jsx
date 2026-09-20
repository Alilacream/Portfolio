
import { IconArrowNarrowRight } from '@tabler/icons-react';
function CheckWebsite(targetUrl) {
  window.open(targetUrl, '_blank')
}
const Projects = ({ projects }) => {
  const DomDisplay = projects.map(project => (
    <div className="project">

      {project.launch?.trim() && <IconArrowNarrowRight onClick={() => CheckWebsite(project.launch)} className='arrow-link' />}
      <img src={project.image} className='project-image' />
      <div className='project-text-container'>

        <h3>{project.name}</h3>
        <p>{project.slogan}</p>
      </div>
    </div>
  ))
  return (
    <>
      <h2 className="section-heading">PROJECTS<br /> <span className="highlight">REALIZED</span></h2>
      <div className='project-wrapper'>
        {DomDisplay}
      </div>
    </>
  )
}

export default Projects
