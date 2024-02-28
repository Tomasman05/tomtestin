import React, { useState } from 'react';
import { View, Text, TextInput, Platform } from 'react-native';
import { Button } from 'react-native-elements';

export default function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bodyMassIndex, setBodyMassIndex] = useState('');

  function calcBodyMassIndex() {
    let res = weight / Math.pow(height, 2);
    setBodyMassIndex(res.toFixed(2));
    setWeight('');
    setHeight('');
  }

  function clearFields() {
    setBodyMassIndex('');
    setWeight('');
    setHeight('');
  }

  const getResultColor = () => {
    const bmi = parseFloat(bodyMassIndex);
    if (bmi >= 18 && bmi <= 24) {
      return 'green';
    } else {
      return 'red';
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "beige" }}>
      <View style={{ padding: 20, maxWidth: Platform.OS === 'web' ? 400 : '100%' }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#333' }}>
          Testtömeg Index Kalkulátor
        </Text>

        <Text style={{ color: '#333' }}>Súly (kg)</Text>
        <TextInput
          onChangeText={(text) => setWeight(text)}
          value={weight}
          keyboardType="numeric"
          style={{ backgroundColor: 'white', padding: 10, marginBottom: 10 }}
        />

        <Text style={{ color: '#333' }}>Magasság (m)</Text>
        <TextInput
          onChangeText={(text) => setHeight(text)}
          value={height}
          keyboardType="numeric"
          style={{ backgroundColor: 'white', padding: 10, marginBottom: 10 }}
        />

        <Button
          title="Számít"
          onPress={calcBodyMassIndex}
          buttonStyle={{ backgroundColor: '#4CAF50', marginVertical: 10 }}
        />
        <Button
          title="Törlés"
          onPress={clearFields}
          buttonStyle={{ backgroundColor: '#EF5350', marginVertical: 10 }}
        />

        <Text style={{ marginTop: 10, fontSize: 18, fontWeight: 'bold' }}>
          Az Ön testtömeg indexe: <Text style={{ color: getResultColor() }}>{bodyMassIndex}</Text>
        </Text>
        <View style={{backgroundColor: 'lightgreen', width: '100%',padding: 5, marginTop: 30}}>
          <Text style={{color: 'black',textAlign: 'center'}}>Vitovszki Tamás, 2024</Text>
        </View>
      </View>
    </View>
  );
}
