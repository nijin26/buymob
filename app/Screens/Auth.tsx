import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "./Screen";
import TextBox from "../Components/TextBox";
import Button from "../Components/Button";

const Auth: React.FC = () => {
  const [reg, setReg] = React.useState<Boolean>(false);

  return (
    <Screen style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}> {reg ? "Register" : "Login"} </Text>
        <Text style={styles.subHeading}>
          {reg ? "Create Your Account" : "Access Your Account"}
        </Text>
      </View>
      <View style={styles.social}>
        <TouchableOpacity style={styles.socialBtn}>
          <MaterialCommunityIcons name="google" size={38} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialBtn}>
          <MaterialCommunityIcons name="facebook" size={38} />
        </TouchableOpacity>
      </View>
      <Text style={styles.loginOptionLabel}>
        Or {reg ? "Sign Up" : "Login"} with email
      </Text>
      <View style={styles.form}>
        {reg && <TextBox label="Name:" />}
        <TextBox label="Email:" />
        <TextBox label="Password:" />
        {reg && <TextBox label="Confirm Password:" />}

        <View style={styles.btnContainer}>
          <Button name={!reg ? "Sign In" : "Sign Up"} />
        </View>
      </View>
      {!reg ? (
        <Text
          style={styles.loginOptionLabel}
          onPress={() => setReg((prev) => !prev)}
        >
          Don’t have an account?
          <Text style={{ fontWeight: "bold" }}> Register</Text>
        </Text>
      ) : (
        <Text
          style={styles.loginOptionLabel}
          onPress={() => setReg((prev) => !prev)}
        >
          Already have an account?
          <Text style={{ fontWeight: "bold" }}> Login</Text>
        </Text>
      )}
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EEEEEE",
    paddingTop: 80,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 36,
    fontWeight: "bold",
  },
  subHeading: {
    paddingVertical: 20,
    fontSize: 18,
    color: "#828282",
    textTransform: "uppercase",
  },
  social: {
    paddingTop: 25,
    flexDirection: "row",
    justifyContent: "center",
  },
  socialBtn: {
    marginHorizontal: 20,
    width: 130,
    height: 60,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E0E0E0",
  },
  loginOptionLabel: {
    marginVertical: 10,
    textAlign: "center",
    fontSize: 16,
    color: "#828282",
  },
  form: {},
  btnContainer: {
    paddingHorizontal: 45,
    paddingTop: 10,
  },
});

export default Auth;
