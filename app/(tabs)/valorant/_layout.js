import { Tabs } from "expo-router";
import { BundleIcon, CardsIcon, MapIcon, WeaponIcon, HomeIcon } from "../../../icons/Icons";
import { Pressable } from "react-native";

export default function TabsValorant() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: { backgroundColor: "#000" },
                tabBarActiveTintColor: "yellow",
            }}
        >
            <Tabs.Screen
                name="valorant"
                options={{
                    title: "Agentes",
                    tabBarIcon: ({ color, size }) => (
                        <HomeIcon color={color} size={size} />
                    ),
                }}
            />
            <Tabs.Screen
                name="bundles"
                options={{
                    title: "Paquetes",
                    tabBarIcon: ({ color, size }) => (
                        <BundleIcon color={color} size={size} />
                    ),
                }}
            />
            <Tabs.Screen
                name="maps"
                options={{
                    title: "Mapas",
                    tabBarIcon: ({ color, size }) => (
                        <MapIcon color={color} size={size} />
                    ),
                }}
            />
            <Tabs.Screen
                name="cards"
                options={{
                    title: "Cards de personajes",
                    tabBarIcon: ({ color, size }) => (
                        <CardsIcon color={color} size={size} />
                    ),
                }}
            />
            <Tabs.Screen
                name="weapons"
                options={{
                    title: "Armas",
                    tabBarIcon: ({ color, size }) => (
                        <WeaponIcon color={color} size={size} />
                    ),
                }}
            />
        </Tabs>
    )
}