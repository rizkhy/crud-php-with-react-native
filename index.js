/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import React, { Component } from "react";
import { AppRegistry } from "react-native";
import App from "./App";
import Splash from "./src/modules/Splash";
import { name as appName } from "./app.json";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { currrentScreen: "Splash" };
    setTimeout(() => {
      this.setState({ currrentScreen: "App" });
    }, 3000);
  }
  render() {
    const { currrentScreen } = this.state;
    let mainScreen = currrentScreen === "Splash" ? <Splash /> : <App />;
    return mainScreen;
  }
}

AppRegistry.registerComponent(appName, () => Main);
