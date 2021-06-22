import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";

function Paresencontrados(props) {
  return (
    <View style={styles.container}>
      <View style={styles.button4StackStack}>
        <View style={styles.button4Stack}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Paresencontrados")}
            style={styles.button4}
          ></TouchableOpacity>
          <View style={styles.rect}>
            <Text style={styles.loremIpsum5}>
              IMAGINA SE EU TIVESSE UMA ARMA DE VERDADE
            </Text>
            <View style={styles.rect2}></View>
            <View style={styles.image2Row}>
              <Image
                source={require("../assets/images/token_8.png")}
                resizeMode="contain"
                style={styles.image2}
              ></Image>
              <Text style={styles.loremIpsum}>
                VOCE GOSTA DE LEAGUE OF LEGENDS?
              </Text>
            </View>
            <View style={styles.rect6}></View>
            <View style={styles.image4Row}>
              <Image
                source={require("../assets/images/token_10.png")}
                resizeMode="contain"
                style={styles.image4}
              ></Image>
              <View style={styles.loremIpsum2Stack}>
                <Text style={styles.loremIpsum2}></Text>
                <Text style={styles.loremIpsum3}>
                  TEM UM MINUTO PRA OUVIR A PALAVRA DE DIO?
                </Text>
              </View>
            </View>
            <View style={styles.rect5}></View>
            <View style={styles.image5Row}>
              <Image
                source={require("../assets/images/token_9.png")}
                resizeMode="contain"
                style={styles.image5}
              ></Image>
              <Text style={styles.toFicandxHorny}>TO FICANDX HORNY</Text>
            </View>
            <View style={styles.rect4}></View>
            <View style={styles.image6Row}>
              <Image
                source={require("../assets/images/token_11.png")}
                resizeMode="contain"
                style={styles.image6}
              ></Image>
              <Text style={styles.heroiInjusticado}>HERÓI INJUSTIÇADO</Text>
              <EntypoIcon name="hand" style={styles.icon}></EntypoIcon>
            </View>
            <View style={styles.rect3}></View>
            <View style={styles.image7Row}>
              <Image
                source={require("../assets/images/token_12.png")}
                resizeMode="contain"
                style={styles.image7}
              ></Image>
              <Text style={styles.queTalUmDrink}>QUE TAL UM DRINK?</Text>
              <EntypoIcon name="drink" style={styles.icon2}></EntypoIcon>
            </View>
          </View>
          <Image
            source={require("../assets/images/token_7.png")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
        </View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Paresencontrados")}
          style={styles.button5}
        ></TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Paresencontrados")}
          style={styles.button3}
        ></TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Paresencontrados")}
          style={styles.button2}
        ></TouchableOpacity>
        <View style={styles.button1Stack}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Paresencontrados")}
            style={styles.button1}
          ></TouchableOpacity>
          <Image
            source={require("../assets/images/token_1_(17).png")}
            resizeMode="contain"
            style={styles.image3}
          ></Image>
        </View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Paresencontrados")}
          style={styles.button}
        ></TouchableOpacity>
      </View>
      <View style={styles.rect7}>
        <Text style={styles.text}>PARES ENCONTRADOS</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button4: {
    top: 428,
    left: 3,
    width: 96,
    height: 100,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)"
  },
  rect: {
    top: 0,
    width: 360,
    height: 660,
    position: "absolute",
    left: 3,
    backgroundColor: "rgba(255,255,255,1)"
  },
  loremIpsum5: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 60,
    width: 265,
    marginTop: 34,
    marginLeft: 88
  },
  rect2: {
    width: 360,
    height: 8,
    backgroundColor: "rgba(121,70,119,1)",
    marginTop: 6
  },
  image2: {
    width: 96,
    height: 83
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginLeft: 6,
    marginTop: 37
  },
  image2Row: {
    height: 83,
    flexDirection: "row",
    marginTop: 6,
    marginRight: 8
  },
  rect6: {
    width: 360,
    height: 8,
    backgroundColor: "rgba(121,70,119,1)",
    marginTop: 6
  },
  image4: {
    width: 96,
    height: 83
  },
  loremIpsum2: {
    top: 14,
    left: 12,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  loremIpsum3: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 47,
    width: 235
  },
  loremIpsum2Stack: {
    width: 235,
    height: 47,
    marginLeft: 6,
    marginTop: 24
  },
  image4Row: {
    height: 83,
    flexDirection: "row",
    marginTop: 9,
    marginRight: 23
  },
  rect5: {
    width: 360,
    height: 8,
    backgroundColor: "rgba(121,70,119,1)",
    marginTop: 6
  },
  image5: {
    width: 96,
    height: 83
  },
  toFicandxHorny: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginLeft: 6,
    marginTop: 33
  },
  image5Row: {
    height: 83,
    flexDirection: "row",
    marginTop: 11,
    marginRight: 130
  },
  rect4: {
    width: 360,
    height: 8,
    backgroundColor: "rgba(121,70,119,1)",
    marginTop: 9
  },
  image6: {
    width: 96,
    height: 83
  },
  heroiInjusticado: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginLeft: 4,
    marginTop: 38
  },
  icon: {
    color: "rgba(121,70,119,1)",
    fontSize: 30,
    height: 33,
    width: 30,
    marginTop: 30
  },
  image6Row: {
    height: 83,
    flexDirection: "row",
    marginTop: 8,
    marginRight: 98
  },
  rect3: {
    width: 360,
    height: 8,
    backgroundColor: "rgba(121,70,119,1)",
    marginTop: 10
  },
  image7: {
    width: 96,
    height: 83
  },
  queTalUmDrink: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginLeft: 4,
    marginTop: 42
  },
  icon2: {
    color: "rgba(121,70,119,1)",
    fontSize: 25,
    height: 26,
    width: 25,
    marginTop: 37
  },
  image7Row: {
    height: 83,
    flexDirection: "row",
    marginTop: 19,
    marginRight: 105
  },
  image: {
    top: 11,
    left: 0,
    width: 96,
    height: 83,
    position: "absolute"
  },
  button4Stack: {
    top: 0,
    left: 0,
    width: 363,
    height: 660,
    position: "absolute"
  },
  button5: {
    top: 548,
    left: 3,
    width: 96,
    height: 100,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)"
  },
  button3: {
    top: 317,
    left: 3,
    width: 96,
    height: 100,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)"
  },
  button2: {
    top: 207,
    left: 3,
    width: 96,
    height: 100,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)"
  },
  button1: {
    top: 0,
    left: 0,
    width: 96,
    height: 100,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)"
  },
  image3: {
    top: 94,
    left: 0,
    width: 0,
    height: 106,
    position: "absolute"
  },
  button1Stack: {
    top: 103,
    left: 0,
    width: 96,
    height: 200,
    position: "absolute"
  },
  button: {
    top: 0,
    left: 3,
    width: 96,
    height: 100,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)"
  },
  button4StackStack: {
    width: 363,
    height: 660,
    marginTop: 100,
    marginLeft: -3
  },
  rect7: {
    width: 360,
    height: 83,
    backgroundColor: "rgba(121,70,119,1)",
    marginTop: -743
  },
  text: {
    fontFamily: "georgia-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 31,
    marginTop: 24,
    marginLeft: 9
  }
});

export default Paresencontrados;
