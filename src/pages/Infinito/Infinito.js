import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, Dimensions, Alert } from 'react-native';
import { PanGestureHandler, State, GestureHandlerRootView } from 'react-native-gesture-handler';

const CELL_SIZE = Math.floor(Dimensions.get('window').width * 0.1); // Ajuste o tamanho da célula conforme necessário
const CELL_PADDING = Math.floor(CELL_SIZE * 0.1);
const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Letras aleatórias para preencher a grade

// Função para gerar uma grade de letras aleatórias
const generateGrid = (rows, cols) => {
  let grid = [];
  for (let i = 0; i < rows; i++) {
    let row = [];
    for (let j = 0; j < cols; j++) {
      row.push(LETTERS.charAt(Math.floor(Math.random() * LETTERS.length)));
    }
    grid.push(row);
  }
  return grid;
};

const Infinito = ({ rows = 10, cols = 10, wordsToFind = ['EXAMPLE', 'WORD', 'SEARCH'] }) => {
  const [grid] = useState(generateGrid(rows, cols));
  const [path, setPath] = useState([]);
  const [foundWords, setFoundWords] = useState(new Set());
  const panRef = useRef(null);

  const onGestureEvent = (event) => {
    const { x, y } = event.nativeEvent;
    const row = Math.floor(y / CELL_SIZE);
    const col = Math.floor(x / CELL_SIZE);
    if (row >= 0 && col >= 0 && row < rows && col < cols) {
      setPath((prevPath) => {
        if (prevPath.some(p => p.row === row && p.col === col)) {
          return prevPath;
        }
        return [...prevPath, { row, col }];
      });
    }
  };

  const checkWord = () => {
    const word = path.map(p => grid[p.row][p.col]).join('');
    if (wordsToFind.includes(word) && !foundWords.has(word)) {
      setFoundWords(new Set([...foundWords, word]));
      Alert.alert("Word found!", word);
    }
  };

  const onHandlerStateChange = (event) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      checkWord();
      setPath([]);
    }
  };

  const renderCell = (letter, rowIndex, colIndex) => {
    const isSelected = path.some(p => p.row === rowIndex && p.col === colIndex);
    const cellStyles = [styles.cell, isSelected && styles.selectedCell];

    return (
      <View key={`cell-${colIndex}`} style={cellStyles}>
        <Text style={styles.cellText}>{letter}</Text>
      </View>
    );
  };

  return (
    <GestureHandlerRootView>
      <PanGestureHandler
      onGestureEvent={onGestureEvent}
      onHandlerStateChange={onHandlerStateChange}
      ref={panRef}
    >
      <View style={styles.container}>
        {grid.map((row, rowIndex) => (
          <View key={`row-${rowIndex}`} style={styles.row}>
            {row.map((letter, colIndex) => renderCell(letter, rowIndex, colIndex))}
          </View>
        ))}
      </View>
    </PanGestureHandler>
    </GestureHandlerRootView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    // Estilos para a grade
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: CELL_SIZE,
    height: CELL_SIZE,
    padding: CELL_PADDING,
    borderWidth: 1,
    borderColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cellText: {
    fontSize: CELL_SIZE - CELL_PADDING * 2,
  },
  selectedCell: {
    backgroundColor: 'lightblue', // ou qualquer outra cor para destacar a seleção
  },
});

export default Infinito;
