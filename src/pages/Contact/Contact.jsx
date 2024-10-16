import "./Contact.scss";
import linkedIn from "../../assets/logos/linkedin.svg";
import github from "../../assets/logos/github-light.svg";
import { ButtonCircle } from "../../components/ButtonCircle/ButtonCircle";

export const Contact = () => {
  return (
    <article className="contact">
      <div className="contact__flex-container">
        <h2 className="contact__heading">Effie Fowler</h2>
        <span className="contact__subheading">Software Engineer</span>
        <p className="contact__details">
          Whether you are a fellow developer looking to connect, or a recruiter
          whose interest I have piqued, I would be happy to hear from you.
          Please feel free to reach out to me on LinkedIn or GitHub using the
          links below.
        </p>
        <span className="contact__thank-you">Thanks for stopping by!</span>
        <div className="contact__buttons-container">
          <ButtonCircle
            link="https://www.linkedin.com/in/effiefowler/"
            icon={linkedIn}
            altText="LinkedIn"
          />
          <ButtonCircle
            link="https://github.com/effie-fow"
            icon={github}
            altText="GitHub"
          />
        </div>
      </div>
    </article>
  );
};
