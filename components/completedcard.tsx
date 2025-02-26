import { StyleSheet, View } from "react-native";
import { Avatar, Divider, Icon, Text } from "react-native-paper";
import CardSubWrapper from "./cardsubcomp";

export default function CompletedCard({
  item,
}: {
  item: {
    title: string;
    // category: string;
    // status: string;
    // progress: number;
    // date: any;
    time: any;
    description: string;
    color: string;
  };
}) {
  return (
    <View style={[styles.container, { borderStartColor: item.color }]}>
      <View style={styles.body}>
        <CardSubWrapper>
          <Text style={styles.title}>{item.title}</Text>
          <Text numberOfLines={1} style={styles.description}>
            {item.description}
          </Text>
        </CardSubWrapper>
        <View style={styles.check}>
          <Icon source="check" color={"white"} size={20} />
        </View>
      </View>
      <Divider style={{ marginVertical: 14 }} />
      <View style={styles.down}>
        <Text style={{ color: "gray", fontSize: 16, fontWeight: "800" }}>
          {item.time}
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}>
          <Avatar.Image
            size={20}
            source={require("../assets/images/react-logo.png")}
            style={{ right: 0 }}
          />
          <Avatar.Image
            size={20}
            source={require("../assets/images/react-logo.png")}
            style={{ right: 10 }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    elevation: 1,
    borderRadius: 12,
    backgroundColor: "white",
    paddingHorizontal: 16,
    paddingVertical: 20,
    marginTop: 16,
    borderStartWidth: 12,
  },
  down: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    //   marginTop: 6,
  },
  check: {
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  description: {
    color: "grey",
    fontSize: 14,
    fontWeight: "500",
    width: 250,
  },
  title: {
    color: "#000",
    fontSize: 20,
    fontWeight: "600",
    textDecorationLine: "line-through",
  },
  body: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
});
