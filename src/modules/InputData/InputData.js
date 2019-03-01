import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  StatusBar,
  Header,
  Title,
  TouchableOpacity,
  Alert
} from "react-native";
import { createStackNavigator } from "react-navigation";
import { EP_INSERT_DATA } from "../../constants/endpoint";
import { postRequest } from "../../utils/api";

class InputData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      TextInputName: "",
      TextInputEmail: "",
      TextInputPhone: ""
    };
  }

  insertUsers = () => {
    const data = {
      name: this.state.TextInputName,
      email: this.state.TextInputEmail,
      phone: this.state.TextInputPhone
    };
    postRequest(EP_INSERT_DATA, data)
      .then(response => {
        Alert.alert("Data Berhasil Disimpan");
      })
      .catch(error => {
        console.error(error);
      });
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          animated
          translucent
          backgroundColor="#0b85a3"
          barStyle="light-content"
        />
        <TextInput
          placeholder="Enter Name"
          onChangeText={TextInputValue =>
            this.setState({ TextInputName: TextInputValue })
          }
          UnderlineColorAndroid="transparent"
          style={styles.TextInputStyle}
        />
        <TextInput
          placeholder="Enter Email"
          onChangeText={TextInputValue =>
            this.setState({ TextInputEmail: TextInputValue })
          }
          UnderlineColorAndroid="transparent"
          style={styles.TextInputStyle}
        />
        <TextInput
          placeholder="Enter Phone"
          onChangeText={TextInputValue =>
            this.setState({ TextInputPhone: TextInputValue })
          }
          UnderlineColorAndroid="transparent"
          style={styles.TextInputStyle}
        />
        <TouchableOpacity
          activeopacity={0.4}
          style={styles.TouchableOpacityStyle}
          onPress={this.insertUsers}
        >
          <Text style={styles.TextStyle}>Save</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default InputData;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginTop: 5
  },
  TextInputStyle: {
    textAlign: "center",
    marginBottom: 7,
    width: "90%",
    borderRadius: 5,
    color: "red",
    borderWidth: 1,
    borderColor: "#8cd6ff"
  },
  TextStyle: {
    color: "#fff",
    textAlign: "center"
  },
  TouchableOpacityStyle: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
    width: "90%",
    backgroundColor: "#00BCD4"
  }
});
