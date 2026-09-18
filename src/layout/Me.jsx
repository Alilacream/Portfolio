import { ME } from '../lib/profiledata.js'
import Links from '../component/ui/Link.jsx'
const UserHero = () => {
  const molsite = ME
  return (
    <div className="me">
      <img src="me.jpg" alt="mol l portfolio" className='user-img' />
      <div className="me-info">
        <h1 className='user-name'>{molsite.name}</h1>
        <p className='user-slogan unfocused'>{molsite.slogan}</p>
        <Links />
      </div>
    </div>
  )
}

export default UserHero; 
