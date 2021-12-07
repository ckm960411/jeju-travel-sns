import subImg from "imgs/돌하르방.png"
import mainImgJeju from "imgs/제주도2.png"
import "styles/Home.scss"

function Home() {
  return (
    <div id="Home">
      <section className="home__banner">
        <div className="inner banner__inner">
          <img src={subImg} alt="topImg" className="home__topImg" />
          <div className="banner">
            <div className="banner-content">
              <h1 className="banner-content-title"><span className="banner-content-span">모드락</span>에서 당신의 제주일기를 공유하세요</h1>
              <p className="banner-content-description">당신이 보고 겪은 아름다운 제주,</p>
              <p className="banner-content-description">경험을 나누고!</p>
              <p className="banner-content-description">행복은 더하고!</p>
            </div>
            <div className="home__mainImg-wrapper">
              <img src={mainImgJeju} alt="maingImg" className="home__mainImg" />
            </div>
          </div>
        </div>
      </section>
        
        <section className="categoryBar">
          <div className="inner categoryBar__inner">
            <ul className="categoryList">
              <li className="categoryList__item"><button className="categoryList__btn">맛집</button></li>
              <li className="categoryList__item"><button className="categoryList__btn">카페</button></li>
              <li className="categoryList__item"><button className="categoryList__btn">명소</button></li>
              <li className="categoryList__item"><button className="categoryList__btn">숙박</button></li>
              <li className="categoryList__item"><button className="categoryList__btn">액티비티</button></li>
            </ul>
          </div>
          
        </section>
        

    </div>
  )
}

export default Home