import { Stack } from "expo-router";
import { Pressable, View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

function HeaderButtons() {
  const router = useRouter();

  return (
    <View style={styles.headerButtons}>
      <Pressable
        onPress={() => router.push("/valorant/bundles")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Paquetes</Text>
      </Pressable>
      <Pressable
        onPress={() => router.push("/valorant/maps")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Mapas</Text>
      </Pressable>
      <Pressable
        onPress={() => router.push("/valorant/cards")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Cards</Text>
      </Pressable>
      <Pressable
        onPress={() => router.push("/valorant/weapons")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Armas</Text>
      </Pressable>
    </View>
  );
}

export default function TabsValorant() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#000",
        },
        headerTintColor: "#3e00faff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "",
          headerRight: () => <HeaderButtons />,
        }}
      />
      <Stack.Screen name="bundles" options={{ title: "Paquetes" }} />
      <Stack.Screen name="maps" options={{ title: "Mapas" }} />
      <Stack.Screen name="cards" options={{ title: "Cards" }} />
      <Stack.Screen name="weapons" options={{ title: "Armas" }} />
    </Stack>
  );
}

const styles = StyleSheet.create({
  headerButtons: {
    flexDirection: "row",
    gap: 8,
    marginRight: 10,
  },
  button: {
    paddingHorizontal: 17,
    paddingVertical: 6,
    backgroundColor: "#3e00faff",
    borderRadius: 6,
  },
  buttonText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
});
