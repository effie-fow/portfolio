import "./Projects.scss";
import halfFullLogo from "../../assets/logos/half-full.png";
import reactLogo from "../../assets/logos/react.svg";
import expressLogo from "../../assets/logos/express.svg";
import mySqlLogo from "../../assets/logos/mysql.svg";
import nodeLogo from "../../assets/logos/node.svg";
import mapboxLogo from "../../assets/logos/mapbox.svg";
import gitHubLogo from "../../assets/logos/github-light.svg";
import halfFullCircleLogo from "../../assets/logos/half-full-circle.png";

import { IconCard } from "../../components/IconCard/IconCard";
import { Button } from "../../components/Button/Button";

export const Projects = () => {
  return (
    <article className="projects">
      <div className="projects__information">
        <img src={halfFullLogo} alt="Half Full" className="projects__logo" />
        <p className="projects__details">
          The most recent project I have chosen to spotlight here is my Capstone
          Project, ‘Half Full Refills’, which I designed and created at
          BrainStation’s Software Engineering Bootcamp in London.
        </p>
        <p className="projects__details">
          ‘Half Full’ is the store locator connecting you to the best produce
          and products in your community. It aims to make it easy to support
          local people and businesses, feel good about your waste-free shopping,
          and eat well.
        </p>
        <p className="projects__details">
          I took heaps of joy and a lot of pride in building my first full-stack
          app. It was the perfect way to hone the skills I had gained throughout
          the bootcamp, whilst also taking the opportunity to build on my
          capabilities.
        </p>
      </div>
      <div className="projects__tech-stack-container">
        <h2 className="projects__subheading">Tech Stack</h2>
        <div className="projects__tech-stack-icons">
          <IconCard icon={reactLogo} name="React" />
          <IconCard icon={expressLogo} name="Express" />
          <IconCard icon={mySqlLogo} name="MySQL" />
          <IconCard icon={nodeLogo} name="Node" />
          <IconCard icon={mapboxLogo} name="Mapbox" />
        </div>
      </div>
      <div className="projects__buttons-container">
        <Button
          icon={gitHubLogo}
          text="GitHub Repository"
          link="https://github.com/effie-fow/half-full-refills-client"
        />
        <Button
          icon={halfFullCircleLogo}
          text="Half Full (Deployed)"
          link="https://www.halffullrefills.com"
        />
      </div>
    </article>
  );
};
