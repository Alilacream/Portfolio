
import { IconArrowNarrowRight } from '@tabler/icons-react';
import Hover from '../transition/Hover';
import OnSlide from '../transition/OnSlide';
function CheckWebsite(targetUrl) {
  window.open(targetUrl, '_blank')
}
const Projects = ({ projects }) => {
  const DomDisplay = projects.map(project => (
    <Hover>

    <div className="project">

      {project.launch?.trim() &&
        <button type="submit" className='glass-button' check={project.name}>
          <IconArrowNarrowRight onClick={() => CheckWebsite(project.launch)} className='arrow-link' />
        </button>
      }
      <img src={project.image} className='project-image' />
      <div className='project-text-container'>

        <h3>{project.name}</h3>
        <p>{project.slogan}</p>
      </div>
    </div>
      </Hover>
  ))
  return (
    <>
    <OnSlide direction='right'>
      <h2 className="section-heading">PROJECTS<br /> 
      <OnSlide direction='left'>
      <span className="highlight">REALIZED</span>
      </OnSlide>
      </h2>
    </OnSlide>
      <div className='project-wrapper'>
        {DomDisplay}
      </div>
    </>
  )
}

export default Projects
