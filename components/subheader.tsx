import { Text } from "react-native-paper";
import CardSubWrapper from "./cardsubcomp";
import { ReactNode } from "react";

export default function SubHeader({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <CardSubWrapper>
      <Text style={{ color: "grey", fontSize: 14, fontWeight: "400" }}>
        {title} :
      </Text>
      {children}
    </CardSubWrapper>
  );
}
