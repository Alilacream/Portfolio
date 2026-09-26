import OnSlide from "../transition/OnSlide"

const Skills = ({ skills }) => {
  const DomDisplay = skills.map(item => {
    return (
      <div className="skill">
        <img src={item.image} alt="skill" className="skill-img" />
        <div className="skill-align">
          <h3 className="skill-title">{item.title}</h3>

          <p className="skill-desc">{item.skill}</p>
        </div>
      </div>
    )
  })
  return (
    <div className="skills-container">
      <OnSlide direction="right">
      <h2 className="section-heading">TECHNICAL <br /> 
      <OnSlide>
      <span className="highlight">SKILLS</span>
      </OnSlide>
      </h2>
      </OnSlide>
      <div className="skills-grid">
        {DomDisplay}
      </div>
    </div>
  )
}

export default Skills
