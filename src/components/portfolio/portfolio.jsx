/* eslint-disable default-case */
/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/portfolioList";
import "./portfolio.scss"
import { featuredPortfolio,
        htmlPortfolio,
        cplusPortfolio,
        csharpPortfolio,
        javaPortfolio
} from "../../data";

export default function portfolio() {

  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "html",
      title: "HTML/JS",
    },
    {
      id: "cplus",
      title: "C++",
    },
    {
      id: "csharp",
      title: "C#",
    },
    {
      id: "java",
      title: "Java",
    },
  ];

  useEffect(() => {
    switch(selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "html":
        setData(htmlPortfolio);
        break;
      case "cplus":
        setData(cplusPortfolio);
        break;
      case "csharp":
        setData(csharpPortfolio);
        break;
      case "java":
      setData(javaPortfolio);
      break;
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
        <h1>Projects</h1>
        <ul>
          {list.map((item) => (
            <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
            />
          ))}
        </ul>
        <div className="container">
          {data.map((d) => (
            <div className="item">
              <img
                src={d.img}
                alt=""
              />
              <h3>{d.title}</h3>
            </div>
          ))}
        </div>
    </div>
  )
}
