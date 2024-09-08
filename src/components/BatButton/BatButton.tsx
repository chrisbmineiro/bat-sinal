import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function BatButton({ navigation }: any) {
  function handlePress() {
    navigation.navigate("Form");
  }

  return (
    <TouchableOpacity onPress={handlePress} style={styles.buttonContainer}>
      <Text style={styles.text}>activate bat signal</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 5,
    elevation: 3,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#222222",
    marginTop: 60,
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
