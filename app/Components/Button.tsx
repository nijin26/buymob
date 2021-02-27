import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface ButtonProp {
  name: String;
}

const Button: React.FC<ButtonProp> = ({ name }) => {
  return (
    <TouchableOpacity style={styles.btn}>
      <Text style={styles.text}> {name} </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    width: "100%",
    backgroundColor: "#B99BEA",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    padding: 20,
  },
  text: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "bold",
  },
});
