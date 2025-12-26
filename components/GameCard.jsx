import { View, Image, Text, StyleSheet, Animated, Pressable } from "react-native";
import { useEffect, useRef } from "react";
import { Link } from "expo-router";


export function GameCard({ game }) {
  const scoreColor =
    game.score >= 98 ? "#33e70b" : game.score >= 96 ? "#f7c600" : "#e74c3c";
  return (
    <Link href={`/${game.slug}`} asChild>
      <Pressable style={styles.card}>
        <Image style={styles.image} source={{ uri: game.image }} />

        <Text style={styles.name}>{game.name}</Text>

        <View style={styles.meta}>
          <Text style={styles.releaseDate}>{game.releaseDate}</Text>
          <Text style={[styles.score, { color: scoreColor }]}>⭐ {game.score}</Text>
          <Text style={styles.rating}>{game.rating}</Text>
          <Text style={styles.platforms}>{game.platforms}</Text>
          <Text style={styles.genres}>{game.genres}</Text>
        </View>
      </Pressable>
    </Link>
  );
}

export function AnimationGameCard({ game, index }) {
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 400,
        delay: index * 120,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: 400,
        delay: index * 120,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <Animated.View style={{ opacity, transform: [{ translateY }] }}>
      <GameCard game={game} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 220,
    backgroundColor: "#111",
    borderRadius: 14,
    padding: 16,
    marginBottom: 30,
    alignItems: "center",
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 12,
    marginBottom: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: "700",
    color: "#fff",
    textAlign: "center",
  },
  meta: {
    marginTop: 8,
    alignItems: "center",
  },
  releaseDate: {
    fontSize: 13,
    color: "#aaa",
  },
  score: {
    marginTop: 4,
    fontSize: 15,
    fontWeight: "bold",
    color: "#33e70b",
  },
  rating: {
    fontSize: 13,
    color: "#d40606ff",
  },
  platforms: {
    fontSize: 13,
    color: "#aaa",
  },
  genres: {
    fontSize: 13,
    color: "#aaa",
  },
});
