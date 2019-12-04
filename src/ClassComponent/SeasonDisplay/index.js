import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
// import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  // one way to initialize state
  /**
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      errorMessage: ""
    };
  }
  */

  // another way (shortcut, babel converts below code to above code)
  state = {
    latitude: null,
    errorMessage: ""
  };

  componentDidMount() {
    console.log("component got mount");
    this.getPosition();
  }

  componentDidUpdate() {
    console.log("component got updated");
  }

  getPosition() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ latitude: position.coords.latitude });
      },
      error => {
        this.setState({ errorMessage: error.message });
      }
    );
  }

  renderContent() {
    if (this.state.latitude) {
      return <SeasonDisplay lat={this.state.latitude} />;
    } else if (this.state.errorMessage) {
      return <div className="error">Error: {this.state.errorMessage} </div>;
    } else {
      return <Spinner message="Please accept location request..." />;
    }
  }

  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
