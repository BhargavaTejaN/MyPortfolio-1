import React from "react";
import promptopia from "../assets/portfolio/promptopia.jpg";
import threads from "../assets/portfolio/threads.jpg";
import youtubeClone from "../assets/portfolio/youtubeClone.jpg";
import carhub from "../assets/portfolio/carhub.jpg";
import pokemon from "../assets/portfolio/pokemon.jpg";
import fileManager from "../assets/portfolio/fileManager.jpg";

const portfolios = [
  {
    id: 1,
    src: threads,
    demoLink: "https://threads-sand-one.vercel.app/",
    codeLink:
      "https://github.com/BhargavaTejaN/Threads/tree/main/myapp",
      title: `Threads`,
  },
  {
    id: 2,
    src: pokemon,
    demoLink: "https://64d3a9c31932317737f1045a--cozy-mermaid-bd647c.netlify.app/pokemon/1",
    codeLink: "https://github.com/BhargavaTejaN/Pokemon/tree/main/myapp",
    title: `Pokémon`,
  },
  {
    id: 3,
    src: fileManager,
    demoLink: "https://cloud-file-manager-lime.vercel.app/",
    codeLink: "https://github.com/BhargavaTejaN/cloud-file-manager/tree/main/myapp",
    title: `File Manager`,
  },
    {
    id: 4,
    src: promptopia,
    demoLink: "https://propmtopia-nextjs.vercel.app/",
    codeLink:
      "https://github.com/BhargavaTejaN/Promptopia-crud-nextjs/tree/main/myapp",
      title : `Promptopia`
  },
  {
    id: 5,
    src: carhub,
    demoLink: "https://car-showcase-ecru-eta.vercel.app/",
    codeLink: "https://github.com/BhargavaTejaN/car-showcase/tree/main/myapp",
    title:`Car Showcase`,
  },
  {
    id: 6,
    src: youtubeClone,
    demoLink: "https://classy-mousse-f9c6ff.netlify.app/",
    codeLink: "https://github.com/BhargavaTejaN/youtube-clone/tree/main/myapp",
    title:"Youtube Clone"
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
          {portfolios.map(({ id, src, demoLink, codeLink, title }) => (
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
              <h1 style={{textAlign : "center"}}>{title}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
