import "./IconCard.scss";

export const IconCard = ({ icon, name }) => {
  return (
    <div className="icon-card">
      <img src={icon} alt="" className="icon-card__icon" />
      <span className="icon-card__name">{name}</span>
    </div>
  );
};
