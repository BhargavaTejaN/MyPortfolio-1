import React from "react";
import promptopia from "../assets/portfolio/promptopia.jpg";
import jobbyApp from "../assets/portfolio/jobbyApp.jpg";
import nxtWatch from "../assets/portfolio/nxtWatch.jpg";
import carhub from "../assets/portfolio/carhub.jpg";
import shopping from "../assets/portfolio/shopping.jpg";
import digitalTimer from "../assets/portfolio/digitalTimer.jpg";

const portfolios = [
  {
    id: 1,
    src: promptopia,
    demoLink: "https://propmtopia-nextjs.vercel.app/",
    codeLink:
      "https://github.com/BhargavaTejaN/Promptopia-crud-nextjs/tree/main/myapp",
  },
  {
    id: 2,
    src: carhub,
    demoLink: "https://car-showcase-ecru-eta.vercel.app/",
    codeLink: "https://github.com/BhargavaTejaN/car-showcase/tree/main/myapp",
  },
  {
    id: 3,
    src: nxtWatch,
    demoLink: "https://utubeclone.ccbp.tech/login",
    codeLink: "https://github.com/BhargavaTejaN/YouTubeClone-NXTWatch/tree/main/myapp",
  },
  {
    id: 4,
    src: shopping,
    demoLink: "https://shoppingcloneap.ccbp.tech/login",
    codeLink: "https://github.com/BhargavaTejaN/Shopping-App/tree/main/myapp",
  },
  {
    id: 5,
    src: jobbyApp,
    demoLink: "https://jobyapp.ccbp.tech/login",
    codeLink: "https://github.com/BhargavaTejaN/JobbyApp/tree/main/myapp",
  },
  {
    id: 6,
    src: digitalTimer,
    demoLink: "https://stopwatchdigitl.ccbp.tech/",
    codeLink: "https://github.com/BhargavaTejaN/DigitalTimerApp/tree/main/my-app",
  },
];

const Portfolio = () => {

  const openDemoLink = (demolink) => {
    window.open(demolink, "_blank");
  }

  const openCode = (codeLink) => {
    window.open(codeLink,"_blank");
  }

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full md:h-screen text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demoLink, codeLink }) => (
            <div key={id} className=" shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button onClick={() => openDemoLink(demoLink)} className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button onClick={() => openCode(codeLink)} className="px-6 py-3 w-1/2 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
