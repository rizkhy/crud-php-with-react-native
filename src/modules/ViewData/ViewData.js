import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  StatusBar,
  Header,
  ActivityIndicator,
  Title,
  TouchableOpacity,
  Alert,
  ListView
} from "react-native";
import { createStackNavigator } from "react-navigation";
import { EP_INSERT_DATA, EP_VIEW_DATA } from "../../constants/endpoint";
import { postRequest, getRequest } from "../../utils/api";

class ViewData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      TextInputName: "",
      TextInputEmail: "",
      TextInputPhone: "",
      isLoading: false,
      views: []
    };
    this.dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
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

  ActionClick() {
    Alert.alert("kk");
  }

  getData() {
    this.setState({ isLoading: true });
    getRequest(EP_VIEW_DATA).then(response => {
      this.setState({
        views: response.data,
        isLoading: false
      });
    });
  }

  ListViewItem = () => {
    return (
      <View
        style={{ height: 0.5, width: "100%", backgroundColor: "#2196F3" }}
      />
    );
  };

  componentDidMount() {
    this.getData();
  }
  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.dataSource.cloneWithRows(this.state.views)}
          renderSeparator={this.ListViewItem}
          renderRow={rowData => (
            <Text
              style={styles.rowViewContainer}
              onPress={this.ActionClick.bind(this)}
            >
              {rowData.name} - {rowData.email}
            </Text>
          )}
        />
      </View>
    );
  }
}

export default ViewData;

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
  },
  rowViewContainer: {
    textAlign: "center",
    width: "100%",
    fontSize: 20,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10
  }
});
