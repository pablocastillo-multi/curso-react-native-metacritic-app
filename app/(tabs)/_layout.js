import { Tabs } from "expo-router";
import { HomeIcon, InformationIcon, WeaponIcon } from "../../icons/Icons";
import { Valorant, ClashRoyale } from "../../icons/Logo";
import { Pressable } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "#000" },
        tabBarActiveTintColor: "yellow",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <HomeIcon color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ color, size }) => (
            <InformationIcon color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="valorant"
        options={{
          title: "",
          tabBarButton: (props) => (
            <Pressable
              {...props}
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              {({ pressed }) => (
                <Valorant
                  style={{
                    opacity: pressed ? 0.5 : 1,
                    transform: [{ translateY: -10 }],
                  }}
                />
              )}
            </Pressable>
          ),
        }}
      />
      <Tabs.Screen
        name="clashRoyale/index"
        options={{
          title: "",
          tabBarButton: (props) => (
            <Pressable
              {...props}
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              {({ pressed }) => (
                <ClashRoyale
                  style={{
                    opacity: pressed ? 0.5 : 1,
                    transform: [{ translateY: -10 }],
                  }}
                />
              )}
            </Pressable>
          ),
        }}
      />
    </Tabs>
  );
}
