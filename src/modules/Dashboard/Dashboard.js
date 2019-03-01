import React from "react";
import { View, StatusBar, Text } from "react-native";

class Dashboard extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <StatusBar
          animated
          translucent
          backgroundColor="#0b85a3"
          barStyle="light-content"
        />
        <Text>Dashboard pages</Text>
      </View>
    );
  }
}

export default Dashboard;
