import subImg from "imgs/돌하르방.png"
import mainImgJeju from "imgs/제주도2.png"
import "styles/Home.scss"

function Home() {
  return (
    <div id="Home">
        <div className="inner home__inner">

          <img src={subImg} alt="subImg" className="home__subImg" />
          <div className="home__banner">
            <div className="home__banner-content">
              <h1 className="banner-title"><span className="banner-span">모드락</span>에서 당신의 제주일기를 공유하세요</h1>
              <p className="banner-description">당신이 보고 겪은 아름다운 제주,</p>
              <p className="banner-description">경험을 나누고!</p>
              <p className="banner-description">행복은 더하고!</p>
            </div>
            <div className="home__mainImg-wrapper">
              <img src={mainImgJeju} alt="maingImg" className="home__mainImg" />
            </div>
          </div>

        </div>
      
    </div>
  )
}

export default Home