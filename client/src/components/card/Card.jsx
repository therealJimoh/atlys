import React from "react";
import "./card.css";

const Card = () => {
  return (
    <div className="Container">
      <div className="CardWrapper">
        <div className="ContentName">
          <p className="name">Spot</p>
          <p className="color">
            Color: <span>orange</span>
          </p>
          <p className="time">
            Current Time: <span>Portugal(12:10:20 AM)</span>
          </p>
        </div>
        <button className="DeleteContent"> x Delete</button>
      </div>
    </div>
  );
};

export default Card;
