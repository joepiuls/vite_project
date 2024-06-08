import "./toolbar.css";
import { FaSearch } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import Person from "../../assets/person/1.jpeg";
function Toolbar() {
  return (
    <div className="toolbar">
      <div className="toolbar__left">
        <span className="toolbar__brand">Lamasocial</span>
      </div>
      <div className="toolbar__center">
        <div className="toolbar__search">
          <FaSearch className="toolbar__search-icon" />
          <input
            type="search"
            className="toolbar__search-input"
            placeholder="Search for friend, post, video"
          />
        </div>
      </div>
      <div className="toolbar__right">
        <div className="toolbar__links">
          <span className="toolbar__link">Homepage</span>
          <span className="toolbar__link">Timeline</span>
        </div>
        <div className="toolbar__icons">
          <div className="toolbar__icon-item">
            <IoMdPerson className="toolbar__icon" />
            <span className="toolbar__badge">1</span>
          </div>
          <div className="toolbar__icon-item">
            <MdMessage className="toolbar__icon" />
            <span className="toolbar__badge">2</span>
          </div>
          <div className="toolbar__icon-item">
            <IoIosNotifications className="toolbar__icon" />
            <span className="toolbar__badge">4</span>
          </div>
        </div>
        <div className="toolbar__profile">
          <img src={Person} alt="Profile Picture" className="person" />
        </div>
      </div>
    </div>
  );
}

export default Toolbar;
