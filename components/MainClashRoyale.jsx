import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Image,
} from "react-native";
import { Screen } from "./Screen";
import { useEffect, useState } from "react";
import { getClashRoyaleCards } from "../lib/clashRoyale";

/**
 * MainClashRoyale - Componente principal para mostrar las cartas de Clash Royale
 * 
 * Este componente se encarga de:
 * - Cargar las cartas desde la API
 * - Mostrar un indicador de carga mientras se obtienen los datos
 * - Renderizar una lista de cartas con su información (imagen, nombre, nivel, elixir)
 * 
 * @component
 * @example
 * return (
 *   <MainClashRoyale />
 * )
 */
export function MainClashRoyale() {
  // Estado para almacenar las cartas obtenidas de la API
  const [cards, setCards] = useState([]);
  // Estado para controlar si está cargando
  const [loading, setLoading] = useState(true);

  // useEffect se ejecuta al montar el componente para cargar las cartas
  useEffect(() => {
    getClashRoyaleCards().then((data) => {
      setCards(data);
      setLoading(false);
    });
  }, []);

  // Pantalla de carga con indicador y texto
  if (loading) {
    return (
      <Screen>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#ffc107" />
          <Text style={styles.loadingText}>Cargando Cartas...</Text>
        </View>
      </Screen>
    );
  }

  // Renderizado principal con la lista de cartas
  return (
    <Screen>
      <View style={styles.container}>
        {/* Encabezado con título */}
        <View style={styles.header}>
          <Text style={styles.title}>CLASH ROYALE</Text>
          <Text style={styles.subtitle}>Colección de Cartas</Text>
        </View>

        {/* Lista de cartas usando FlatList para rendimiento optimizado */}
        <FlatList
          data={cards}
          keyExtractor={(card) => card.id}
          renderItem={({ item }) => (
            // Tarjeta individual de cada carta
            <View style={styles.card}>
              {/* Contenedor de la imagen con fondo decorativo */}
              <View style={styles.imageContainer}>
                <View style={styles.imageBackground} />
                <Image
                  source={{ uri: item.iconUrls }}
                  style={styles.image}
                  resizeMode="contain"
                />
              </View>

              {/* Nombre de la carta */}
              <Text style={styles.name}>{item.name}</Text>

              {/* Información de la carta en forma de badges/insignias */}
              <View style={styles.statsContainer}>
                <View style={styles.statBadge}>
                  <Text style={styles.statLabel}>Nivel Max</Text>
                  <Text style={styles.statValue}>{item.maxLevel}</Text>
                </View>

                <View style={[styles.statBadge, styles.statBadgeMiddle]}>
                  <Text style={styles.statLabel}>Evolución</Text>
                  <Text style={styles.statValue}>{item.maxEvolutionLevel}</Text>
                </View>

                <View style={styles.statBadge}>
                  <Text style={styles.statLabel}>Elixir</Text>
                  <Text style={styles.statValue}>{item.elixirCost}</Text>
                </View>
              </View>
            </View>
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
        />
      </View>
    </Screen>
  );
}

/**
 * Estilos del componente
 * Organizados por secciones: container, loading, header, card, stats
 */
const styles = StyleSheet.create({
  // --- CONTENEDOR PRINCIPAL ---
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },

  // --- PANTALLA DE CARGA ---
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0a1628",
  },
  loadingText: {
    color: "#ffc107",
    fontSize: 18,
    marginTop: 16,
    fontWeight: "700",
    letterSpacing: 1,
  },

  // --- ENCABEZADO ---
  header: {
    alignItems: "center",
    marginVertical: 24,
    paddingBottom: 16,
    borderBottomWidth: 2,
    borderBottomColor: "#ffc107",
  },
  title: {
    fontSize: 28,
    fontWeight: "900",
    color: "#ffc107",
    letterSpacing: 2,
    textShadowColor: "rgba(255, 193, 7, 0.5)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  subtitle: {
    fontSize: 14,
    color: "#0073ffff",
    marginTop: 4,
    letterSpacing: 1,
  },

  // --- LISTA ---
  listContent: {
    paddingBottom: 20,
  },

  // --- TARJETA DE CARTA ---
  card: {
    backgroundColor: "#000000ff",
    borderRadius: 20,
    padding: 20,
    marginBottom: 16,
    alignItems: "center",
    // Sombra para iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    // Sombra para Android
    elevation: 8,
    borderWidth: 1,
    borderColor: "#1e3a5f",
  },

  // --- IMAGEN ---
  imageContainer: {
    position: "relative",
    marginBottom: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  imageBackground: {
    position: "absolute",
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: "#0a1628",
    borderWidth: 3,
    borderColor: "#ffc107",
  },
  image: {
    width: 130,
    height: 130,
    zIndex: 1,
  },

  // --- NOMBRE ---
  name: {
    fontSize: 20,
    fontWeight: "800",
    color: "#ffffff",
    marginBottom: 16,
    textAlign: "center",
    letterSpacing: 0.5,
  },

  // --- ESTADÍSTICAS ---
  statsContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    gap: 8,
  },
  statBadge: {
    flex: 1,
    backgroundColor: "#0a1628",
    borderRadius: 12,
    padding: 12,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#2d4a6f",
  },
  statBadgeMiddle: {
    backgroundColor: "#1a2a42",
    borderColor: "#ffc107",
  },
  statLabel: {
    fontSize: 10,
    color: "#8b9db8",
    marginBottom: 4,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  statValue: {
    fontSize: 18,
    fontWeight: "900",
    color: "#ffc107",
  },
});