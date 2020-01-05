import React from "react";
import TwitterLogo from "../../assets/twitter-logo.png";
import "./styles.scss";

export default function Header() {
  return (
    <div className="header">
      <img src={TwitterLogo} alt="Tweets Simulator" />
      <h1>Tweets Simulator</h1>
    </div>
  );
}
