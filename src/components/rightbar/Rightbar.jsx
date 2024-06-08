import "./rightbar.css";
import Gift from "../../assets/gift.png";
import Ad from "../../assets/ad.png";
import Img from "../../assets/person/3.jpeg";

export default function Rightbar() {
  return (
    <div className="rightbar_container">
      <div className="rightbar_wrapper">
        <div className="birthday_container">
          <img src={Gift} alt="" className="birthday_image" />
          <span className="birthday_text">
            <b>Pola Foster</b> and <b>3 other friends</b> are celebrating their
            birthday today.
          </span>
        </div>
        <img src={Ad} alt="" className="rightbar_ad" />
        <h4 className="rightbar_title">Online Friends</h4>
        <ul className="rightbarfriend_list">
          <li className="rightbar_friend">
            <div className="rightbarprofileImg_container">
              <img src={Img} alt="" className="rightbar_Imgprofile" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Joe Carter</span>
          </li>
          <li className="rightbar_friend">
            <div className="rightbarprofileImg_container">
              <img src={Img} alt="" className="rightbar_Imgprofile" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Joe Carter</span>
          </li>
          <li className="rightbar_friend">
            <div className="rightbarprofileImg_container">
              <img src={Img} alt="" className="rightbar_Imgprofile" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Joe Carter</span>
          </li>
          <li className="rightbar_friend">
            <div className="rightbarprofileImg_container">
              <img src={Img} alt="" className="rightbar_Imgprofile" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Joe Carter</span>
          </li>
          <li className="rightbar_friend">
            <div className="rightbarprofileImg_container">
              <img src={Img} alt="" className="rightbar_Imgprofile" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Joe Carter</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
