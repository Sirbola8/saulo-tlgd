import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/Octicons";
import MaterialRightIconTextbox1 from "../components/MaterialRightIconTextbox1";
import MaterialFixedLabelTextbox1 from "../components/MaterialFixedLabelTextbox1";

function Login(props) {
  return (
    <View style={styles.container}>
      <Icon name="home" style={styles.icon4}></Icon>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Untitled1")}
        style={styles.button7}
      >
        <Text style={styles.esqueceuASenha}>esqueceu a senha?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Faq")}
        style={styles.button6}
      >
        <Text style={styles.fAQ}>F.A.Q.</Text>
      </TouchableOpacity>
      <Text style={styles.loremIpsum}>ENCONTRE SEU PAR ROMANTICO</Text>
      <Image
        source={require("../assets/images/1128db63f0813c095338617696c36ed01.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Match")}
        style={styles.button5}
      ></TouchableOpacity>
      <MaterialRightIconTextbox1
        inputStyle="Label"
        inputStyle="    senha"
        style={styles.materialRightIconTextbox1}
      ></MaterialRightIconTextbox1>
      <MaterialFixedLabelTextbox1
        fixedLabel="e-mail"
        style={styles.materialFixedLabelTextbox1}
      ></MaterialFixedLabelTextbox1>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  icon4: {
    color: "rgba(131,26,128,1)",
    fontSize: 40,
    marginTop: 716,
    marginLeft: 160
  },
  button7: {
    width: 119,
    height: 17,
    marginTop: -209,
    marginLeft: 120
  },
  esqueceuASenha: {
    fontFamily: "roboto-regular",
    color: "rgba(131,26,128,1)"
  },
  button6: {
    width: 36,
    height: 17,
    marginTop: -69,
    marginLeft: 164
  },
  fAQ: {
    fontFamily: "roboto-regular",
    color: "rgba(131,26,128,1)"
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "rgba(131,26,128,1)",
    marginTop: -212,
    marginLeft: 73
  },
  image: {
    width: 200,
    height: 200,
    marginTop: -279,
    marginLeft: 79
  },
  button5: {
    width: 64,
    height: 54,
    backgroundColor: "rgba(131,26,128,1)",
    marginTop: 373,
    marginLeft: 147
  },
  materialRightIconTextbox1: {
    height: 43,
    backgroundColor: "#fff",
    marginTop: -231
  },
  materialFixedLabelTextbox1: {
    height: 43,
    marginTop: -102
  }
});

export default Login;
