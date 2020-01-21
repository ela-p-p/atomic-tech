import React from "react";
import logo from "../images/logo-peach.png";
import faceRecon from "../images/faceRecon-ss.png";
import roboFriends from "../images/RoboFriends-ss.png";
import starWars from "../images/starWars-ss.png";

const styles = {
  color: "#fab48c"
};

const Portfolio = () => {
  return (
    <div>
      <header className="flex items-center h-50 ma4">
        <img src={logo} alt="logo" className="w3 w2 ml7-ns" />
        <h1 className="ml2 f1-ns f3">Portfolio</h1>
      </header>
      <section className="flex justify-center flex-wrap mh7-ns">
        <article className="bg-light-gray mw5 ma3 center grow br4">
          <img
            src={faceRecon}
            className="db w-100 br4 br--top"
            alt="faceRecon app"
          />
          <div className="pa2 ph3-ns pb3-ns">
            <div className="dt w-100 mt1">
              <div className="dtc">
                <h1 style={styles} className="f5 f4-ns mv0">
                  Face Recognition
                </h1>
              </div>
            </div>
            <div className="flex flex-column">
              <p className="f6 lh-copy measure mt2 mid-gray">
                Full stack web page built with React, Node, Express, PostgreSQL and
                Clarifai API
              </p>
              <a
                className="mb2"
                href="https://ela-p-p.github.io/facerecognitionbrain/"
              >
                Webpage
              </a>
              <a
                className="mb2"
                href="https://github.com/ela-p-p/facerecognitionbrain"
              >
                Code: Front-end
              </a>
              <a href="https://github.com/ela-p-p/smart-brain-api">
                Code: Back-end
              </a>
            </div>
          </div>
        </article>

        <article className="bg-light-gray mw5 ma3 center grow br4">
          <img
            src={roboFriends}
            className="db w-100 br4 br--top"
            alt="roboFriends app"
          />
          <div className="pa2 ph3-ns pb3-ns">
            <div className="dt w-100 mt1">
              <div className="dtc">
                <h1 style={styles} className="f5 f4-ns mv0">
                  RoboFriends
                </h1>
              </div>
            </div>
            <div className="flex flex-column">
              <p className="f6 lh-copy measure mt2 mid-gray">
                Front-end web page built with React and Jsonplaceholder API
              </p>
              <a className="mb2" href="https://ela-p-p.github.io/roboFriends/">
                Webpage
              </a>
              <a href="https://github.com/ela-p-p/roboFriends">Code</a>
            </div>
          </div>
        </article>

        <article className="bg-light-gray mw5 ma3 center grow br4">
          <img
            src={starWars}
            className="db w-100 br4 br--top"
            alt="star wars app"
          />
          <div className="pa2 ph3-ns pb3-ns">
            <div className="dt w-100 mt1">
              <div className="dtc">
                <h1 style={styles} className="f5 f4-ns mv0">
                  Star Wars Trivia
                </h1>
              </div>
            </div>
            <div className="flex flex-column">
              <p className="no-underline f6 lh-copy measure mt2 mid-gray">
                Front-end web page built with React and Star Wars API
              </p>
              <a className="mb2" href="https://ela-p-p.github.io/starwars/">
                Webpage
              </a>
              <a href="https://github.com/ela-p-p/starwars">Code</a>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Portfolio;
