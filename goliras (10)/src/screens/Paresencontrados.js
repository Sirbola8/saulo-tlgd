import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";

function Paresencontrados(props) {
  return (
    <View style={styles.container}>
      <View style={styles.button3Row}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Chat")}
          style={styles.button3}
        >
          <Image
            source={require("../assets/images/token_10.png")}
            resizeMode="contain"
            style={styles.image4}
          ></Image>
        </TouchableOpacity>
        <Text style={styles.loremIpsum3}>
          TEM UM MINUTO PRA OUVIR A PALAVRA DE DIO?
        </Text>
      </View>
      <View style={styles.button6Row}>
        <TouchableOpacity style={styles.button6}>
          <Image
            source={require("../assets/images/token_12.png")}
            resizeMode="contain"
            style={styles.image7}
          ></Image>
        </TouchableOpacity>
        <Text style={styles.queTalUmDrink}>QUE TAL UM DRINK?</Text>
        <EntypoIcon name="drink" style={styles.icon2}></EntypoIcon>
      </View>
      <View style={styles.button4Row}>
        <TouchableOpacity style={styles.button4}>
          <Image
            source={require("../assets/images/token_9.png")}
            resizeMode="contain"
            style={styles.image5}
          ></Image>
        </TouchableOpacity>
        <Text style={styles.toFicandxHorny}>TO FICANDX HORNY</Text>
      </View>
      <View style={styles.button5Row}>
        <TouchableOpacity style={styles.button5}>
          <Image
            source={require("../assets/images/token_11.png")}
            resizeMode="contain"
            style={styles.image6}
          ></Image>
        </TouchableOpacity>
        <Text style={styles.heroiInjusticado}>HERÓI INJUSTIÇADO</Text>
        <EntypoIcon name="hand" style={styles.icon}></EntypoIcon>
      </View>
      <View style={styles.button2Row}>
        <TouchableOpacity style={styles.button2}>
          <Image
            source={require("../assets/images/token_8.png")}
            resizeMode="contain"
            style={styles.image2}
          ></Image>
        </TouchableOpacity>
        <Text style={styles.loremIpsum}>VOCE GOSTA DE LEAGUE OF LEGENDS?</Text>
      </View>
      <View style={styles.button7Row}>
        <TouchableOpacity style={styles.button7}>
          <Image
            source={require("../assets/images/token_7.png")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
        </TouchableOpacity>
        <Text style={styles.loremIpsum5}>
          IMAGINA SE EU TIVESSE UMA ARMA DE VERDADE
        </Text>
      </View>
      <View style={styles.rect}>
        <Text style={styles.text}>PARES ENCONTRADOS</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(121,70,119,1)"
  },
  button3: {
    width: 69,
    height: 61
  },
  image4: {
    width: 69,
    height: 61
  },
  loremIpsum3: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    height: 47,
    width: 235,
    marginLeft: 24,
    marginTop: 14
  },
  button3Row: {
    height: 61,
    flexDirection: "row",
    marginTop: 330,
    marginLeft: 9,
    marginRight: 23
  },
  button6: {
    width: 69,
    height: 61
  },
  image7: {
    width: 69,
    height: 61
  },
  queTalUmDrink: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    marginLeft: 22,
    marginTop: 31
  },
  icon2: {
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    marginTop: 26
  },
  button6Row: {
    height: 61,
    flexDirection: "row",
    marginTop: 276,
    marginLeft: 9,
    marginRight: 105
  },
  button4: {
    width: 69,
    height: 61
  },
  image5: {
    width: 69,
    height: 61
  },
  toFicandxHorny: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    marginLeft: 24,
    marginTop: 22
  },
  button4Row: {
    height: 61,
    flexDirection: "row",
    marginTop: -289,
    marginLeft: 9,
    marginRight: 130
  },
  button5: {
    width: 69,
    height: 61
  },
  image6: {
    width: 69,
    height: 61
  },
  heroiInjusticado: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    alignSelf: "flex-end",
    marginLeft: 20,
    marginBottom: 7
  },
  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    marginLeft: 2,
    marginTop: 28
  },
  button5Row: {
    height: 61,
    flexDirection: "row",
    marginTop: 38,
    marginLeft: 9,
    marginRight: 98
  },
  button2: {
    width: 69,
    height: 61
  },
  image2: {
    width: 69,
    flex: 1
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    marginLeft: 24,
    marginTop: 31
  },
  button2Row: {
    height: 61,
    flexDirection: "row",
    marginTop: -379,
    marginLeft: 9,
    marginRight: 8
  },
  button7: {
    width: 69,
    height: 61
  },
  image: {
    width: 69,
    flex: 1
  },
  loremIpsum5: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    height: 60,
    width: 265,
    marginLeft: 10,
    marginTop: 15
  },
  button7Row: {
    height: 75,
    flexDirection: "row",
    marginTop: -162,
    marginLeft: 9,
    marginRight: 7
  },
  rect: {
    width: 360,
    height: 83,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: -177
  },
  text: {
    fontFamily: "georgia-regular",
    color: "rgba(121,70,119,1)",
    fontSize: 31,
    marginTop: 24,
    marginLeft: 9
  }
});

export default Paresencontrados;
