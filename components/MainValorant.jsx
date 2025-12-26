import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  Text,
} from "react-native";
import { Screen } from "./Screen";
import { useEffect, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ValorantCard } from "./ValorantCard";
import { getValorantAgents } from "../lib/valorant";

export function MainValorant() {
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getValorantAgents().then((data) => {
      setAgents(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <Screen>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#ff4654" />
          <Text style={styles.loadingText}>Cargando agentes...</Text>
        </View>
      </Screen>
    );
  }

  return (
    <Screen>
      <View style={styles.container}>
        <Text style={styles.title}>VALORANT AGENTS</Text>
        <FlatList
          contentContainerStyle={styles.list}
          data={agents}
          keyExtractor={(agent) => agent.uuid}
          renderItem={({ item, index }) => (
            <ValorantCard agent={item} index={index} />
          )}
          numColumns={2}
          columnWrapperStyle={styles.row}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    color: "#ff4654",
    fontSize: 16,
    marginTop: 12,
    fontWeight: "600",
  },
  title: {
    fontSize: 28,
    fontWeight: "900",
    color: "#ff4654",
    textAlign: "center",
    marginBottom: 24,
    letterSpacing: 2,
    textTransform: "uppercase",
  },
  list: {
    paddingHorizontal: 12,
    paddingBottom: 20,
  },
  row: {
    justifyContent: "space-between",
    paddingHorizontal: 12,
  },
});