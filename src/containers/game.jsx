import React, { useState } from "react";
import { StyleSheet, Text } from "react-native";
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
    <>
      <Text style={styles.score}>{score}</Text>
      {!isDead && (
        <>
          <GameBoard onHit={() => onHit()} onMiss={() => onMiss()} />
        </>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  score: {
    fontSize: 50,
    color: "white",
  },
});
