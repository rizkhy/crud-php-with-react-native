import React, { Component } from "react";
import { StyleSheet, StatusBar, Image, View } from "react-native";

export default class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = { timer: 0 };
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          animated
          translucent
          backgroundColor="#0b85a3"
          barStyle="light-content"
        />
        <Image
          style={{ width: 250, height: 250 }}
          source={require("../../static/img/splash.png")}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0b85a3",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#fff"
  }
});
