import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import SimpleLineIconsIcon from "react-native-vector-icons/SimpleLineIcons";
import FeatherIcon from "react-native-vector-icons/Feather";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialHeader31 from "../components/MaterialHeader31";

function Match(props) {
  return (
    <View style={styles.container}>
      <View style={styles.button6Row}>
        <TouchableOpacity style={styles.button6}>
          <SimpleLineIconsIcon
            name="like"
            style={styles.icon8}
          ></SimpleLineIconsIcon>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button7}>
          <FeatherIcon name="star" style={styles.icon7}></FeatherIcon>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button8}>
          <SimpleLineIconsIcon
            name="dislike"
            style={styles.icon9}
          ></SimpleLineIconsIcon>
        </TouchableOpacity>
      </View>
      <Text style={styles.loremIpsum}></Text>
      <View style={styles.button9Row}>
        <TouchableOpacity style={styles.button9}>
          <EntypoIcon name="arrow-bold-left" style={styles.icon11}></EntypoIcon>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button10}>
          <EntypoIcon
            name="arrow-bold-right"
            style={styles.icon12}
          ></EntypoIcon>
        </TouchableOpacity>
      </View>
      <MaterialHeader31
        leftIconName="menu"
        iconButton="Cadastro"
        leftIcon="account"
        title="EVOL ❤"
        style={styles.materialHeader31}
      ></MaterialHeader31>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button6: {
    width: 40,
    height: 45
  },
  icon8: {
    color: "rgba(131,26,128,1)",
    fontSize: 40
  },
  button7: {
    width: 40,
    height: 40,
    marginLeft: 105
  },
  icon7: {
    color: "rgba(131,26,128,1)",
    fontSize: 40
  },
  button8: {
    width: 40,
    height: 45,
    marginLeft: 103
  },
  icon9: {
    color: "rgba(131,26,128,1)",
    fontSize: 40
  },
  button6Row: {
    height: 45,
    flexDirection: "row",
    marginTop: 527,
    marginLeft: 15,
    marginRight: 17
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: -191,
    marginLeft: 85
  },
  button9: {
    width: 81,
    height: 88,
    marginTop: 1
  },
  icon11: {
    color: "rgba(131,26,128,1)",
    fontSize: 81
  },
  button10: {
    width: 81,
    height: 88,
    marginLeft: 61
  },
  icon12: {
    color: "rgba(131,26,128,1)",
    fontSize: 81
  },
  button9Row: {
    height: 89,
    flexDirection: "row",
    marginTop: 236,
    marginLeft: 66,
    marginRight: 71
  },
  materialHeader31: {
    height: 56,
    width: 360,
    backgroundColor: "rgba(106,45,119,1)",
    marginTop: -686
  }
});

export default Match;
