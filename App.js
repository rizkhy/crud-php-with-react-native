import React, { Component } from "react";
import { Platform, StyleSheet, StatusBar, Text, View } from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator
} from "react-navigation";
import InputData from "./src/modules/InputData";
import Dashboard from "./src/modules/Dashboard";
import ViewData from "./src/modules/ViewData";

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          animated
          translucent
          backgroundColor="#0b85a3"
          barStyle="light-content"
        />
        <Text style={styles.welcome}>Home</Text>
      </View>
    );
  }
}

const AppStackNavigator = createStackNavigator({
  Home: Home
});

const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: Home,
    Dashboard: Dashboard,
    Input: InputData,
    View: ViewData
  },
  {
    unmountInactiveRoutes: true
  }
);

const AppContainer = createAppContainer(AppDrawerNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
