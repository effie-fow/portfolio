import "./ButtonCircle.scss";

export const ButtonCircle = ({ link, icon, altText }) => {
  return (
    <a className="button-circle" href={link} target="blank">
      <img src={icon} alt={altText} className="button-circle__icon" />
    </a>
  );
};
