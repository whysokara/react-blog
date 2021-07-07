import "./topbar.css";
export default function Topbar() {
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIconfab fa-facebook-f"></i>
        <i className="topIconfab fa-twitter"></i>
        <i className="topIconfab fa-pinterest-p"></i>
        <i className="topIconfab fa-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">HOME</li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">WRITE</li>
          <li className="topListItem">LOGOUT</li>
        </ul>
      </div>
      <div className="topRight">
        <img src="" alt="" className="topImg" />
      </div>
    </div>
  );
}
