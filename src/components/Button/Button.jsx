import "./Button.scss";

export const Button = ({ icon, text, link }) => {
  return (
    <a className="button" href={link} target="blank">
      <img src={icon} alt="" className="button__icon" />
      <span className="button__text">{text}</span>
    </a>
  );
};
