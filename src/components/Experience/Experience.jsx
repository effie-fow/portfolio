import "./Experience.scss";
import resume from "../../assets/files/effie-fowler-resume.pdf";

export const Experience = () => {
  return (
    <>
      <p className="experience__plain-text">
        I love web development because in it I have discovered a source of
        endless opportunities to satisfy my desire to learn, flex my creative
        muscles, and problem solve as an individual, as part of a team, and a
        global community.
      </p>
      <p className="experience__plain-text">
        As a software engineer, I draw from the skills I have developed at
        BrainStation, whilst harnessing a wide range of professional practices
        through my time as Communications & Fundraising Manager at a regional
        LGBT+ youth charity. I have worked enthusiastically and responsibly as a
        “one person department”, whilst welcoming opportunities to collaborate
        with adjacent teams, stakeholders and service users. My suitability for
        this industry is found primarily in my patience, attention to detail and
        adaptability, which I have honed through a varied workload on both
        long-term projects and reactive, time-sensitive assignments alike.
      </p>
      <p className="experience__plain-text">
        My excitement to continue my professional journey in software
        engineering stems from an eagerness to be a part of an ever-evolving
        industry, to continue learning, and to contribute to an organisation I
        am passionate about.
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
