import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import React from "react";
import BatLogo from "../components/BatLogo/BatLogo";
import BatButton from "../components/BatButton/BatButton";

export default function Home({navigation}: any) {
  return (
    <View style={styles.container}>
      <BatLogo />

      <BatButton navigation={navigation} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
