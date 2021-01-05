import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import GameBoard from "../components/gameBoard";

export default function Game() {
  const [isDead, setIsDead] = useState(false);
  const [score, setScore] = useState(0);

  const onHit = () => {
    console.log("Hit");
    setScore(score + 1);
  };

  const onMiss = () => {
    console.log("Miss");
    setIsDead(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.score}>{score}</Text>
      {!isDead && (
        <GameBoard
          style={styles.game}
          onHit={() => onHit()}
          onMiss={() => onMiss()}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    maxWidth: 500,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "space-around",
  },
  score: {
    fontSize: 50,
    color: "white",
  },
  game: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
