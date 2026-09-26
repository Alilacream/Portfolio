import Year from "./ui/Year"
const Hero = () => {
  return (
    <div className="hero-nums">
      <></>
      <h1 style={{ fontSize: 110 }}>SOFTWARE<br /><span className="highlight">ENGINEER</span></h1>
      <p style={{ fontSize: 26 }}>Passionate about creating intuitive engaging user experiences,
        specialize in transforming ideas into real Engineered Systems.</p>
      <div className="years-exp">
        <Year number={2} label={"Years Of Experience"} />
        <Year number={5} label={"Project Completed"} />
      </div>
    </div>
  )
}

export default Hero

