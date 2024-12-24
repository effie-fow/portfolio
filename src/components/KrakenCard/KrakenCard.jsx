import "../BrainStationCard/BrainStationCard.scss";
import kraken from "../../assets/logos/kraken.png";

export const KrakenCard = () => {
  return (
    <article className="brainstation-card">
      <img src={kraken} alt="" className="brainstation-card__logo" />
      <div className="brainstation-card__details">
        <h3 className="brainstation-card__subheading">
          Associate Frontend Developer
        </h3>
        <span className="brainstation-card__grade">
          Octopus Energy UK Dashboarding
        </span>
        <span className="brainstation-card__date">NOV 2024 - PRESENT</span>
      </div>
    </article>
  );
};
