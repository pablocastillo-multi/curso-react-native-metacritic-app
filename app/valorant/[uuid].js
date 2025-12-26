import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import { useEffect, useState } from "react";
import { useLocalSearchParams, Stack } from "expo-router";
import { Link } from "expo-router";
import { BackIcon, Home } from "../../icons/Icons";
import { Screen } from "../../components/Screen";
import { getValorantAgentsDetails } from "../../lib/valorant";

export default function ValorantDetail() {
  const { uuid } = useLocalSearchParams();
  const [agent, setAgent] = useState(null);

  useEffect(() => {
    getValorantAgentsDetails(uuid).then(setAgent);
  }, [uuid]);

  if (!agent) {
    return (
      <Screen>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#ff4654" />
          <Text style={styles.loadingText}>Cargando agente...</Text>
        </View>
      </Screen>
    );
  }

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#0f1923" },
          headerTintColor: "#ff4654",
          headerTitle: agent.displayName,
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
          },
          headerRight: () => {},
          headerLeft: () => (
            <Link asChild href="/valorant">
              <Pressable style={styles.headerButton}>
                <BackIcon size={24} color="#ff4654" />
              </Pressable>
            </Link>
          ),
        }}
      />
      
      <ScrollView 
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.heroSection}>
          <View style={styles.iconContainer}>
            <Image
              source={{ uri: agent.displayIcon }}
              style={styles.agentIcon}
              resizeMode="contain"
            />
          </View>
          
          <Text style={styles.agentName}>{agent.displayName}</Text>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={styles.headerLine} />
            <Text style={styles.sectionTitle}>INFORMACIÓN DEL ROL</Text>
            <View style={styles.headerLine} />
          </View>
          
          <View style={styles.infoCard}>
            <Text style={styles.label}>Rol del personaje</Text>
            <Text style={styles.value}>{agent.role}</Text>
          </View>

          <View style={styles.infoCard}>
            <Text style={styles.label}>Descripción del rol</Text>
            <Text style={styles.value}>{agent.roleDescription}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={styles.headerLine} />
            <Text style={styles.sectionTitle}>HABILIDADES</Text>
            <View style={styles.headerLine} />
          </View>

          {agent.abilities.map((ability, index) => (
            <View key={index} style={styles.abilityCard}>
              <View style={styles.abilityHeader}>
                <View style={styles.abilityNumber}>
                  <Text style={styles.abilityNumberText}>{index + 1}</Text>
                </View>
                <Text style={styles.abilityName}>{ability.displayName}</Text>
              </View>
              <Text style={styles.abilityDescription}>
                {ability.description}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0f1923",
  },
  loadingText: {
    color: "#ff4654",
    fontSize: 16,
    marginTop: 12,
    fontWeight: "600",
  },
  headerButton: {
    marginLeft: 16,
    padding: 4,
  },
  scrollContainer: {
    paddingBottom: 40,
  },
  heroSection: {
    alignItems: "center",
    paddingVertical: 32,
    backgroundColor: "#0f1923",
    borderBottomWidth: 1,
    borderBottomColor: "#2a2a2a",
  },
  iconContainer: {
    width: 160,
    height: 160,
    backgroundColor: "#1a1a1a",
    borderRadius: 80,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    borderWidth: 3,
    borderColor: "#ff4654",
    elevation: 8,
    shadowColor: "#ff4654",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 12,
  },
  agentIcon: {
    width: 140,
    height: 140,
  },
  agentName: {
    fontSize: 32,
    fontWeight: "900",
    color: "#ff4654",
    textTransform: "uppercase",
    letterSpacing: 2,
  },
  section: {
    padding: 20,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 8,
  },
  headerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#2a2a2a",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "800",
    color: "#ff4654",
    marginHorizontal: 12,
    letterSpacing: 1.5,
  },
  infoCard: {
    backgroundColor: "#1a1a1a",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: "#ff4654",
  },
  label: {
    fontSize: 13,
    color: "#ffb800",
    marginBottom: 8,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  value: {
    fontSize: 15,
    color: "#e0e0e0",
    lineHeight: 22,
  },
  abilityCard: {
    backgroundColor: "#1a1a1a",
    borderRadius: 12,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#2a2a2a",
  },
  abilityHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  abilityNumber: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#ff4654",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  abilityNumberText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "800",
  },
  abilityName: {
    fontSize: 18,
    fontWeight: "700",
    color: "#ff4654",
    flex: 1,
  },
  abilityDescription: {
    fontSize: 14,
    color: "#b0b0b0",
    lineHeight: 20,
  },
});