import React from "react";
import logo from "../../images/logo-peach.png";
import mailIcon from "../../images/icons8-important-mail-50.png";
import linkedInIcon from "../../images/icons8-linkedin-50.png";
import gitHubIcon from "../../images/icons8-github-50.png";
import resumeIcon from "../../images/icons8-resume-50.png";

const styles = {
  color: "#fab48c"
};
const About = () => {
  return (
    <div>
      <header className="flex items-center h-50 ma4">
        <img src={logo} alt="logo" className="w3 w2 ml7-ns" />
        <h1 className="ml2 f1-ns f3">About</h1>
      </header>
      <section className="flex items-start ml7-ns ml3">
        <address className="mh3">
          <a
            className="light-gray"
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:elizabeth.porter.pevec@gmail.com"
            title="elizabeth.porter.pevec.com"
          >
            <img src={mailIcon} alt="mail" />
          </a>
        </address>
        <address className="mh3">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/elizabeth-porter-8205438/"
            title="LinkedIn"
          >
            <img src={linkedInIcon} alt="linkedIn" />
          </a>
        </address>
        <address className="mh3">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/ela-p-p"
            title="GitHub"
          >
            {" "}
            <img src={gitHubIcon} alt="gitHub" />
          </a>
        </address>
        <address className="mh3">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1E1E4EXLNs2Kg_sFZeo2bNI1-2sbkFfww/view?usp=sharing"
            title="Resume"
          >
            {" "}
            <img src={resumeIcon} alt="resume" />
          </a>
        </address>
      </section>

      <section className="mt7 ml2 tj f6">
        <dl>
          <dt>{" Icon credits: "}</dt>

          <dd>
            <a
              style={styles}
              className="link underline-hover"
              target="_blank"
              rel="noopener noreferrer"
              href="https://icons8.com/icons/set/github"
            >
              GitHub,
            </a>{" "}
          </dd>
          <dd>
            {" "}
            <a
              style={styles}
              className="link underline-hover"
              target="_blank"
              rel="noopener noreferrer"
              href="https://icons8.com/icons/set/linkedin"
            >
              LinkedIn,
            </a>{" "}
          </dd>
          <dd>
            <a
              style={styles}
              className="link underline-hover"
              target="_blank"
              rel="noopener noreferrer"
              href="https://icons8.com/icons/set/important-mail"
            >
              Mail,
            </a>{" "}
          </dd>
          <dd>
            <a
              style={styles}
              className="link underline-hover"
              target="_blank"
              rel="noopener noreferrer"
              href="https://icons8.com/icons/set/resume"
            >
              and Resume icons
            </a>{" "}
            <br />
            by{" "}
            <a
              className="link underline-hover light-pink"
              target="_blank"
              rel="noopener noreferrer"
              href="https://icons8.com"
            >
              Icons8
            </a>
          </dd>
        </dl>
      </section>
    </div>
  );
};

export default About;
