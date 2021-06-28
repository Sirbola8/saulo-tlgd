import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialRightIconTextbox(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.inputStyleStack}>
        <TextInput
          placeholder={props.inputStyle || "Label"}
          style={styles.inputStyle}
        ></TextInput>
        <Icon name="eye" style={styles.iconStyle}></Icon>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: "#D9D5DC",
    backgroundColor: "transparent"
  },
  inputStyle: {
    color: "#000",
    fontSize: 16,
    flex: 1,
    lineHeight: 16,
    left: 0,
    width: 341,
    top: 0,
    height: 42,
    position: "absolute"
  },
  iconStyle: {
    color: "#616161",
    fontSize: 24,
    position: "absolute",
    top: 9,
    left: 339,
    height: 25,
    width: 34
  },
  inputStyleStack: {
    width: 373,
    height: 42,
    marginLeft: 2
  }
});

export default MaterialRightIconTextbox;
