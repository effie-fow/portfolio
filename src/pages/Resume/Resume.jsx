import "./Resume.scss";
import typescript from "../../assets/logos/typescript.svg";
import { BrainStationCard } from "../../components/BrainStationCard/BrainStationCard";
import { IconCard } from "../../components/IconCard/IconCard";
import { Proficiences } from "../../components/Proficiences/Proficiences";
import { Experience } from "../../components/Experience/Experience";

export const Resume = () => {
  return (
    <article className="resume">
      <h1 className="resume__heading">Resume</h1>
      <div className="resume__details">
        <section className="resume__skills">
          <h2 className="resume__subheading">Proficiences</h2>
          <Proficiences />
          <div className="resume__learning">
            <h2 className="resume__subheading">Currently Learning</h2>
            <IconCard icon={typescript} name="TypeScript" />
          </div>
          <div className="resume__education">
            <h2 className="resume__subheading">BrainStation</h2>
            <BrainStationCard />
          </div>
        </section>
        <section className="resume__experience">
          <h2 className="resume__subheading">Experience</h2>
          <Experience />
        </section>
      </div>
    </article>
  );
};
