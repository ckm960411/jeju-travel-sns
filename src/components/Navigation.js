import "styles/Navigation.scss";
import anonymous from "imgs/profileImg.png";
import modrak from "imgs/modrak.png"
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes,  } from "@fortawesome/free-solid-svg-icons";
import { faBell, faCompass } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import styled from 'styled-components'

function Navigation({ onLogoutClick }) {
  const navigate = useNavigate()

  const [useSearch, setUseSearch] = useState(false)
  const [toggleProfile, setToggleProfile] = useState(false)

  const Form = styled.form`
    @media screen and (min-width: 768px) {
      display: flex;
    }
    @media screen and (max-width: 768px) {
      ${useSearch ? 'display: flex' : 'display: none'}
    }
  `
  
  return (
    <div id="Navbar">
      <div className="inner navbar__inner">

        <Link to="/" className="navbar__logo-link">
          <h1 className="navbar__logo">
            <img src={modrak} alt="navbarLogo" />
          </h1>
        </Link>

        <Form onSubmit className="navbar__searchForm" >
          <input type="text" placeholder="제주의 명소를 검색해보세요" className="navbar__inputForm" />
          <button className="navbar__searchBtn">
            <FontAwesomeIcon icon={faSearch} className="searchBtn-icon" />
          </button>
          <button className="navbar__closeBtn" onClick={(e) => {
            e.preventDefault()
            setUseSearch(false)
          }}>
            <FontAwesomeIcon icon={faTimes} className="closeBtn-icon" />
          </button>
        </Form>

        <div className="navbar__icons">
          <FontAwesomeIcon icon={faSearch} className="navbar__icon searchIcon" onClick={() => {
            setUseSearch(true)
          }}  />
          <FontAwesomeIcon icon={faCompass} className="navbar__icon moreIcon" />
          <FontAwesomeIcon icon={faBell} className="navbar__icon alertIcon" />
          <div className="profileBtn">
            <img src={anonymous} alt="profileImg" className="profileImg" onClick={() => {
              setToggleProfile(prev => !prev)
            }} />
            <ul className="profileBtn-toggleMenu" style={toggleProfile ? {display: 'flex'} : {display: 'none'}}>
              <li><Link to="/profile" className="profile-link" onClick={() => { 
                setToggleProfile(false) 
              }}>프로필로 이동</Link></li>
              <li><button onClick={() => { 
                setToggleProfile(false) 
                onLogoutClick()
                navigate('/')
              }}>로그아웃</button></li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Navigation;
