import React from "react";
import "./DegreeCard.css";
import { Fade } from "react-reveal";
import { style } from "glamor";

function DegreeCard(props) {
  const degree = props.degree;
  const theme = props.theme;

  const style_img_container = style({
    width: "150px",
    height: "auto",
    padding: "10px",
    marginRight: "50px",
    "@media (max-width: 768px)": {
      width: "100px",
    },
  });

  const style_img = style({
    marginTop: "-11px",
    marginLeft: "55px",
    marginBottom: "-45px",
    maxWidth: "50%",
    maxHeight: "50%",
    transform: "scale(50%, 50%)",
    "@media (max-width: 768px)": {
      width: "100px",
      marginLeft: "-15px",
      marginBottom: "-42px",
    },
  });

  const style_duration = style({
    color: "#FFFFFF",
  });

  const card_body = style({
    borderRadius: "7px",
    width: "90%",
    margin: "10px",
    color: "rgba(255, 255, 255, 1)",
    boxShadow: `0 5px 15px ${theme.shadow}`,
    transition: "all 0.2s ease-in-out",
    "@media (max-width: 768px)": {
      width: "100%",
    },
  });

  const button_visit = style({
    textDecoration: "none",
    color: "rgba(255, 255, 255, 1)",
    background: `${theme.accentColor}`,
    padding: "15px 15px",
    marginTop: "25px",
    borderRadius: "4px",
    borderWidth: "0px",
    marginBottom: "20px",
    width: "200px",
    height: "50px",
    fontWeight: "bold",
    fontFamily: "Google Sans Regular",
    fontSize: "17px",
    transition: "all 0.2s ease-in-out",
    cursor: "pointer",
    ":hover": {
      color: "rgba(255, 255, 255, 1)",
      boxShadow: `0 5px 10px ${theme.accentColor}`,
    },
  });

  return (
    <div className="degree-card">
      <Fade right duration={2000} distance="40px">
        <div {...card_body}>
          <div
            className="body-header"
            style={{ backgroundColor: theme.header }}
          >
            <div className="body-header-title">
              <h2 className="card-title" style={{ color: "#FFFFFF" }}>
                {degree.title}
              </h2>
              <h3 className="card-subtitle" style={{ color: "#FFFFFF" }}>
                {degree.subtitle}
              </h3>
            </div>
            <div className="body-header-duration">
              <div {...style_img_container}>
                <img
                  {...style_img}
                  src={require(`../../assests/images/${degree.logo_path}`)}
                  alt={degree.alt_name}
                />
              </div>
              <h3 className="duration" {...style_duration}>
                {degree.duration}
              </h3>
            </div>
          </div>
          <div className="body-content">
            {degree.descriptions.map((sentence, idx) => (
              <p
                key={idx}
                className="content-list"
                style={{ color: theme.text }}
              >
                {sentence}
              </p>
            ))}
            <a
              href={degree.website_link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", textAlign: "center" }}
            >
              <p
                {...button_visit}
                style={{
                  marginRight: "23px",
                  textDecoration: "none",
                  float: "right",
                  backgroundColor: theme.accentColor,
                }}
              >
                Visit Website
              </p>
            </a>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default DegreeCard;
