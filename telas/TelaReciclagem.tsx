import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function TelaReciclagem() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Dicas de Reciclagem</Text>

      <Text style={styles.dica}>
        1. Separe corretamente os materiais recicláveis: papel, vidro, plástico
        e metais.
      </Text>
      <Text style={styles.dica}>
        2. Lave os resíduos antes de descartá-los, para evitar contaminação.
      </Text>
      <Text style={styles.dica}>
        3. Evite colocar resíduos não recicláveis nos pontos de coleta.
      </Text>
      <Text style={styles.dica}>
        4. Plásticos PET devem ser separados e não misturados com outros tipos
        de plásticos.
      </Text>
      <Text style={styles.dica}>
        5. Reutilize garrafas plásticas e outros materiais sempre que possível.
      </Text>
      <Text style={styles.dica}>
        6. Não jogue óleo de cozinha usado no lixo comum. Encontre pontos de
        coleta específicos.
      </Text>
      <Text style={styles.dica}>
        7. Saiba que embalagens de alimentos, como latas e vidros, também podem
        ser recicladas.
      </Text>
      <Text style={styles.dica}>
        8. Sempre verifique a etiqueta de reciclagem nos produtos antes de
        descartá-los.
      </Text>

      <Text style={styles.alerta}>
        Lembre-se: Cada ação conta para a preservação do meio ambiente!
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#4CAF50",
  },
  dica: {
    fontSize: 18,
    marginVertical: 10,
    lineHeight: 24,
    color: "#333",
  },
  alerta: {
    marginTop: 30,
    fontSize: 16,
    fontWeight: "bold",
    color: "#d32f2f",
    textAlign: "center",
    paddingHorizontal: 10,
  },
});
