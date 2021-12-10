import "styles/Feed.scss"
import anonymous from "imgs/profileImg.png"
import 이미지 from "imgs/성산일출봉.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons"
import { faBookmark, faComment, faHeart, faShareSquare, faSmile } from "@fortawesome/free-regular-svg-icons"

function Feed() {
  return (
    <div id="Feed">
      <div className="feed__header">
        <img src={anonymous} alt="profileImg" className="feed__header-profileImg" />
        <div className="feed__header-profileDesc">
          <h6>꿩돈부장</h6>
          <span>제주 토박이</span>
        </div>
        <button className="feed__header-moreBtn">
          <FontAwesomeIcon icon={faEllipsisH} />
        </button>
      </div>

      <div className="feed__contents">
        <img src={이미지} alt="사진" className="content-image" />
      </div>

      <div className="feed__post">
        <div className="post-icons">
          <button className="post-icon"><FontAwesomeIcon icon={faHeart} /></button>
          <button className="post-icon"><FontAwesomeIcon icon={faComment} /></button>
          <button className="post-icon"><FontAwesomeIcon icon={faShareSquare} /></button>
          <div className="post-padding"></div>
          <button className="post-icon last-icon"><FontAwesomeIcon icon={faBookmark} /></button>
        </div>
        <div className="post-likeCount">
          좋아요 520만개
        </div>
        <div className="post-text">
          <span>성산일출봉에서 바라본 일출.. 다들 제주도 놀러와</span>
          <ul className="post-categories">
            <li className="post-category">
              <button className="post-categoryBtn">#명소</button>
            </li>
          </ul>
        </div>
        <div className="post-comments">
          <span className="comment-userName">꿩돈부장</span>
          <span>
            또 나 빼고 갔네
          </span>
        </div>
        <div className="post-timeAgo">
          1시간 전
        </div>
      </div>

      <div className="feed__addComment">
        <button className="addComment-emoji"><FontAwesomeIcon icon={faSmile} /></button>
        <form className="addComment-inputForm">
          <input type="text" placeholder="댓글 달기..." className="addComment-input" />
          <button className="addComment-subBtn">게시</button>
        </form>
      </div>
    </div>
  )
}

export default Feed