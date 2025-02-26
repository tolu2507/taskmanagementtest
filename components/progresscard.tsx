import { Pressable, StyleSheet, View } from "react-native";
import { Avatar, Divider, Text } from "react-native-paper";
import SubHeader from "./subheader";
import CardSubWrapper from "./cardsubcomp";
import { useDispatch } from "react-redux";
import { updateTaskStatus } from "@/store/features/taskSlice";

export default function ProgressCard({
  item,
}: {
  item: {
    id: number;
    title: string;
    category: string;
    status: string;
    progress: number;
    date: any;
    time: any;
    description: string;
    color: string;
  };
}) {
  const dispatch = useDispatch();

  const handleCreateTask = () => {
    console.log(item);
    if (item.id) {
      dispatch(
        updateTaskStatus({
          id: item.id,
          status: item.status === "In Progress" ? "Completed" : "In Progress",
        })
      );
    } else {
      alert("Please fill in all fields!");
    }
  };

  return (
    <Pressable onPress={handleCreateTask}>
      <View style={[styles.container, { borderBottomColor: item.color }]}>
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            justifyContent: "space-between",
          }}>
          <CardSubWrapper>
            <Text style={{ color: "#000", fontSize: 20, fontWeight: "600" }}>
              {item.title}
            </Text>
            <Text style={{ color: "grey", fontSize: 14, fontWeight: "500" }}>
              {item.date}
            </Text>
          </CardSubWrapper>
          <Avatar.Image
            size={50}
            source={require("../assets/images/react-logo.png")}
          />
        </View>
        <Divider style={{ marginVertical: 14 }} />
        <CardSubWrapper>
          <Text style={{ color: "grey", fontSize: 14, fontWeight: "400" }}>
            Description :
          </Text>
          <Text
            style={{
              color: "#000",
              fontSize: 15,
              fontWeight: "500",
              width: "92%",
            }}>
            {item.description}
          </Text>
        </CardSubWrapper>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 14,
          }}>
          <SubHeader title="Teams">
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
              <Avatar.Image
                size={20}
                source={require("../assets/images/react-logo.png")}
                style={{ right: 20 }}
              />
              <Avatar.Image
                size={20}
                source={require("../assets/images/react-logo.png")}
                style={{ right: 30 }}
              />
              <Avatar.Image
                size={20}
                source={require("../assets/images/react-logo.png")}
                style={{ right: 40 }}
              />
            </View>
          </SubHeader>
          <SubHeader title="Progress">
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}>
              <View
                style={{
                  borderRadius: 30,
                  width: 30,
                  height: 30,
                  borderColor: item.progress === 0 ? "red" : "green",
                  borderWidth: 4,
                  marginRight: 8,
                }}
              />
              <Text style={{ color: "black", fontSize: 20, fontWeight: "800" }}>
                {item.progress}%
              </Text>
            </View>
          </SubHeader>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    elevation: 2,
    borderRadius: 12,
    backgroundColor: "white",
    paddingHorizontal: 16,
    paddingVertical: 20,
    marginTop: 16,
    borderBottomWidth: 12,
    marginRight: 20,
    width: 330,
  },
});
