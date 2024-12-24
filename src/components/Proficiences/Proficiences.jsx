import "./Proficiences.scss";
import adobe from "../../assets/logos/adobe-creative-cloud.svg";
import blender from "../../assets/logos/blender.svg";
import css from "../../assets/logos/css.svg";
import express from "../../assets/logos/express.svg";
import git from "../../assets/logos/git.svg";
import github from "../../assets/logos/github.svg";
import heroku from "../../assets/logos/heroku.svg";
import html5 from "../../assets/logos/html5.svg";
import javascript from "../../assets/logos/javascript.svg";
import jest from "../../assets/logos/jest.svg";
import mysql from "../../assets/logos/mysql.svg";
import netlify from "../../assets/logos/netlify.svg";
import node from "../../assets/logos/node.svg";
import react from "../../assets/logos/react.svg";
import sass from "../../assets/logos/sass.svg";
import slack from "../../assets/logos/slack.svg";
import typescript from "../../assets/logos/typescript.svg";
import { IconCard } from "../IconCard/IconCard";

export const Proficiences = () => {
  return (
    <div className="proficiences">
      <IconCard icon={react} name="React" />
      <IconCard icon={node} name="Node" />
      <IconCard icon={express} name="Express" />
      <IconCard icon={mysql} name="MySQL" />
      <IconCard icon={javascript} name="JS" />
      <IconCard icon={typescript} name="TS" />
      {/* <IconCard icon={html5} name="HTML" /> */}
      {/* <IconCard icon={css} name="CSS" /> */}
      <IconCard icon={sass} name="Sass" />
      <IconCard icon={jest} name="Jest" />
      {/* <IconCard icon={netlify} name="Netlify" /> */}
      {/* <IconCard icon={heroku} name="Heroku" /> */}
      <IconCard icon={git} name="Git" />
      <IconCard icon={github} name="GitHub" />
      <IconCard icon={slack} name="Slack" />
    </div>
  );
};
