import "./Footer.scss";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer">
      <nav className="footer__nav">
        <ul className="footer__list">
          <li className="footer__list-item">
            <NavLink
              to="/resume"
              className={({ isActive, isPending }) =>
                isPending
                  ? "footer__link footer__link--first"
                  : isActive
                  ? "footer__link footer__link--first footer__link--active"
                  : "footer__link footer__link--first"
              }
            >
              Resume
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive, isPending }) =>
                isPending
                  ? "footer__link"
                  : isActive
                  ? "footer__link footer__link--active"
                  : "footer__link"
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/interests"
              className={({ isActive, isPending }) =>
                isPending
                  ? "footer__link"
                  : isActive
                  ? "footer__link footer__link--active"
                  : "footer__link"
              }
            >
              Interests
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive, isPending }) =>
                isPending
                  ? "footer__link"
                  : isActive
                  ? "footer__link footer__link--active"
                  : "footer__link"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </footer>
  );
};
