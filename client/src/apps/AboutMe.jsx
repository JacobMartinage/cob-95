import React from "react";
import "../cob.css";
import aboutme from "../assets/aboutme.png";
export default function AboutMe() {
  return (
    <div className="about-me-container">
      <div className="about-me-header">
        <div className="about-me-image">
          <img
            src={aboutme}
            alt="Jacob Martinage"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="about-me-info">
          <h2>Jacob Martinage</h2>
          <p>Software Engineer • Builder • Lifelong Learner</p>
          <p>Junior at Virginia Tech (CS '26)</p>
        </div>
      </div>

      <div className="about-me-body">
        <p>
          Hey! I’m Jacob, I love figuring out how things work, whether that’s coding an interactive web app, building an AR/VR experience, working with embedded systems, or rewiring a school bus. I love learning new technologies and building new things.
        </p>
        <p>
          Outside of coding, you’ll find me woodworking, forging (I have a small propane forge in my parents' garage), gaming with friends, or working on my bus (yes you read that right, I'm converting a school bus into a RV/camper). I’m always looking for projects that challenge me to learn something new and build something that I'm proud of.
        </p>
        <p>
          Feel free to explore my projects, strike up a chat with JacobBot, or interact with the mailbox to send me a message!
        </p>
      </div>
    </div>
  );
}
