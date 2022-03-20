import React from "react";
import "./SocialMedia.css";
import { socialMedia } from "../../portfolio";
import ReactGA from "react-ga";

export default function socialMediaSection() {
  return (
    <div className="social-media-div" style={{ marginBottom: "20px" }}>
      {socialMedia.map((media, idx) => (
        <a
          key={idx}
          href={media.link}
          className={media.class}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            ReactGA.event({
              category: `${media.category}`,
              action: `${media.action}`,
            });
          }}
        >
          <i className={`${media.icon}`}></i>
          <span></span>
        </a>
      ))}
    </div>
  );
}
