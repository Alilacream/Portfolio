import { IconBrandGithub, IconBrandLinkedin, IconMail } from "@tabler/icons-react";

import { ME } from '../../lib/profiledata.js'
const Links = () => {
  const molsite = ME

  return (
    <div className="my-links">
      <a data-social="Mail" style={{ "--acent-color": "red" }} href={molsite.email}>
        <IconMail className="email" />
      </a>
      <a data-social="Github" style={{ "--acent-color": "#333" }} href={molsite.github}>
        <IconBrandGithub className="github" />
      </a>
      <a data-social="Linkedin" style={{ "--acent-color": "#106bff" }} href={molsite.linkdin}>
        <IconBrandLinkedin className="linkedin" />
      </a>
    </div>
  )
}

export default Links;
