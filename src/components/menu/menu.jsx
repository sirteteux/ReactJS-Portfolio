import "./menu.scss"

export default function menu({menuOpen, setMenuOpen}) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
        <ul>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#intro">Home</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#portfolio">Portfolio</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#skills">Skills</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#experience">Contact</a>
            </li>
        </ul>
    </div>
  )
}
