import Hover from "../../transition/Hover"
const Year = (props) => {

  return (
    <Hover>
      <p className="year-num">+{props.number} <br /> <span className="year-label">{props.label}</span></p>
    </Hover>
  )
}

export default Year
