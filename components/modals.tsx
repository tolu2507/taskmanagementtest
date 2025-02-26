import { StyleSheet, View } from "react-native";
import {
  Button,
  Divider,
  Modal,
  Portal,
  Text,
  TextInput,
} from "react-native-paper";
import ModalCard from "./modalcard";
import { useState } from "react";
import { useDispatch } from "react-redux";
import DateTimePicker from "@react-native-community/datetimepicker";
import { createTask } from "@/store/features/taskSlice";

export default function CreateModal({
  visible,
  hideModal,
}: {
  visible: boolean;
  hideModal: () => void;
}) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Personal");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState<"date" | "time">("date");

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShow(true);
    setMode("date"); // Display date picker
  };

  const showTimepicker = () => {
    setShow(true);
    setMode("time"); // Display time picker
  };

  const handleCreateTask = () => {
    if (title && category && description && date) {
      dispatch(
        createTask({
          title,
          category,
          description,
          date: date.toLocaleDateString(),
          time: date.toLocaleTimeString(),
        })
      );
      // Clear form after creating task
      setTitle("");
      setCategory("");
      setDescription("");
      setDate(new Date());
    } else {
      alert("Please fill in all fields!");
    }
    return hideModal();
  };

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={styles.containerStyle}>
        <View style={styles.modal}>
          <Text
            style={{
              color: "black",
              fontSize: 20,
              fontWeight: "700",
              textAlign: "center",
            }}>
            New Task ToDo
          </Text>
          <Divider style={{ marginVertical: 21 }} />
          <ModalCard title={"Title task"}>
            <TextInput
              label="Add Task Name..."
              activeUnderlineColor="transparent"
              value={title}
              onChangeText={(text) => setTitle(text)}
              underlineStyle={{ borderColor: "transparent" }}
              style={{ borderRadius: 14, marginTop: 10 }}
            />
          </ModalCard>
          <ModalCard title={"Category"}>
            <View
              style={{
                display: "flex",
                gap: 10,
                marginTop: 12,
                flexDirection: "row",
              }}>
              <Button
                icon="human"
                mode="contained"
                buttonColor={category === "Personal" ? "#3a89f0ea" : "#eeeef7"}
                style={{ height: 45, flex: 1 }}
                onPress={() => setCategory("Personal")}>
                Personal
              </Button>
              <Button
                icon="human"
                mode="contained"
                buttonColor={category === "Teams" ? "#3a89f0ea" : "#eeeef7"}
                textColor="gray"
                style={{ height: 45, flex: 1 }}
                onPress={() => setCategory("Teams")}>
                Teams
              </Button>
            </View>
          </ModalCard>
          <ModalCard title={"Description"}>
            <TextInput
              label="Add description"
              activeUnderlineColor="transparent"
              value={description}
              onChangeText={(text) => setDescription(text)}
              underlineStyle={{ borderColor: "transparent" }}
              multiline
              numberOfLines={7}
              contentStyle={{ height: 120 }}
            />
          </ModalCard>
          <View
            style={{
              display: "flex",
              gap: 10,
              marginTop: 12,
              flexDirection: "row",
            }}>
            <View style={{ flex: 1 }}>
              <Text>Date</Text>
              <Button
                icon="calendar"
                mode="contained"
                buttonColor="#eeeef7"
                textColor="gray"
                style={{ height: 45 }}
                onPress={showDatepicker}>
                {date.toLocaleDateString()}
              </Button>
            </View>
            <View style={{ flex: 1 }}>
              <Text>Time</Text>
              <Button
                icon="clock"
                mode="contained"
                buttonColor="#eeeef7"
                textColor="gray"
                style={{ height: 45 }}
                onPress={showTimepicker}>
                {date.toLocaleTimeString()}
              </Button>
            </View>
          </View>
          <View
            style={{
              display: "flex",
              gap: 10,
              marginTop: 20,
              flexDirection: "row",
            }}>
            <Button
              mode="outlined"
              buttonColor="#fff"
              textColor="#3f94da"
              style={{
                flex: 1,
                height: 45,
                borderWidth: 2,
                borderColor: "#3f94da",
              }}
              onPress={hideModal}>
              Cancel
            </Button>
            <Button
              mode="contained"
              buttonColor="#3f94da"
              textColor="white"
              style={{ flex: 1, height: 45 }}
              onPress={handleCreateTask}>
              Create
            </Button>
          </View>
        </View>
      </Modal>
      {show && (
        <DateTimePicker
          value={date}
          mode={mode}
          is24Hour={true} // Use 24-hour format
          display="default" // Can be 'default', 'spinner', 'clock', 'calendar'
          onChange={onChange}
        />
      )}
    </Portal>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    display: "flex",
  },
  modal: {
    backgroundColor: "white",
    padding: 20,
    borderTopRightRadius: 26,
    borderTopLeftRadius: 26,
  },
});
