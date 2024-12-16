import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function TelaInicial({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bem-vindo ao App de coleta reciclável!</Text>
      <Text style={styles.subtitulo}>
        Seu guia para práticas de reciclagem e sustentabilidade em Belém.
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("TelaMapa")}
        >
          <Text style={styles.buttonText}>Ver Mapa Interativo</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("TelaReciclagem")}
        >
          <Text style={styles.buttonText}>Informações sobre Reciclagem</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("TelaContato")}
        >
          <Text style={styles.buttonText}>Contato</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f4f4f9", // Cor de fundo suave e agradável
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#4CAF50", // Verde, simbolizando sustentabilidade
    marginBottom: 20,
    textAlign: "center",
  },
  subtitulo: {
    fontSize: 18,
    color: "#333",
    marginBottom: 40,
    textAlign: "center",
    paddingHorizontal: 20,
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#4CAF50", // Cor verde vibrante para os botões
    paddingVertical: 15,
    paddingHorizontal: 40,
    marginBottom: 15,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
