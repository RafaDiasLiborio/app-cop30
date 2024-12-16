import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function TelaMapa() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -1.455833, // Latitude inicial (exemplo: Belém, Brasil)
          longitude: -48.503889, // Longitude inicial
          latitudeDelta: 0.05, // Zoom do mapa
          longitudeDelta: 0.05, // Zoom do mapa
        }}
      >
        {/* Adicionando um marcador de exemplo */}
        <Marker
          coordinate={{
            latitude: -1.455833,
            longitude: -48.503889,
          }}
          title="Local de Exemplo"
          description="Descrição do ponto no mapa"
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
