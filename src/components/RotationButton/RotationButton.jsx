import "./RotationButton.scss";
import play from "../../assets/icons/play.svg";
import pause from "../../assets/icons/pause.svg";

export const RotationButton = ({ rotate, handleRotateClick }) => {
  return (
    <div className="rotation-button__container">
      <div onClick={handleRotateClick} className="rotation-button">
        <img
          src={rotate ? pause : play}
          alt=""
          className="rotation-button__icon"
        />
        <span className="rotation-button__text">
          {rotate ? `Stop Rotation` : `Start Rotation`}
        </span>
      </div>
    </div>
  );
};
