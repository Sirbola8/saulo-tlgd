import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import SimpleLineIconsIcon from "react-native-vector-icons/SimpleLineIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";

function Searchduo(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect1Stack}>
        <View style={styles.rect1}>
          <Text style={styles.nomeJoaoGabriel1}>Nome: Flavio Fernandes</Text>
          <Text style={styles.nomeJoaoGabriel2}>
            idade: 24{"\n"}
            {"\n"}hobbies: jantar os cara
          </Text>
          <Text style={styles.soryegeton}>soryegeton🌪</Text>
          <SimpleLineIconsIcon
            name="like"
            style={styles.icon3}
          ></SimpleLineIconsIcon>
        </View>
        <Image
          source={require("../assets/images/OIP_(2).jfif")}
          resizeMode="contain"
          style={styles.image2}
        ></Image>
        <SimpleLineIconsIcon
          name="dislike"
          style={styles.icon4}
        ></SimpleLineIconsIcon>
      </View>
      <View style={styles.rectStack}>
        <View style={styles.rect}>
          <View style={styles.imageRow}>
            <Image
              source={require("../assets/images/965b2cd6-4989-4b44-9bea-7e0bf7f1e869.jpg")}
              resizeMode="contain"
              style={styles.image}
            ></Image>
            <View style={styles.nomeJoaoGabrielColumn}>
              <Text style={styles.nomeJoaoGabriel}>Nome: João Gabriel</Text>
              <Text style={styles.idade21}>idade: 21</Text>
              <Text style={styles.loremIpsum}>hobbies: feedar de vander</Text>
              <Text style={styles.loremIpsum2}></Text>
              <Text style={styles.loremIpsum4}>Eu to voando alto🎶</Text>
            </View>
          </View>
          <SimpleLineIconsIcon
            name="like"
            style={styles.icon}
          ></SimpleLineIconsIcon>
        </View>
        <SimpleLineIconsIcon
          name="dislike"
          style={styles.icon2}
        ></SimpleLineIconsIcon>
      </View>
      <EntypoIcon name="arrow-bold-down" style={styles.icon5}></EntypoIcon>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ac5d5d"
  },
  rect1: {
    top: 0,
    left: 5,
    width: 376,
    height: 263,
    position: "absolute",
    backgroundColor: "rgba(230, 230, 230,1)"
  },
  nomeJoaoGabriel1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 22,
    marginLeft: 210
  },
  nomeJoaoGabriel2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 28,
    marginLeft: 210
  },
  soryegeton: {
    fontFamily: "roboto-italic",
    color: "#121212",
    marginTop: 44,
    marginLeft: 239
  },
  icon3: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 45,
    width: 40,
    marginTop: 31,
    marginLeft: 20
  },
  image2: {
    top: 0,
    left: 0,
    width: 203,
    height: 200,
    position: "absolute"
  },
  icon4: {
    top: 219,
    left: 308,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 40
  },
  rect1Stack: {
    width: 381,
    height: 264,
    marginTop: 367,
    marginLeft: -4
  },
  rect: {
    top: 0,
    left: 0,
    width: 378,
    height: 282,
    position: "absolute",
    backgroundColor: "rgba(230, 230, 230,1)"
  },
  image: {
    width: 200,
    height: 226
  },
  nomeJoaoGabriel: {
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  idade21: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 21,
    marginLeft: 1
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 14
  },
  loremIpsum2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 41,
    marginLeft: 27
  },
  loremIpsum4: {
    fontFamily: "roboto-italic",
    color: "#121212",
    marginTop: 22,
    marginLeft: 18
  },
  nomeJoaoGabrielColumn: {
    width: 160,
    marginLeft: 8,
    marginTop: 22,
    marginBottom: 36
  },
  imageRow: {
    height: 226,
    flexDirection: "row",
    marginTop: 1,
    marginLeft: 3,
    marginRight: 7
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 45,
    width: 40,
    marginTop: 6,
    marginLeft: 28
  },
  icon2: {
    top: 238,
    left: 305,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 40
  },
  rectStack: {
    width: 378,
    height: 283,
    marginTop: -595,
    marginLeft: -3
  },
  icon5: {
    color: "#e6e6e6",
    fontSize: 131,
    marginTop: 330,
    marginLeft: 120
  }
});

export default Searchduo;
