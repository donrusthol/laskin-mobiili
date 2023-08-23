import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default function App() {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [result, setResult] = useState(0);
  const [operations, setOperations] = useState([]);

  const sumNumbers = () => {
    const sum = parseFloat(firstNumber) + parseFloat(secondNumber);
    setResult(sum);
    setOperations(prevOperations => [...prevOperations, `${firstNumber} + ${secondNumber} = ${sum}`]);
  };

  const subtractNumbers = () => {
    const difference = parseFloat(firstNumber) - parseFloat(secondNumber);
    setResult(difference);
    setOperations(prevOperations => [...prevOperations, `${firstNumber} - ${secondNumber} = ${difference}`]);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        onChangeText={text => setFirstNumber(text)}
        value={firstNumber}
      />
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        onChangeText={text => setSecondNumber(text)}
        value={secondNumber}
      />
      <Button title='+' onPress={sumNumbers} />
      <Button title='-' onPress={subtractNumbers} />
      <Text>Result: {result}</Text>
      <FlatList 
        data={operations}
        renderItem={({item}) => <Text>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});