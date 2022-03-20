import React from "react";
import { withRouter } from "react-router-dom";
import Home from "../home/HomeComponent";
import Education from "../education/EducationComponent";
import Experience from "../experience/Experience";
import Contact from "../contact/ContactComponent";
import Projects from "../projects/Projects";

const Pages = withRouter(({ location, ...props }) => {
  switch (location.pathname) {
    case "/":
      return <Home {...props} />;
    case "/education":
      return <Education {...props} />;
    case "/projects":
      return <Projects {...props} />;
    case "/experience":
      return <Experience {...props} />;
    case "/contact":
      return <Contact {...props} />;
    default:
      return <Home {...props} />;
  }
});

export default Pages;
