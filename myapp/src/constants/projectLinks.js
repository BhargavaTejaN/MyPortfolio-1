import promptopia from "../assets/portfolio/promptopia.jpg";
import threads from "../assets/portfolio/threads.jpg";
import pokemon from "../assets/portfolio/pokemon.jpg";
import fileManager from "../assets/portfolio/fileManager.jpg";
import snapgram from '../assets/portfolio/snapgram.jpg';
import toursAndTravel from '../assets/portfolio/toursAndTravel.jpg';

export const portfolios = [
  {
    id: 1,
    src: snapgram,
    demoLink: "https://snap-threads.vercel.app/signin",
    codeLink: "https://github.com/BhargavaTejaN/SnapThreads",
    title: `SnapThreads`,
  },
  {
    id: 2,
    src: toursAndTravel,
    demoLink:
      "https://voluble-daifuku-a090e6.netlify.app/login",
    codeLink: "https://github.com/BhargavaTejaN/Tour-and-travel",
    title: `Tours And Travel`,
  },
  {
    id: 3,
    src: threads,
    demoLink: "https://threads-sand-one.vercel.app/",
    codeLink: "https://github.com/BhargavaTejaN/Threads/tree/main/myapp",
    title: `Threads`,
  },
  {
    id: 4,
    src: pokemon,
    demoLink:
      "https://64d3a9c31932317737f1045a--cozy-mermaid-bd647c.netlify.app/pokemon/1",
    codeLink: "https://github.com/BhargavaTejaN/Pokemon/tree/main/myapp",
    title: `Pokémon`,
  },
  {
    id: 5,
    src: fileManager,
    demoLink: "https://cloud-file-manager-lime.vercel.app/",
    codeLink:
      "https://github.com/BhargavaTejaN/cloud-file-manager/tree/main/myapp",
    title: `File Manager`,
  },
  {
    id: 6,
    src: promptopia,
    demoLink: "https://propmtopia-nextjs.vercel.app/",
    codeLink:
      "https://github.com/BhargavaTejaN/Promptopia-crud-nextjs/tree/main/myapp",
    title: `Promptopia`,
  },
];
