import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";

function MaterialFixedLabelTextbox(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TextInput
        placeholder="Inserir aposta $$$"
        placeholderTextColor="rgba(47,211,33,1)"
        style={styles.textInput}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingLeft: 16,
    borderWidth: 1,
    borderColor: "#000000"
  },
  textInput: {
    fontFamily: "comic-sans-ms-regular",
    fontSize: 15,
    lineHeight: 16,
    paddingTop: 16,
    paddingBottom: 8,
    color: "#000",
    alignSelf: "flex-start",
    width: 358,
    height: 43,
    textAlign: "center"
  }
});

export default MaterialFixedLabelTextbox;
