import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function BatTextInput() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = () => {
    // Lógica para enviar os dados
    if (!name || !phone || !location || !note) {
      alert("Por favor, preencha todos os campos!");
      return;
    }
    console.log({ name, phone, location, note });
    alert("Dados enviados com sucesso!");
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={name}
        onChangeText={setName}
      />
      <Text style={styles.title}>Label</Text>
      <TextInput
        style={styles.input}
        placeholder="Telefone para Contato"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />
      <Text style={styles.text}>This is your hint</Text>
      <TextInput
        style={styles.input}
        placeholder="Localização Atual"
        value={location}
        onChangeText={setLocation}
      />
      <Text style={styles.title}>Label</Text>
      <TextInput
        style={styles.input}
        placeholder="Observação"
        value={note}
        onChangeText={setNote}
        multiline
      />
      <Text style={styles.text}>This is your hint</Text>
      
      <TouchableOpacity 
        onPress={handleSubmit} 
        style={styles.buttonContainer}
      >
        <Text style={{color: "#fff", fontSize: 20, fontWeight: "bold"}}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}

export const styles = StyleSheet.create({
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 3,
    borderColor: "#000000",
    borderRadius: 5,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 10,
    alignSelf: "flex-start",
  },
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
});
