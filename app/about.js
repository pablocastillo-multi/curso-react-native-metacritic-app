import { ScrollView, StyleSheet, Text, Pressable } from "react-native";
import { Link } from "expo-router";


export default function About() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Link asChild href="/">
       <Pressable style={styles.backButton}>
        {({pressed}) =><About style={{ opacity: pressed ? 0.5 : 1}}/>}
        </Pressable>
      </Link>

      <Text style={styles.title}>Sobre el proyecto</Text>

      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Text>

      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  backButton: {
    marginTop: 60,
    marginBottom: 20,
  },
  backText: {
    fontSize: 16,
    color: "rgb(81, 175, 197)",
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
});
