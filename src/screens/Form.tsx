import { View, StyleSheet, Image } from "react-native";
import batLogo from "../../assets/bat-logo2.png";
import BatTextInput from "../components/BatTextInput/BatTextInput";

export default function Form(){
  
  return (
    <View style={styles.container}>
      <Image source={batLogo} style={{ resizeMode: "contain", height: 100, marginBottom: 10 }}/>
      
      <BatTextInput />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
});