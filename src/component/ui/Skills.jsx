import { TECH_SKILLS } from "../../lib/profiledata"
const Skills = () => {
  const DomDisplay = TECH_SKILLS.map(item => {
    <div>
      <img src={item.image} alt="skill" />
      <h3 className="skill-title">{item.title}</h3>
      <p className="skill-desc">{item.description}</p>
    </div>
  })
  return (
    <div className="skills-container">
      {DomDisplay}
    </div>
  )
}

export default Skills
