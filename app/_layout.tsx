import store from "@/store/store";
import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";
import { Provider as StoreProvider } from "react-redux";

export default function RootLayout() {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <Stack
          screenOptions={{
            headerShown: false,
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="schedule" />
        </Stack>
      </PaperProvider>
    </StoreProvider>
  );
}
