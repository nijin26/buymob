import React, { ReactNode } from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import Constants from "expo-constants";

interface Props {
  children?: ReactNode;
  style?: Object;
}

const Screen: React.FC<Props> = ({ children, style }) => {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});

export default Screen;
