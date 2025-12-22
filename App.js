import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Pressable } from 'react-native';

const icon = require('./assets/icon.png');

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Pressable onPress={() => alert('Hola')}>
        <Image source={icon} style={{ width: 100, height: 100 }} />
      </Pressable>
      <Text style={styles.text}>
        ¡Hola! Este es mi aplicación de expo-cli
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  text: {
    fontSize: 12.5,
    width: '100%',
    textAlign: 'center', // Alinea el texto al centro
    color: '#fff' // Color del texto
  }
});
