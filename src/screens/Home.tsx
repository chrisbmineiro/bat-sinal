import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import React from "react";
import BatLogo from "../components/BatLogo/BatLogo";

export default function Home({ navigation }: any) {
  function handlePress (){
    navigation.navigate("Form");
  };

  return (
    <View style={styles.container}>
      <BatLogo />
      <Button
        title="ATIVAR CHAMADA"
        onPress={handlePress} 
      />
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
  buttonContainer: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000000",
    marginTop: 10,
  },
  text: {
    color: "#E5BF3C",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
