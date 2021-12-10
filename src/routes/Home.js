import { faBiking, faCampground, faCoffee, faMountain, faUtensils } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Main from "components/Main";
import SideBar from "components/SideBar";
import subImg from "imgs/돌하르방.png";
import mainImgJeju from "imgs/제주도2.png";
import "styles/Home.scss";

function Home() {
  return (
    <div id="Home">
      <section className="home__banner">
        <div className="inner banner__inner">
          <img src={subImg} alt="topImg" className="home__topImg" />
          <div className="banner">

            <div className="banner-content">
              <h1 className="banner-content-title">
                <span>모드락</span>에서 당신의 제주일기를 공유하세요
              </h1>
              <p>당신이 보고 겪은 아름다운 제주,</p>
              <p>경험을 나누고!</p>
              <p>행복은 더하고!</p>
            </div>

            <div className="home__mainImg-wrapper">
              <img src={mainImgJeju} alt="maingImg" className="home__mainImg" />
            </div>

          </div>
        </div>
      </section>

      <section className="home__categoryBar">
        <div className="inner categoryBar__inner">
          <ul className="categoryList">
            <li className="categoryList__item">
              <button className="categoryList__btn">
                <FontAwesomeIcon icon={faUtensils} />
                <span> 맛집</span>
              </button>
            </li>
            <li className="categoryList__item">
              <button className="categoryList__btn">
                <FontAwesomeIcon icon={faCoffee} />
                <span> 카페</span>
              </button>
            </li>
            <li className="categoryList__item">
              <button className="categoryList__btn">
                <FontAwesomeIcon icon={faMountain} />
                <span> 명소</span>
              </button>
            </li>
            <li className="categoryList__item">
              <button className="categoryList__btn">
                <FontAwesomeIcon icon={faCampground} />
                <span> 숙박</span>
              </button>
            </li>
            <li className="categoryList__item">
              <button className="categoryList__btn">
                <FontAwesomeIcon icon={faBiking} />
                <span> 액티비티</span>
              </button>
            </li>
          </ul>
        </div>
      </section>

      <section className="home__containers">
        <div className="inner homeContainer__inner">
          <SideBar />
          <Main />
        </div>
      </section>
    </div>
  );
}

export default Home;
