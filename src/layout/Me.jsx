import { ME } from '../lib/profiledata.js'
const Me = () => {
  const molsite = ME
  return (
    <div className="me">
      <h1>{molsite.name}</h1>
      <p>{molsite.passion}</p>
      <Link />
    </div>
  )
}

export default Me
