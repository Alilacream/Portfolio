import { IconUserCircle, IconBadge, IconTool, IconContract } from "@tabler/icons-react"
export const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/#me">
        <IconUserCircle />
      </a>
      <a href="/#experiences">
        <IconBadge />
      </a>
      <a href="/#skills">
        <IconTool />
      </a>
      <a href="/#contact">
        <IconContract />
      </a>
    </nav>
  )
}

