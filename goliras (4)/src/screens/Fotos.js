import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import FeatherIcon from "react-native-vector-icons/Feather";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";

function Fotos(props) {
  return (
    <View style={styles.container}>
      <View style={styles.button2StackStack}>
        <View style={styles.button2Stack}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Fotos")}
            style={styles.button2}
          >
            <Image
              source={require("../assets/images/67248804_1031363797253843_6463456409274023936_n.jpg")}
              resizeMode="contain"
              style={styles.image3}
            ></Image>
          </TouchableOpacity>
          <IoniconsIcon name="md-square" style={styles.icon5}></IoniconsIcon>
          <IoniconsIcon name="md-square" style={styles.icon6}></IoniconsIcon>
        </View>
        <View style={styles.button1Stack}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Fotos")}
            style={styles.button1}
          >
            <Image
              source={require("../assets/images/14188257_330620763994820_1952014847460829296_o.jpg")}
              resizeMode="contain"
              style={styles.image2}
            ></Image>
          </TouchableOpacity>
          <IoniconsIcon name="md-square" style={styles.icon4}></IoniconsIcon>
        </View>
        <View style={styles.buttonStack}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Fotos")}
            style={styles.button}
          >
            <FeatherIcon name="plus" style={styles.icon8}></FeatherIcon>
          </TouchableOpacity>
          <EntypoIcon
            name="chevron-thin-down"
            style={styles.icon3}
          ></EntypoIcon>
        </View>
        <View style={styles.iconStack}>
          <MaterialIconsIcon
            name="photo-size-select-actual"
            style={styles.icon}
          ></MaterialIconsIcon>
          <Text style={styles.galeriaDeFotos}>GALERIA DE FOTOS</Text>
          <EntypoIcon
            name="chevron-small-down"
            style={styles.icon2}
          ></EntypoIcon>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button2: {
    top: 210,
    left: 0,
    width: 211,
    height: 159,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)"
  },
  image3: {
    width: 110,
    height: 123,
    marginTop: 8,
    marginLeft: 51
  },
  icon5: {
    top: 0,
    left: 31,
    position: "absolute",
    color: "rgba(121,70,119,1)",
    fontSize: 200
  },
  icon6: {
    top: 180,
    left: 31,
    position: "absolute",
    color: "rgba(121,70,119,1)",
    fontSize: 200
  },
  button2Stack: {
    top: 455,
    left: 52,
    width: 211,
    height: 399,
    position: "absolute"
  },
  button1: {
    top: 192,
    left: 0,
    width: 211,
    height: 159,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)"
  },
  image2: {
    width: 129,
    height: 142,
    marginTop: 8,
    marginLeft: 33
  },
  icon4: {
    top: 0,
    left: 22,
    position: "absolute",
    color: "rgba(121,70,119,1)",
    fontSize: 200
  },
  button1Stack: {
    top: 293,
    left: 61,
    width: 211,
    height: 351,
    position: "absolute"
  },
  button: {
    top: 129,
    left: 0,
    width: 211,
    height: 159,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)"
  },
  icon8: {
    color: "rgba(255,255,255,1)",
    fontSize: 143,
    height: 143,
    width: 143,
    marginTop: 8,
    marginLeft: 30
  },
  icon3: {
    top: 0,
    left: 42,
    position: "absolute",
    color: "rgba(121,70,119,1)",
    fontSize: 138
  },
  buttonStack: {
    top: 194,
    left: 56,
    width: 211,
    height: 288,
    position: "absolute"
  },
  icon: {
    top: 0,
    left: 67,
    position: "absolute",
    color: "rgba(121,70,119,1)",
    fontSize: 200
  },
  galeriaDeFotos: {
    top: 192,
    left: 0,
    position: "absolute",
    fontFamily: "georgia-regular",
    color: "rgba(121,70,119,1)",
    fontSize: 35
  },
  icon2: {
    top: 172,
    left: 98,
    position: "absolute",
    color: "rgba(121,70,119,1)",
    fontSize: 138
  },
  iconStack: {
    top: 0,
    left: 0,
    width: 335,
    height: 323,
    position: "absolute"
  },
  button2StackStack: {
    width: 335,
    height: 854,
    marginTop: 36,
    marginLeft: 13
  }
});

export default Fotos;
