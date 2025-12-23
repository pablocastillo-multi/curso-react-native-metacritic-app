import { ScrollView, StyleSheet, Text, View, Image, Pressable } from "react-native";
import { Link } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import { Screen } from "../components/Screen";
import {Stack} from "expo-router";
import { useState, useEffect } from "react";
import { getGamesDetails } from "../lib/metacritic";
import { ActivityIndicator } from "react-native";
import { Home } from "../icons/Icons";

export default function Detail() {
  const { id } = useLocalSearchParams();
  const [gameInfo, setGameInfo] = useState(null);

  useEffect(() => {
    getGamesDetails(id).then(setGameInfo);
  }, [id]);

  if (!gameInfo) {
    return (
      <Screen>
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#ffe600ff" />
        </View>
      </Screen>
    );
  }
  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#ffe600ff" },
          headerTintColor: "#000",
          headerTitle: gameInfo.name,
          headerLeft: () => (
            <Link asChild href="/">
              <Pressable style={styles.back}>
                <Home  />
              </Pressable>
            </Link>
          ),
        }}
      />

      <ScrollView style={styles.container}>
        <Image
          source={{ uri: gameInfo.image }}
          style={styles.image}
          resizeMode="cover"
        />

        <Text style={styles.title}>{gameInfo.name}</Text>

        <View style={styles.info}>
          <Text style={styles.label}>📅 Lanzamiento</Text>
          <Text style={styles.value}>{gameInfo.releaseDate}</Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.label}>⭐ Rating</Text>
          <Text style={styles.value}>{gameInfo.rating}</Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.label}>🎮 Plataformas</Text>
          <Text style={styles.value}>
            {Array.isArray(gameInfo.platforms)
              ? gameInfo.platforms.join(", ")
              : gameInfo.platforms}
          </Text>
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    paddingHorizontal: 20,
  },

  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },

  image: {
    width: "100%",
    height: 280,
    borderRadius: 16,
    marginTop: 20,
    marginBottom: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },

  info: {
    marginBottom: 16,
  },

  label: {
    fontSize: 14,
    color: "#ffe600ff",
    marginBottom: 4,
  },

  value: {
    fontSize: 16,
    color: "#ddd",
  },
});

