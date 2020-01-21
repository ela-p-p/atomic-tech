import React from "react";
import logo from "../images/logo-peach.png";
import faceRecon from "../images/faceRecon-ss.png";
import roboFriends from "../images/RoboFriends-ss.png";
import starWars from '../images/starWars-ss.png'

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
          <a href="https://ela-p-p.github.io/facerecognitionbrain/" >
          {" "}
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
              <p className="f6 lh-copy measure mt2 mid-gray">
                Full stack web page using React, Node, Express, PostgreSQL and
                Clarifai API
              </p>
            </div>
            </a>
          </article>
   
          <article className="bg-light-gray mw5 ma3 center grow br4">
          <a href="https://ela-p-p.github.io/roboFriends/" >
          {" "}
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
              <p className="f6 lh-copy measure mt2 mid-gray">
                Front End web page using React and 'jsonplaceholder' API              </p>
            </div>
            </a>
          </article>
   
          <article className="bg-light-gray mw5 ma3 center grow br4">
          <a href="https://ela-p-p.github.io/starwars/" >
          {" "}
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
              <p className="no-underline f6 lh-copy measure mt2 mid-gray">
                Front-end web page using React and Star Wars API
              </p>
            </div>
            </a>
          </article>
   

        {/* <a
          class="grow w6 pa5 ma3 f3-ns no-underline bg-light-gray black-90 br4"
          href="#"
        >
          Portfolio Project #1
        </a>
        <a
          class="grow w6 pa5 ma3 f3-ns no-underline bg-light-gray black-90 br4"
          href="#"
        >
          Portfolio Project #2
        </a>
        <a
          class="grow w6 pa5 ma3 f3-ns no-underline bg-light-gray black-90 br4"
          href="#"
        >
          Portfolio Project #3
        </a>
        <a
          class="grow w6 pa5 ma3 f3-ns no-underline bg-light-gray black-90 br4"
          href="#"
        >
          Portfolio Project #4
        </a>
        <a
          class="grow w6 pa5 ma3 f3-ns no-underline bg-light-gray black-90 br4"
          href="#"
        >
          Portfolio Project #5
        </a> */}
      </section>
    </div>
  );
};

export default Portfolio;
