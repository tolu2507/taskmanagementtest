import { ReactNode } from "react";
import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import { useSelector } from "react-redux";

export default function AppContent({
  children,
  title,
}: {
  children: ReactNode;
  title: "On Progress" | "Completed";
}) {
  const tasks = useSelector((state: any) => state.tasks.tasks);
  let amount = tasks.filter(
    (item: any) => item.status === "In Progress"
  ).length;
  return (
    <View style={{ width: "100%", marginBottom: 16 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 6,
        }}>
        <Text style={{ color: "black", fontSize: 18, fontWeight: "800" }}>
          {title}{" "}
          <Text style={{ color: "gray" }}>
            {title === "On Progress" && amount > 0 && `(${amount})`}
          </Text>
        </Text>
        <Button
          mode="text"
          textColor="blue"
          onPress={() => console.log("Pressed")}>
          View More
        </Button>
      </View>
      {children}
    </View>
  );
}
