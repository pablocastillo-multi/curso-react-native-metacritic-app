import { StyleSheet, View, FlatList, ActivityIndicator, Pressable } from "react-native";
import { getLatestGames } from "../lib/metacritic";
import { useEffect, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimationGameCard } from "./GameCard";
import { Logo } from "./Logo";
import {Link} from "expo-router";
import { Home } from "../icons/Icons";

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
    <View style={{ flex: 1, paddingTop: insets.top }}>
        <Link asChild href="/about">
            <Pressable>
                {({pressed}) =><Home style={{ opacity: pressed ? 0.5 : 1}}/>}
            </Pressable>
        </Link>
      <FlatList
        contentContainerStyle={styles.list}
        data={games}
        keyExtractor={(game) => game.slug}
        renderItem={({ item, index }) => (
          <AnimationGameCard game={item} index={index} />
        )}
        
        ListHeaderComponent={<Logo/>}
        ListHeaderComponentStyle={styles.header}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    paddingBottom: 40,
    alignItems: "center",
  },
  header: {
    marginBottom: 24,
    
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
  }
});
