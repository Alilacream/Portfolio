const Year = (props) => {
  return (
    <>
      <p className="year-num">+{props.number} <br /> <span className="year-label">{props.label}</span></p>
    </>
  )
}

export default Year
