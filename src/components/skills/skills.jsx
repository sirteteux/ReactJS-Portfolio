import "./skills.scss"

export default function skills() {
  const data = [
    {
      id: 1,
      name: "Language",
      icon: "assets/languageIcon.png",
      desc1:
        "English (Fluent)",
      desc2:
        "Mother Tongue - Chinese (Intermediate)",
    },
    {
      id: 2,
      name: "Computing Language",
      icon: "assets/coding-language.png",
      desc1:
        "HTML/CSS (Advanced)",
      desc2:
        "JavaScript (Advanced)",
      desc3:
        "XML (Advanced)",
      desc4:
        "Java (Advanced)",
      desc5:
        "C++ (Intermediate)",
      desc6:
        "C# (Intermediate)",
      desc7:
        "C (Intermediate)",
      desc8:
        "PHP (Basic)",
      featured: true,
    },
  ];

  return (
    <div className="skills" id="skills">
        <h1>Skills</h1>
        <div className="container">
          {data.map((d)=>(
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src={d.icon} className="right" alt=""/>
            </div>
            <div className="center">
              {d.desc1} <br />
              {d.desc2} <br />
              {d.desc3} <br />
              {d.desc4} <br />
              {d.desc5} <br />
              {d.desc6} <br />
              {d.desc7} <br />
              {d.desc8} <br />
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
          ))}
        </div>
    </div>
  )
}
