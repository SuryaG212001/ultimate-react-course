import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props); //calling parent component React using the super() emthod
    this.state = { location: "lisbon" };
    this.fetchWeather = this.fetchWeather.bind(this); //giving the fetchWeather method with a
  }
  fetchWeather() {
    console.log("Loading data...");
    console.log(this);
  }

  render() {
    return (
      <div className="app">
        <h1>Classy Weather</h1>
        <div>
          <input
            type="text"
            placeholder="search for location..."
            value={this.state.value}
            onChange={(e) => this.setState({ location: e.target.value })}
            // if even handler functions is not defined separately then we need not bind the this keyword.
          />
        </div>
        <button onClick={this.fetchWeather}>Get weather</button>
      </div>
    );
  }
}
export default App;
