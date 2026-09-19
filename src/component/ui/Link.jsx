import { IconBrandGithub, IconBrandLinkedin, IconMail } from "@tabler/icons-react";

import { ME } from '../../lib/profiledata.js'
const Links = () => {
  const molsite = ME

  return (
    <div className="my-links">
      <a href={molsite.email}>
        <IconMail className="email" />
      </a>
      <a href={molsite.github}>
        <IconBrandGithub className="github" />
      </a>
      <a href={molsite.linkdin}>
        <IconBrandLinkedin className="linkedin" />
      </a>
    </div>
  )
}

export default Links;
