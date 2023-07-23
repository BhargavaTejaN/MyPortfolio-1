import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          I am a dedicated and results-driven Software Engineer with over 1 year
          of experience,in Organization Temenos. Experienced Software Engineer
          with expertise in Temenos and 1+ year of hands-on experience. Skilled
          in React.js, Nextjs, Redux-Toolkit, JavaScript, and TypeScript.
          Proficient in building user-friendly websites and applications,
          optimizing performance, and ensuring cross-browser compatibility.
        </p>

        <br />

        <p className="text-xl">
          Strong collaborator in Agile environments, working with
          cross-functional teams to deliver high-quality projects on time and
          within budget. Mentor to junior developers, guiding them in best
          coding practices and workflows. Eager to contribute my knowledge and
          skills to a growth-oriented company. B.Tech in Electronics and
          Communication Engineering with an 8.2 CGPA. Passionate about staying
          updated with the latest web development technologies and trends.
        </p>
      </div>
    </div>
  );
};

export default About;
