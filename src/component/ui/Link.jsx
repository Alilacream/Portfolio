import { IconBrandGithub, IconBrandLinkedin, IconEmailStamp } from "@tabler/icons-react";

import { ME } from '../../lib/profiledata.js'
const Links = () => {
  const molsite = ME

  return (
    <div className="my-links">
      <a href={molsite.email}>
        <IconEmailStamp className="email-button" color="lime" />
      </a>
      <a href={molsite.github}>
        <IconBrandGithub className="github-button" color="lime" />
      </a>
      <a href={molsite.linkdin}>
        <IconBrandLinkedin className="linkedin-button" />
      </a>
    </div>
  )
}

export default Links;
