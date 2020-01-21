import React, { Component } from "react";
import logo from "../../images/logo-peach.png";
import "./App.css";
import Navigation from "../../components/Navigation";
import About from "../../components/About/About";
import Portfolio from "../../components/Portfolio";
import Footer from "../../components/Footer";

class App extends Component {
  state = {
    route: "home"
  };
  componentDidMount() {
    this.setState({ route: "about" });
  }
  onRouteChange = route => {
    this.setState({
      route: route
    });
  };
  render() {
    const { route } = this.state;
    return (
      <>
        <div className="App">
          <Navigation onRouteChange={this.onRouteChange} />

          {route === "home" && (
            <>
              <header className="App-header">
                <img src={logo} alt="logo" className="w3 mr2" />
                <h1 className="f1-ns f3">Elizabeth Porter</h1>
              </header>
              <section>
                <h2 className="f2-ns f4">Full Stack Web Developer</h2>
              </section>
            </>
          )}
          {route === "about" && <About />}

          {route === "portfolio" && <Portfolio />}
    
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
