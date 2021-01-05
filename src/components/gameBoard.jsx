import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

export default function GameBoard({ onHit, onMiss }) {
  const rows = [0, 1, 2, 3];
  const cols = [0, 1, 2, 3];

  const [tiles, setTiles] = useState([
    { row: 1, col: 1 },
    { row: 2, col: 2 },
    { row: 3, col: 3 },
  ]);

  const randomTilePos = (prevRow = null, prevCol = null) => {
    var posTaken = true;
    while (posTaken) {
      var row = Math.floor(Math.random() * rows.length);
      var col = Math.floor(Math.random() * cols.length);
      if (tiles.every((tile) => tile.row !== row || tile.col !== col)) {
        posTaken = false;
      }
    }
    return { row, col };
  };

  const isClickableTile = (row, col) => {
    for (const tile of tiles) {
      if (tile.row === row && tile.col === col) return true;
    }
    return false;
  };

  const spawnNewTile = (row, col) => {
    const index = tiles.findIndex(
      (tile) => tile.row === row && tile.col === col
    );
    const newTiles = tiles;
    newTiles[index] = randomTilePos(row, col);
    setTiles(newTiles);
  };

  return (
    <View style={styles.container}>
      {rows.map((row) => (
        <View style={styles.row} key={row}>
          {cols.map((col) => (
            <TouchableOpacity
              style={[
                styles.tile,
                isClickableTile(row, col) && styles.clickable,
              ]}
              key={row.toString() + col.toString()}
              onPress={() => {
                if (isClickableTile(row, col)) {
                  onHit(row, col);
                  spawnNewTile(row, col);
                } else {
                  onMiss();
                }
              }}
            />
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  tile: {
    backgroundColor: "white",
    height: "100px",
    width: "100px",
    margin: "1px",
  },
  clickable: {
    backgroundColor: "skyblue",
  },
});
