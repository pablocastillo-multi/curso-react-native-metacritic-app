import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
export function Screen({ children }) {
    const insets = useSafeAreaInsets();
  return (
    <View style={{ flex: 1, backgroundColor: "#000000ff", paddingTop: 10, paddingBottom: insets.bottom }}>
        {children}
    </View>
  );
}