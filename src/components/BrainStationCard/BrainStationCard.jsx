import "./BrainStationCard.scss";
import brainstation from "../../assets/logos/brainstation.png";

export const BrainStationCard = () => {
  return (
    <article className="brainstation-card">
      <img src={brainstation} alt="" className="brainstation-card__logo" />
      <div className="brainstation-card__details">
        <h3 className="brainstation-card__subheading">
          Software Engineering Diploma
        </h3>
        <span className="brainstation-card__grade">Final Grade: 96%</span>
        <span className="brainstation-card__date">JUL 2024 - OCT 2024</span>
      </div>
    </article>
  );
};
