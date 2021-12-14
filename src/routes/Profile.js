import profileImg from "imgs/profileImg.png"
import "styles/Profile.scss"

function Profile() {
  return (
    <div id="Profile">
      <div className="inner profile__inner">
        <section className="profile__header">
          <div className="header-imgArea">
            <img src={profileImg} alt="profile-img" className="profile__profileImg" />
          </div>
          <div className="header-descriptions">
            <h1>꿩돈부장</h1>
            <ul className="descriptions-list">
              <li>게시물 <span>24</span></li>
              <li>팔로워 <span>142</span></li>
              <li>팔로우 <span>184</span></li>
            </ul>
            <h6 className="header-userName">최경민</h6>
          </div>
        </section>

        <section className="profile__main">
          main
        </section>
      </div>
    </div>
  )
}

export default Profile