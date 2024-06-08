import "./sidebar.css";
import { MdRssFeed } from "react-icons/md";
import { BsChatSquareTextFill } from "react-icons/bs";
import { RiVideoFill } from "react-icons/ri";
import { FaUserGroup } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa";
import { GoQuestion } from "react-icons/go";
import { BsBriefcase } from "react-icons/bs";
import { MdEvent } from "react-icons/md";
import { RiGraduationCapFill } from "react-icons/ri";
import Person from "../../assets/person/2.jpeg";

export default function Sidebar() {
  return (
    <div className="sidebar_container">
      <div className="sidebar_wrapper">
        <ul className="sidebar_list">
          <li className="sidebar_listitem">
            <MdRssFeed className="sidebar_icon" />
            <span className="sidebar_text">Feeds</span>
          </li>
          <li className="sidebar_listitem">
            <BsChatSquareTextFill className="sidebar_icon" />
            <span className="sidebar_text">Chats</span>
          </li>
          <li className="sidebar_listitem">
            <RiVideoFill className="sidebar_icon" />
            <span className="sidebar_text">Videos</span>
          </li>
          <li className="sidebar_listitem">
            <FaUserGroup className="sidebar_icon" />
            <span className="sidebar_text">Groups</span>
          </li>
          <li className="sidebar_listitem">
            <FaBookmark className="sidebar_icon" />
            <span>Bookmarks</span>
          </li>
          <li className="sidebar_listitem">
            <GoQuestion className="sidebar_icon" />
            <span className="sidebar_text">Questions</span>
          </li>
          <li className="sidebar_listitem">
            <BsBriefcase className="sidebar_icon" />
            <span className="sidebar_text">Jobs</span>
          </li>
          <li className="sidebar_listitem">
            <MdEvent className="sidebar_icon" />
            <span className="sidebar_text">Events</span>
          </li>
          <li className="sidebar_listitem">
            <RiGraduationCapFill className="sidebar_icon" />
            <span className="sidebar_text">Courses</span>
          </li>
        </ul>
        <button className="sidebar_button">Show More</button>
        <hr className="sidebar_hr" />
        <ul className="sidebar_friendlist">
          <li className="sidebar_friend">
            <img src={Person} alt="person" />
            <span className="sidebar_friendname">Joseph John</span>
          </li>
          <li className="sidebar_friend">
            <img src={Person} alt="person" />
            <span className="sidebar_friendname">Joseph John</span>
          </li>
          <li className="sidebar_friend">
            <img src={Person} alt="person" />
            <span className="sidebar_friendname">Joseph John</span>
          </li>
          <li className="sidebar_friend">
            <img src={Person} alt="person" />
            <span className="sidebar_friendname">Joseph John</span>
          </li>
          <li className="sidebar_friend">
            <img src={Person} alt="person" />
            <span className="sidebar_friendname">Joseph John</span>
          </li>
          <li className="sidebar_friend">
            <img src={Person} alt="person" />
            <span className="sidebar_friendname">Joseph John</span>
          </li>
          <li className="sidebar_friend">
            <img src={Person} alt="person" />
            <span className="sidebar_friendname">Joseph John</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
