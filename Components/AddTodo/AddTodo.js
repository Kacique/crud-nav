import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";

const AddTodo = (props) => {
  const [task, setTask] = useState("");

  const handleAddTask = () => {
    props.setTodos([...props.todos, task]);
    props.navigation.navigate("View");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add Todo"
        placeholderTextColor="#0067B1"
        value={task}
        onChangeText={(text) => setTask(text)}
      ></TextInput>

      <Pressable style={styles.addButton} onPress={() => handleAddTask()}>
        <Text>Add</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    fontSize: 18,
    height: 40,
    margin: 12,
    //borderWidth: 0,
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 0,
    width: "80%",
  },
  addButton: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 5,
    width: "20%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    marginLeft: "60%",
    paddingVertical: 12,
  },
});

export default AddTodo;
