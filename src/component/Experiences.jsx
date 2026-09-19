

function ListOFActivity(array) {
  return array.map(e => {
    return (<li>{e}</li>)
  })
}
const Experiences = ({ experiences }) => {
  const DomDisplay = experiences.map(item => {
    return (<div className="exp-card">
      <h3 className="exp-title">{item.title}</h3>
      <p className="exp-slogan">{item.slogan}</p>
      <ul className="exp-list">
        {ListOFActivity(item.done)}
      </ul>
      <span className="exp-time">{item.span}</span>
    </div>
    )
  })
  return (
    <div className="skills-container">
      <h2 className="section-heading">+2 YEARS OF <br /> <span className="highlight">EXPERIENCE</span></h2>
      {DomDisplay}
    </div>
  )
}

export default Experiences
