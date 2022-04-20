import Topbar from "./components/topbar/Topbar"
import Intro from "./components/intro/intro"
import Portfolio from "./components/portfolio/portfolio"
import Skills from "./components/skills/skills"
import "./app.scss";
import { useState } from "react";
import Menu from "./components/menu/menu"

function App() {
  const[menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Skills/>
        <Portfolio/>
      </div>
    </div>
  );
}

export default App;
