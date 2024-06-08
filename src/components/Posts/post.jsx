/* eslint-disable react/prop-types */
import "./post.css";
import { MdMoreVert } from "react-icons/md";
import Person from "../../assets/person/1.jpeg";
import PostImage from "../../assets/post/1.jpeg";
import likeIcon from "../../assets/like.png";
import HeartIcon from "../../assets/heart.png";

export default function Post({ posts }) {
  return (
    <div className="post">
      <div className="post_wrapper">
        <div className="post_top">
          <div className="posttopleft">
            <img
              className="postprofile_image"
              src={posts.photo}
              alt="Profile Pic"
            />
            <span className="profile_name">Joseph John</span>
            <span className="post_time">{posts.date}</span>
          </div>
          <div className="posttop_right">
            <MdMoreVert className="posttop_icon" />
          </div>
        </div>
        <div className="post_center">
          <span className="post_text">{posts.desc}</span>
          <img src={PostImage} alt="post image" className="post_image" />
        </div>
        <div className="postbuttom">
          <div className="postbuttom_left">
            <img src={likeIcon} alt="" className="like" />
            <img src={HeartIcon} alt="" className="like" />
            <span className="postlikecounter">{posts.like}</span>
          </div>
          <div className="post_right">
            <span className="postComment_text">{posts.comment}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
