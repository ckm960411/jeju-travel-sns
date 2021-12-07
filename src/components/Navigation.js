import "styles/Navigation.scss";
import anonymous from "imgs/anonymous.png";
import modrak from "imgs/modrak.png"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,  } from "@fortawesome/free-solid-svg-icons";
import { faBell, faCompass } from "@fortawesome/free-regular-svg-icons";

function Navigation() {
  return (
    <div id="Navbar">
      <div className="inner navbar__inner">

        <Link to="/">
          <h1 className="navbar__logo">
            <img src={modrak} alt="navbarLogo" />
          </h1>
        </Link>

        <div className="navbar__icons">
          <FontAwesomeIcon icon={faCompass} className="navbar__icon moreIcon" />
          <FontAwesomeIcon icon={faBell} className="navbar__icon alertIcon" />
          <Link to="/profile" className="profileLink">
            <img src={anonymous} alt="profileImg" className="profileImg" />
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Navigation;
