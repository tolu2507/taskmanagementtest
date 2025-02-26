import { ReactNode } from "react";
import { View } from "react-native";

export default function CardSubWrapper({ children }: { children: ReactNode }) {
  return <View style={{ gap: 5 }}>{children}</View>;
}
