import { IconBrandGithub, IconBrandLinkedin, IconEmailStamp } from "@tabler/icons-react";

const Link = () => {
  const molsite = ME

  return (
    <div className="my-links">
      <a href={molsite.email}>
        <IconEmailStamp className="email-button" />
      </a>
      <a href={molsite.github}>
        <IconBrandGithub className="github-button" />
      </a>
      <a href={molsite.linkedin}>
        <IconBrandLinkedin className="linkedin-button" />
      </a>
    </div>
  )
}

export default Link;
