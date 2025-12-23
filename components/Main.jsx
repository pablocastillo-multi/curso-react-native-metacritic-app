import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { getLatestGames } from "../lib/metacritic";
import { useEffect, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimationGameCard } from "./GameCard";
import { Screen } from "./Screen";
import { Stack } from "expo-router";
import { Link } from "expo-router";
import { AboutIcon } from "../icons/Icons"
import { Pressable } from "react-native";
import { Valorant } from "../icons/Logo";


export function Main() {
  const [games, setGames] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getLatestGames().then(setGames);
  }, []);

  if (games.length === 0) {
    return (
      <View style={[styles.loader, { paddingTop: insets.top }]}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  return ( 
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: {backgroundColor: "#ff0000ff"},
          headerTintColor: "black",
          headerRight: () => (
            <Link asChild href="/about">
              <Pressable style={styles.about}>
                {({pressed}) =><AboutIcon style={{ opacity: pressed ? 0.5 : 1}}/>}
              </Pressable>
            </Link>
          )
        }}
      />
      <FlatList
        contentContainerStyle={styles.list}
        data={games}
        keyExtractor={(game) => game.slug}
        renderItem={({ item, index }) => (
          <AnimationGameCard game={item} index={index} />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  list: {
    paddingBottom: 40,
    alignItems: "center",
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  about: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
});
