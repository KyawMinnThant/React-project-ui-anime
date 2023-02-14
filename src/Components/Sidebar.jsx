import React from "react";
import "../Component-css/Sidebar.css";
const Sidebar = () => {
  return (
    <div className="  me-5 p-3 " id="sidebar">
      <div className=" d-flex flex-column mx-auto justify-content-between align-items-center">
        <div className="d-flex flex-column align-items-center ">
          <h4>
            <i>Dax</i>
          </h4>
          <div
            className="mt-4 d-flex flex-column
          "
          >
            <i className="bi bi-film mt-4  fs-5 "></i>
            <i className="bi bi-bookmarks-fill disable mt-4  fs-5 "></i>
            <i className="bi bi-tv disable mt-4  fs-5 "></i>
            <i className="bi bi-gear disable mt-4  fs-5 "></i>
          </div>
        </div>
        <div className=" ">
          <img
            src="../resources/AOT.jpg"
            className="profile"
            width={40 + "px"}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
