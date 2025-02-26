import { ReactNode } from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";

export default function ModalCard({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <View style={{ marginBottom: 12 }}>
      <Text
        style={{
          color: "black",
          fontSize: 16,
          fontWeight: "700",
          textAlign: "left",
        }}>
        {title}
      </Text>
      {children}
    </View>
  );
}
