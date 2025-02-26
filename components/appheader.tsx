import { router } from "expo-router";
import { View } from "react-native";
import { Avatar, IconButton, Text } from "react-native-paper";

export default function Appheader() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 14,
      }}>
      <View
        style={{
          flexDirection: "row",
          gap: 10,
        }}>
        <Avatar.Image
          size={40}
          source={require("../assets/images/react-logo.png")}
        />
        <View>
          <Text style={{ color: "grey", fontSize: 12, fontWeight: "500" }}>
            Hello,
          </Text>
          <Text style={{ color: "#000", fontSize: 16, fontWeight: "700" }}>
            Joko Husein
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          gap: 2,
        }}>
        <IconButton
          icon="calendar"
          iconColor={"black"}
          size={20}
          onPress={() => router.navigate("/schedule")}
          mode="contained-tonal"
        />
        <IconButton
          icon="bell-outline"
          iconColor={"black"}
          size={20}
          onPress={() => console.log("Pressed")}
          mode="contained-tonal"
        />
      </View>
    </View>
  );
}
