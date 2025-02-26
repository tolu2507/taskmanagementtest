import { Day } from "@/constants/day";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { Avatar, IconButton, ProgressBar, Text } from "react-native-paper";
import { useSelector } from "react-redux";

const renderItem = ({ item }: { item: any }) => (
  <View
    style={{
      backgroundColor: "#eeeef3",
      gap: 10,
      paddingVertical: 20,
      //   paddingHorizontal: 16,
      width: 90,
      borderRadius: 20,
      marginRight: 12,
    }}>
    <Text
      style={{
        color: "gray",
        fontSize: 24,
        fontWeight: "700",
        textAlign: "center",
      }}>
      {item}
    </Text>
    <Text
      style={{
        color: "gray",
        fontSize: 14,
        fontWeight: "500",
        textAlign: "center",
      }}>
      {item}
    </Text>
  </View>
);

export default function Schedule() {
  const tasks = useSelector((state: any) => state.tasks.tasks);
  const [schedule, setSchedule] = useState<{ identifier: string; data: any }[]>(
    []
  );

  function createArray() {
    let hash = new Map();

    for (let index = 0; index < tasks.length; index++) {
      if (hash.has(tasks[index].timeStamp)) {
        hash.set(tasks[index].timeStamp, tasks[index]);
      } else {
        hash.set(tasks[index].timeStamp, tasks[index]);
      }
    }

    console.log(hash);
    return createArrays(hash);
  }

  function createArrays(val: any) {
    let replica = Day;
    console.log(val);

    let answer = replica.map((item) => {
      console.log(item);
      console.log(val.has(item));
      if (val.has(item.toString())) {
        return { identifier: item, data: val.get(item) };
      } else {
        return { identifier: item, data: null };
      }
    });

    return setSchedule(answer);
  }

  useEffect(() => {
    createArray();

    return () => {
      createArray();
    };
  }, []);

  return (
    <View style={{ paddingHorizontal: 16, paddingTop: 20 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
        <IconButton
          icon="chevron-left"
          iconColor={"gray"}
          size={20}
          onPress={() => router.navigate("/")}
          mode="outlined"
        />
        <Text
          style={{
            color: "black",
            textAlign: "center",
            fontSize: 24,
            fontWeight: "700",
          }}>
          Schedule
        </Text>
        <IconButton
          icon="dots-vertical"
          iconColor={"gray"}
          size={20}
          onPress={() => console.log("Pressed")}
          mode={"outlined"}
        />
      </View>
      <View>
        <View style={{ gap: 0 }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}>
            <Text style={{ color: "black", fontSize: 18, fontWeight: "700" }}>
              08 July 2022
            </Text>
            <IconButton
              icon="chevron-down"
              iconColor={"gray"}
              size={26}
              onPress={() => console.log("Pressed")}
            />
          </View>
          <Text style={{ color: "gray", fontSize: 14, fontWeight: "600" }}>
            08 July 2022
          </Text>
        </View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: 16 }}
          data={[1, 2, 3, 4, 5]}
          renderItem={renderItem}
        />
      </View>
      <FlatList
        style={{
          gap: 5,
          marginTop: 20,
          marginBottom: 40,
        }}
        ListHeaderComponent={
          <Text
            style={{
              color: "black",
              fontSize: 18,
              fontWeight: "700",
              paddingBottom: 20,
            }}>
            Timeline
          </Text>
        }
        data={schedule}
        renderItem={({ item }) => (
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 10,
              marginBottom: 24,
              alignItems: "center",
            }}>
            <Text style={{ color: "gray", fontSize: 16, fontWeight: "700" }}>
              {item.identifier}
            </Text>
            <View
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}>
              <View
                style={{ borderWidth: 0.5, borderColor: "gray", flex: 1 }}
              />
              {item.data !== null && (
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    paddingStart: 5,
                    borderRadius: 300,
                    backgroundColor: item.data.color,
                    paddingVertical: 6,
                    paddingEnd: 20,
                  }}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                    }}>
                    <Avatar.Image
                      size={45}
                      source={require("../assets/images/react-logo.png")}
                      style={{ right: 0 }}
                    />
                    <Avatar.Image
                      size={45}
                      source={require("../assets/images/react-logo.png")}
                      style={{ right: 10 }}
                    />
                  </View>
                  <View style={{ gap: 10 }}>
                    <Text
                      style={{
                        color: "white",
                        fontSize: 16,
                        fontWeight: "700",
                      }}>
                      {item.data.title + "".slice(0, 16)}
                    </Text>
                    <ProgressBar
                      progress={item.data.progress / 100}
                      color={"white"}
                    />
                  </View>
                </View>
              )}
            </View>
          </View>
        )}
      />
    </View>
  );
}
