import { Text, Pressable } from "react-native";
import React from "react";
import { styles } from "./BatButtonStyles";

export default function BatButton({navigation}) {
  function handleChangePage() {
    navigation.navigate("Profile", { name: "Jane" });
  }

  return (
    <Pressable style={styles.buttonContainer} onPress={handleChangePage}>
      <Text style={styles.text}>ATIVAR CHAMADA</Text>
    </Pressable>
  );
}
