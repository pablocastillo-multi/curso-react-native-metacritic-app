import { View, Pressable } from "react-native";
import { Link, Slot, Stack } from "expo-router";
import { Logo } from "../icons/Logo";
import { AboutIcon } from "../icons/Icons";

export default function Layout() {
    return (
        <View style={{ flex: 1, backgroundColor: "#000000ff" }}>
            <Stack 
                screenOptions={{
                    headerStyle: {backgroundColor: "rgba(4, 45, 255, 1)" },
                    headerTintColor: "yellow",
                    headerTitle: "",
                    headerLeft: () => false,
                    headerRight: () => (
                        <Link asChild href="/about">
                            <Pressable>
                                {({pressed}) =><AboutIcon style={{ opacity: pressed ? 0.5 : 1}}/>}
                            </Pressable>
                        </Link>
                    )
                }}
            />
        </View>
    )
}