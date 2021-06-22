import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";

function Paresencontrados(props) {
  return (
    <View style={styles.container}>
      <View style={styles.button10Column}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Paresencontrados")}
          style={styles.button10}
        >
          <View style={styles.image7Row}>
            <Image
              source={require("../assets/images/token_12.png")}
              resizeMode="contain"
              style={styles.image7}
            ></Image>
            <Text style={styles.queTalUmDrink}>QUE TAL UM DRINK?</Text>
            <EntypoIcon name="drink" style={styles.icon2}></EntypoIcon>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Paresencontrados")}
          style={styles.button9}
        >
          <View style={styles.image6Row}>
            <Image
              source={require("../assets/images/token_11.png")}
              resizeMode="contain"
              style={styles.image6}
            ></Image>
            <Text style={styles.heroiInjusticado}>HERÓI INJUSTIÇADO</Text>
            <EntypoIcon name="hand" style={styles.icon}></EntypoIcon>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Paresencontrados")}
          style={styles.button8}
        >
          <View style={styles.image5Row}>
            <Image
              source={require("../assets/images/token_9.png")}
              resizeMode="contain"
              style={styles.image5}
            ></Image>
            <Text style={styles.toFicandxHorny}>TO FICANDX HORNY</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.image3Row}>
          <Image
            source={require("../assets/images/token_1_(17).png")}
            resizeMode="contain"
            style={styles.image3}
          ></Image>
          <View style={styles.button6Column}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Paresencontrados")}
              style={styles.button6}
            >
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
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Paresencontrados")}
              style={styles.button7}
            >
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
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.rect}>
          <Text style={styles.text}>PARES ENCONTRADOS</Text>
        </View>
      </View>
      <View style={styles.button10ColumnFiller}></View>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Paresencontrados")}
        style={styles.button}
      >
        <View style={styles.imageRow}>
          <Image
            source={require("../assets/images/token_7.png")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
          <Text style={styles.loremIpsum5}>
            IMAGINA SE EU TIVESSE UMA ARMA DE VERDADE
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(121,70,119,1)"
  },
  button10: {
    width: 360,
    height: 100,
    backgroundColor: "rgba(121,70,119,1)",
    flexDirection: "row",
    marginTop: 626,
    marginLeft: 3
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
    height: 26,
    width: 25,
    marginTop: 26
  },
  image7Row: {
    height: 61,
    flexDirection: "row",
    flex: 1,
    marginRight: 105,
    marginLeft: 9,
    marginTop: 24
  },
  button9: {
    width: 360,
    height: 100,
    backgroundColor: "rgba(121,70,119,1)",
    flexDirection: "row",
    marginTop: -217,
    marginLeft: 3
  },
  image6: {
    width: 69,
    height: 61
  },
  heroiInjusticado: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    alignSelf: "flex-end",
    marginLeft: 22,
    marginBottom: 8
  },
  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    height: 33,
    width: 30,
    marginTop: 28
  },
  image6Row: {
    height: 61,
    flexDirection: "row",
    flex: 1,
    marginRight: 98,
    marginLeft: 9,
    marginTop: 12
  },
  button8: {
    width: 360,
    height: 100,
    backgroundColor: "rgba(121,70,119,1)",
    flexDirection: "row",
    marginTop: -200,
    marginLeft: 3
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
  image5Row: {
    height: 61,
    flexDirection: "row",
    flex: 1,
    marginRight: 130,
    marginLeft: 9,
    marginTop: 13
  },
  image3: {
    width: 0,
    height: 106,
    alignSelf: "flex-end"
  },
  button6: {
    width: 360,
    height: 100,
    backgroundColor: "rgba(121,70,119,1)",
    flexDirection: "row"
  },
  image2: {
    width: 69,
    height: 61
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    marginLeft: 24,
    marginTop: 31
  },
  image2Row: {
    height: 61,
    flexDirection: "row",
    flex: 1,
    marginRight: 8,
    marginLeft: 9,
    marginTop: 19
  },
  button7: {
    width: 360,
    height: 100,
    backgroundColor: "rgba(121,70,119,1)",
    flexDirection: "row",
    marginTop: 1
  },
  image4: {
    width: 69,
    height: 61
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
    color: "rgba(255,255,255,1)",
    height: 47,
    width: 235
  },
  loremIpsum2Stack: {
    width: 235,
    height: 47,
    marginLeft: 24,
    marginTop: 16
  },
  image4Row: {
    height: 63,
    flexDirection: "row",
    flex: 1,
    marginRight: 23,
    marginLeft: 9,
    marginTop: 26
  },
  button6Column: {
    width: 360,
    marginLeft: 3,
    marginBottom: 1
  },
  image3Row: {
    height: 202,
    flexDirection: "row",
    marginTop: -325
  },
  rect: {
    width: 360,
    height: 83,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: -386,
    marginLeft: 3
  },
  text: {
    fontFamily: "georgia-regular",
    color: "rgba(121,70,119,1)",
    fontSize: 31,
    marginTop: 24,
    marginLeft: 9
  },
  button10Column: {
    marginTop: 17,
    marginLeft: -3
  },
  button10ColumnFiller: {
    flex: 1
  },
  button: {
    width: 360,
    height: 100,
    backgroundColor: "rgba(121,70,119,1)",
    flexDirection: "row",
    marginBottom: 560
  },
  image: {
    width: 69,
    height: 61
  },
  loremIpsum5: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    height: 60,
    width: 265,
    marginLeft: 10,
    marginTop: 15
  },
  imageRow: {
    height: 75,
    flexDirection: "row",
    flex: 1,
    marginRight: 7,
    marginLeft: 9,
    marginTop: 19
  }
});

export default Paresencontrados;
