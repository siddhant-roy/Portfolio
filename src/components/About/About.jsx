import React from "react";
import FooterLink from "../FooterLink/FooterLink";
import Header from "../Header/Header";
import aboutVector from "./../../assets/about_vector.png";
import "./About.css";
import aboutAnime from "./../../assets/about_anime.gif";

const About = () => {
  return (
    <div className="section-container">
      <Header
        heading="About Me"
        details="Developer | SDE Intern @ MFL Educlub | Computer Science Undergrad @ VIT | Uplifting the student community in the field of tech"
      />

      <div className="about-main">
        <div className="about-main-left">
          {/* Subsection 1 */}
          <h3 className="about-sub-head">Student</h3>
          <p className="about-details">
            Currently pursuing a B.Tech degree in Computer Science and
            Engineering from Vellore Institute of Technology. Check out the{" "}
            <a className="about-link-element" href="https://chennai.vit.ac.in/">
              official website!
            </a>
          </p>

          {/* Subsection 2 */}
          <h3 className="about-sub-head">Developer</h3>
          <p className="about-details">
            I've been learning new technologies and building projects. Check out{" "}
            <a
              className="about-link-element"
              href="https://github.com/siddhant-roy"
            >
              my Github profile!
            </a>
          </p>

          {/* Subsection 3 */}
          <h3 className="about-sub-head">Aspiring SDE</h3>
          <p className="about-details">
            I'm actively looking for internship opportunities. Have a great
            opportunity for me?{" "}
            <a
              className="about-link-element"
              href="mailto:siddhant.roy.official@gmail.com"
            >
              Email me the details!
            </a>
          </p>
        </div>

        <div className="about-main-right">
          <img src={aboutAnime} alt="animation" className="about-anime" />
        </div>
      </div>

      <FooterLink
        phrase="Check out my "
        link="projects!"
        toAdress="/projects"
      />
      {/* Vector Frame! */}
      <div className="vector-frame">
        <img src={aboutVector} className="about-vector" alt="about" />
      </div>
    </div>
  );
};

export default About;
