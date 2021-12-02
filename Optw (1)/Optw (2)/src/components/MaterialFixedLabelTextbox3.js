import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function MaterialFixedLabelTextbox3(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.senha}>SENHA</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: "#D9D5DC",
    backgroundColor: "transparent",
    flexDirection: "row",
    paddingLeft: 16
  },
  senha: {
    fontSize: 16,
    lineHeight: 16,
    paddingTop: 16,
    paddingBottom: 8,
    color: "#000",
    opacity: 0.5,
    alignSelf: "flex-start"
  }
});

export default MaterialFixedLabelTextbox3;
