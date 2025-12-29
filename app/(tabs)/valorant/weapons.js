import {View, Text, FlatList, ActivityIndicator, StyleSheet, Image} from "react-native";
import { Screen } from "../../../components/Screen";
import { useEffect, useState } from "react";
import { getValorantWeapons } from "../../../lib/valorant";


export default function Weapons() {
    const[weapons, setWeapons] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getValorantWeapons().then((data) => {
            setWeapons(data);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return (
            <Screen>
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color="#ff4654" />
                    <Text style={styles.loadingText}>Cargando armas...</Text>
                </View>
            </Screen>
        );
    }
    return (
        <Screen>
            <View style={styles.container}>
                <Text style={styles.title}>Weapons</Text>

                <FlatList
                    data={weapons}
                    keyExtractor={(item) => item.uuid}
                    renderItem={({ item }) => (
                        <View style={styles.card}>
                            <Image
                                source={{ uri: item.displayIcon }}
                                style={styles.image}
                                resizeMode="contain"
                            />
                            <Text style={styles.name}>{item.display}</Text>
                            <Text style={styles.description}>{item.category}</Text>
                        </View>
                    )}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
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
        marginBottom: 16,
        letterSpacing: 2,
    },
    card: {
        backgroundColor: "#111",
        padding: 16,
        borderRadius: 14,
        marginBottom: 16,
        alignItems: "center",
    },
    image: {
        width: "100%",
        height: 120,
        marginBottom: 12,
    },
    name: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "700",
        textAlign: "center",
    },
    description: {
        color: "#aaa",
        fontSize: 14,
        textAlign: "center",
    },
}); 