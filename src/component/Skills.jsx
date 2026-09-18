import { TECH_SKILLS } from "../lib/profiledata"
const Skills = () => {
  const DomDisplay = TECH_SKILLS.map(item => {
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
      <h2 className="section-heading">TECHNICAL <br /> <span className="highlight">SKILLS</span></h2>
      <div className="skills-grid">
        {DomDisplay}
      </div>
    </div>
  )
}

export default Skills
