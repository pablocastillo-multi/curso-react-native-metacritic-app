import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Screen } from "../components/Screen";
import { Stack } from "expo-router";
import {
  AppleLogo,
  ExpoGo,
  GitHub,
  GitHubCopilot,
  JavaScript,
  Postman,
  Spotify,
  VsCode,
} from "../icons/Logo";

export default function About() {
  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#0edbe2ff" },
          headerTintColor: "black",
          headerLeft: () => {},
          headerTitle: "Sobre el proyecto",
          headerRight: () => {},
        }}
      />
      <ScrollView>

        <Text style={styles.title}>Sobre el proyecto</Text>

        <Text style={styles.description}>
          Aplicacion de Metacritic para Android y iOS desarrollada con React
          Native y Expo. Esta aplicacion es una aplicacion de ejemplo para el
          curso de React Native de Metacritic. Tambien consume una API no
          oficial de Metacritic para obtener los datos de los juegos y una API
          de Valorant para obtener los datos de los personajes.
        </Text>

        <Text style={styles.title}>Frameworks y tecnologias utilizadas</Text>

        <View style={styles.framework}>
          <View style={styles.item}>
            <GitHub style={styles.icon} />
            <Text style={styles.name}>GitHub</Text>
          </View>

          <View style={styles.item}>
            <Spotify style={styles.icon} />
            <Text style={styles.name}>Spotify</Text>
          </View>

          <View style={styles.item}>
            <ExpoGo style={styles.icon} />
            <Text style={styles.name}>Expo</Text>
          </View>

          <View style={styles.item}>
            <AppleLogo style={styles.icon} />
            <Text style={styles.name}>Apple</Text>
          </View>

          <View style={styles.item}>
            <Postman style={styles.icon} />
            <Text style={styles.name}>Postman</Text>
          </View>

          <View style={styles.item}>
            <JavaScript style={styles.icon} />
            <Text style={styles.name}>JavaScript</Text>
          </View>

          <View style={styles.item}>
            <VsCode style={styles.icon} />
            <Text style={styles.name}>VS Code</Text>
          </View>

          <View style={styles.item}>
            <GitHubCopilot style={styles.icon} />
            <Text style={styles.name}>GitHub Copilot</Text>
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    backgroundColor: "#000",
  },
  backButton: {
    marginTop: 60,
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  description: {
    fontSize: 15,
    color: "#ddd",
    lineHeight: 25,
    marginBottom: 20,
  },
  framework: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 20,
  },
  item: {
    width: "25%",
    alignItems: "center",
    marginBottom: 30,
  },
  icon: {
    width: 45,
    height: 45,
    marginBottom: 8,
  },
  name: {
    fontSize: 15,
    color: "#ddd",
    textAlign: "center",
  },
});
