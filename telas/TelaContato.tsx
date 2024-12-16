import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Alert,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";

export default function TelaContato() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    Alert.alert("Mensagem Enviada", "Sua mensagem foi enviada com sucesso!");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Fale Conosco</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nome:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          value={name}
          onChangeText={setName}
        />
        <Text style={styles.texto}>{name}</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail"
          value={email}
          onChangeText={setEmail}
        />
        <Text style={styles.texto}>{email}</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Mensagem:</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Digite sua mensagem"
          value={message}
          onChangeText={setMessage}
          multiline
        />
        <Text style={styles.texto}>{message}</Text>
      </View>

      <Button title="Enviar Mensagem" onPress={handleSubmit} />
      <Button
        title="Voltar para Início"
        onPress={() => {
          // Lógica para voltar para a tela inicial
        }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f0f0f0",
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#4CAF50",
  },
  inputContainer: {
    width: "100%",
    marginBottom: 15,
    alignItems: "center",
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
    color: "#333",
  },
  input: {
    width: "90%",
    height: 40,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    marginBottom: 5,
    backgroundColor: "#fff",
  },
  textArea: {
    height: 100,
    textAlignVertical: "top", // Alinha o texto no topo do campo
  },
  texto: {
    fontSize: 16,
    marginTop: 10,
    color: "#555",
    fontStyle: "italic",
  },
});
