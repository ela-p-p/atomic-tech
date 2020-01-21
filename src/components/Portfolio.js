import React from "react";
import logo from "../images/logo-peach.png";


const Portfolio = () => {
  return (
    <div>
      <header className="flex items-center h-50 ma4">
        <img src={logo} alt="logo" className="w3 w2 ml7-ns" />
        <h1 className="ml2 f1-ns f3">Portfolio</h1>
      </header>
      <section className="flex justify-center flex-wrap mh7-ns">
        <a
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
        </a>
      </section>
    </div>
  );
};

export default Portfolio;
