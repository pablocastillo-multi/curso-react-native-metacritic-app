import {
  View,
  Image,
  Text,
  StyleSheet,
  Animated,
  Pressable,
} from "react-native";
import { useEffect, useRef } from "react";
import { Link } from "expo-router";

export function ValorantCard({ agent, index }) {
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(20)).current;
  const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 400,
        delay: index * 50,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: 400,
        delay: index * 50,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Link href={`/valorant/${agent.uuid}`} asChild>
      <Pressable
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        <Animated.View
          style={[
            styles.card,
            {
              opacity,
              transform: [{ translateY }, { scale }],
            },
          ]}
        >
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{ uri: agent.fullPortrait }}
              resizeMode="cover"
            />
            <View style={styles.gradientOverlay} />
          </View>
          
          <View style={styles.content}>
            <Text style={styles.name} numberOfLines={1}>
              {agent.displayName}
            </Text>
            
            <View style={styles.descriptionContainer}>
              <Text style={styles.description} numberOfLines={2}>
                {agent.description}
              </Text>
            </View>
          </View>
        </Animated.View>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "65%",
    backgroundColor: "#1a1a1a",
    borderRadius: 16,
    marginBottom: 16,
    overflow: "hidden",
    elevation: 5,
    shadowColor: "#ff4654",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    borderWidth: 1,
    borderColor: "#2a2a2a",
  },
  imageContainer: {
    width: "100%",
    height: 180,
    backgroundColor: "#0f1923",
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  gradientOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "40%",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  content: {
    padding: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: "800",
    color: "#ff4654",
    textAlign: "center",
    marginBottom: 8,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  descriptionContainer: {
    minHeight: 40,
  },
  description: {
    fontSize: 12,
    color: "#b0b0b0",
    textAlign: "center",
    lineHeight: 16,
  },
});