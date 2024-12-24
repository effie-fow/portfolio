import "./Experience.scss";
import resume from "../../assets/files/effie-fowler-resume.pdf";

export const Experience = () => {
  return (
    <>
      <p className="experience__plain-text">
        I love web development because in it I have discovered endless
        opportunities to learn, flex my creative muscles, and problem solve as
        an individual, as part of a team, and a global community.
      </p>
      <p className="experience__plain-text">
        As a software engineer, I draw from skills I have developed at Kraken
        and BrainStation, whilst harnessing a range of professional practices
        through my time as in the charity sector. Given autonomy and a solo
        project, I work enthusiastically and responsibly, but equally welcome
        opportunities to collaborate with other developers, adjacent teams or
        stakeholders. My suitability for this industry is found primarily in my
        patience, attention to detail and adaptability, which I have honed
        through a varied workload on both long-term projects and reactive,
        time-sensitive assignments alike.
      </p>
      <p className="experience__plain-text">
        Interested in finding out more? Please{" "}
        <a
          download="effie-fowler.pdf"
          target="_blank"
          href={resume}
          className="experience__link"
        >
          download my full resume
        </a>
        , or keep browsing my portfolio to view my work.
      </p>
    </>
  );
};
