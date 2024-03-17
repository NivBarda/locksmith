import React from "react";
import bodyItem from "./bodyItem.css";
function BodyItem({ item: { image, title, id } }) {
  return (
      <div
        className="contentContainer"
        
      >
        <div
          className="image-col"
          
        >
          <img src={image} alt="" />
        </div>
        <div className="text-col">
          <h2>{title}</h2>
        </div>
      </div>

  );
}
export default BodyItem;
