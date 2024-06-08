import "./share.css";
import Person from "../../assets/person/1.jpeg";
import { MdVideoLibrary } from "react-icons/md";
import { PiTagSimpleFill } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";
import { FaLaugh } from "react-icons/fa";

export default function Share() {
  return (
    <div className="share">
      <div className="share_wrapper">
        <div className="share_top">
          <img className="shareprofile_img" src={Person} alt="person" />
          <input
            type="text"
            placeholder="Whats on your mind Joseph"
            className="share_input"
          />
        </div>
        <hr className="sharehr" />
        <div className="share_buttom">
          <div className="share_options">
            <div className="share_option">
              <MdVideoLibrary className="shareoption_icon" color="red" />
              <span className="shareoption_text">Photo or Video</span>
            </div>
            <div className="share_option">
              <PiTagSimpleFill className="shareoption_icon " color="blue" />
              <span className="shareoption_text">Tag</span>
            </div>
            <div className="share_option">
              <FaLocationDot className="shareoption_icon" color="green" />
              <span className="shareoption_text">Location</span>
            </div>
            <div className="share_option">
              <FaLaugh className="shareoption_icon" color="brick" />
              <span className="shareoption_text">Feelings</span>
            </div>
          </div>
          <button className="share_button">Share</button>
        </div>
      </div>
    </div>
  );
}
