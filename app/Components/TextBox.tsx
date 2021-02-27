import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

interface TextBoxProp {
  label: String;
}

const TextBox: React.FC<TextBoxProp> = ({ label }) => {
  return (
    <View style={styles.textBox}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  textBox: {
    marginVertical: 2,
    width: "100%",
    padding: 8,
    paddingHorizontal: 30,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  input: {
    height: 45,
    backgroundColor: "#ffffff",
    borderRadius: 5,
    padding: 12,
    color: "#828282",
    fontWeight: "bold",
  },
});

export default TextBox;
