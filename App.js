import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import Game from "./src/containers/game";

export default function App() {
  return (
    <View style={styles.container}>
      <Game />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: "auto",
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    width: "100vw",
    maxWidth: "480px",
  },
});
