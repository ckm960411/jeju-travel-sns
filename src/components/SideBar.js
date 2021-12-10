import "styles/SideBar.scss";
import anonymous from "imgs/profileImg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faCog,
  faCommentDots,
  faHighlighter,
  faMapMarkedAlt,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function SideBar() {
  const [toggleSideBar, setToggleSideBar] = useState(false);

  return (
    <section id="SideBar" style={toggleSideBar ? {left: 0} : {left: '-26rem'}}>
      <div className="sideBar__profile">
        <img src={anonymous} alt="profileImg" className="sideBar__profileImg" />
        <div className="sideBar__profile-desc">
          <h6 className="sideBar__profile-userName">꿩돈부장</h6>
          <span className="sideBar__profile-userLevel">제주 토박이</span>
        </div>
        <button>
          <FontAwesomeIcon icon={faCog} className="sideBar__profileIcon" />
        </button>
      </div>

      <ul className="sideBar__categories">
        <li className="sideBar__category">
          <FontAwesomeIcon icon={faCommentDots} className="sideBar-icon" />
          Feeds
        </li>
        <li className="sideBar__category">
          <FontAwesomeIcon icon={faUserFriends} className="sideBar-icon" />
          Friends
        </li>
        <li className="sideBar__category">
          <FontAwesomeIcon icon={faHighlighter} className="sideBar-icon" />
          Recommends
        </li>
        <li className="sideBar__category">
          <FontAwesomeIcon icon={faMapMarkedAlt} className="sideBar-icon" />
          Map
        </li>
      </ul>

      <button
        className="sideBar__toggleBtn"
        onClick={() => {
          setToggleSideBar((prev) => !prev);
        }}
      >
        <FontAwesomeIcon icon={faAngleRight} className="toggleIcon" />
      </button>
    </section>
  );
}

export default SideBar;
