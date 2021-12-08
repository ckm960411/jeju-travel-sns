import "styles/Feed.scss"
import anonymous from "imgs/profileImg.png"
import chelsearoom from "imgs/chelsea-dressing-room.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons"
import { faBookmark, faComment, faHeart, faShareSquare, faSmile } from "@fortawesome/free-regular-svg-icons"

function Feed() {
  return (
    <div className="main__feed">
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
        <img src={chelsearoom} alt="사진" className="content-image" />
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
          <span>첼시 드레싱룸에 놀러왔다 룰루랄라링</span>
        </div>
        <div className="post-comments">
          <span className="comment-userName">꿩돈부장</span>
          <span>
            이야 정말 예쁘다 나도 오늘부터 첼시팬!
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