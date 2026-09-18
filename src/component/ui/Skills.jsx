import { TECH_SKILLS } from "../../lib/profiledata"
const Skills = () => {
  const DomDisplay = TECH_SKILLS.map(item => {
    <div className="skill">
      <img src={item.image} alt="skill">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
    </div>
  })
  return (
    <div className="skills-container">
      {DomDisplay}
    </div>
  )
}

export default Skills
