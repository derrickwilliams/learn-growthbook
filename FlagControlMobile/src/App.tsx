import { useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Button, Text, DataTable } from 'react-native-paper';

export default function App() {
    const [features, setFeatures] = useState<string[]>([]);

    const handleButtonPress = async () => {
        const results = await fetch('http://localhost:3100/api/features/key_prod_c0ff4f993683082d')
        const body = await results.json();

        setFeatures(Object.keys(body.features));
    };

  return (
    <View style={styles.container}>
      <Button mode="elevated" onPress={handleButtonPress}>Load Flags</Button>
      <DataTable>
        <DataTable.Header>
            <DataTable.Title>Feature Key</DataTable.Title>
            <DataTable.Title>Default Value</DataTable.Title>
        </DataTable.Header>

        {Boolean(features.length) && features.map((feature, index) => (
            <DataTable.Row key={index}>
                <DataTable.Cell>{feature}</DataTable.Cell>
                <DataTable.Cell>[null]</DataTable.Cell>
            </DataTable.Row>
        ))}
      </DataTable>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
