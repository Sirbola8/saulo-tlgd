import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import OcticonsIcon from "react-native-vector-icons/Octicons";
import MaterialRightIconTextbox1 from "../components/MaterialRightIconTextbox1";
import EntypoIcon from "react-native-vector-icons/Entypo";

function Login(props) {
  return (
    <View style={styles.container}>
      <OcticonsIcon name="home" style={styles.icon4}></OcticonsIcon>
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
      <MaterialRightIconTextbox1
        inputStyle="Label"
        inputStyle="    senha"
        style={styles.materialRightIconTextbox1}
      ></MaterialRightIconTextbox1>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Match")}
        style={styles.button8}
      >
        <EntypoIcon name="heart" style={styles.icon5}></EntypoIcon>
      </TouchableOpacity>
      <MaterialRightIconTextbox1
        inputStyle="E-mail"
        inputStyle="    E-mail"
        style={styles.materialRightIconTextbox2}
      ></MaterialRightIconTextbox1>
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
  materialRightIconTextbox1: {
    height: 43,
    backgroundColor: "#fff",
    marginTop: 196
  },
  button8: {
    width: 98,
    height: 106,
    marginTop: 99,
    marginLeft: 133
  },
  icon5: {
    color: "#6a2d77",
    fontSize: 98
  },
  materialRightIconTextbox2: {
    height: 43,
    width: 362,
    backgroundColor: "#fff",
    marginTop: -314
  }
});

export default Login;
