import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";

function MaterialUnderlineTextbox1(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TextInput
        placeholder="confirmar senha"
        placeholderTextColor="rgba(142,50,161,1)"
        secureTextEntry={false}
        style={styles.inputStyle}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: "rgba(142,50,161,1)",
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center"
  },
  inputStyle: {
    color: "#000",
    paddingRight: 5,
    fontSize: 16,
    alignSelf: "stretch",
    flex: 1,
    lineHeight: 16,
    paddingTop: 16,
    paddingBottom: 8,
    borderWidth: 1,
    borderColor: "rgba(142,50,161,1)"
  }
});

export default MaterialUnderlineTextbox1;
