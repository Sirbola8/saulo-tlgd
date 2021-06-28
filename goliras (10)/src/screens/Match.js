import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
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
      <View style={styles.loremIpsumStack}>
        <Text style={styles.loremIpsum}></Text>
        <Image
          source={require("../assets/images/67248804_1031363797253843_6463456409274023936_n1.jpg")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
      </View>
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
        leftIconButton="Perfil"
        style={styles.materialHeader31}
      ></MaterialHeader31>
      <Text style={styles.joaoGabriel19}>JOÃO GABRIEL // 19</Text>
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
    top: 305,
    left: 127,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  image: {
    top: 0,
    width: 444,
    height: 367,
    position: "absolute",
    left: 0
  },
  loremIpsumStack: {
    width: 444,
    height: 367,
    marginTop: -496,
    marginLeft: -42
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
    marginTop: 174,
    marginLeft: 66,
    marginRight: 71
  },
  materialHeader31: {
    height: 56,
    width: 360,
    backgroundColor: "rgba(106,45,119,1)",
    marginTop: -686
  },
  joaoGabriel19: {
    fontFamily: "roboto-100italic",
    color: "#121212",
    height: 84,
    width: 360,
    fontSize: 35,
    marginTop: 367
  }
});

export default Match;
