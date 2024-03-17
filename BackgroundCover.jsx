import React from "react";
import cover from "../images/cover.jpg";
import "./body.css";
import video from "../images/video.mp4";
function BackgroundCover() {
  return (
    <div className="main">
      <video src={video} autoPlay loop muted />
      {/* autoPlay loop muted ---- PUT IT AS ATTRIBUTE FOR THE VIDEO ELEMENT*/}
      <div className="title-content">
        <h1>Welcome</h1>
        <p>to my site</p>
      </div>
    </div>
  );
}

export default BackgroundCover;
