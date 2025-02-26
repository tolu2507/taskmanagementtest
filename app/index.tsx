import AppContent from "@/components/appcontent";
import Appheader from "@/components/appheader";
import CompletedCard from "@/components/completedcard";
import ModalCard from "@/components/modalcard";
import CreateModal from "@/components/modals";
import ProgressCard from "@/components/progresscard";
import { useState } from "react";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import {
  Button,
  Divider,
  FAB,
  Modal,
  Portal,
  Text,
  TextInput,
} from "react-native-paper";
import { useSelector } from "react-redux";

export default function Index() {
  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const tasks = useSelector((state: any) => state.tasks.tasks);

  return (
    <View style={styles.container}>
      <Appheader />
      <FAB
        icon="plus"
        label="Create New"
        color="white"
        style={styles.fab}
        onPress={showModal}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <AppContent title="On Progress">
          <FlatList
            data={tasks.filter((item: any) => item.status === "In Progress")}
            renderItem={({ item }) => <ProgressCard item={item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </AppContent>
        <AppContent title="Completed">
          <FlatList
            data={tasks.filter((item: any) => item.status !== "In Progress")}
            renderItem={({ item }) => <CompletedCard item={item} />}
            showsVerticalScrollIndicator={false}
            scrollEnabled={false}
          />
        </AppContent>
      </ScrollView>
      <CreateModal visible={visible} hideModal={hideModal} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 14,
    backgroundColor: "#fff",
    width: "100%",
  },
  containerStyle: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    display: "flex",
    // gap: 10,
  },
  modal: {
    backgroundColor: "white",
    padding: 20,
    borderTopRightRadius: 26,
    borderTopLeftRadius: 26,
  },
  fab: {
    position: "absolute",
    right: 0,
    left: 12,
    bottom: 20,
    backgroundColor: "blue",
    zIndex: 20,
    width: "100%",
  },
});
