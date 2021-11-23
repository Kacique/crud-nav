import React from "react";
import { StyleSheet, Pressable, Text, View, FlatList } from "react-native";
import styles from "./Styles.js";
import stylesTask from "../Task/TaskStyles";

// Custom Components
import Task from "../Task/Task.js";

const deleteTask = (index) => {
  let newTodo = [...props.todos];
  newTodo.splice(index, 1);
  props.setTodo(newTodo);
};

const renderItem = ({ task }) => {
  return (
    <Pressable
      style={stylesTask.todoContent}
      onPress={() => props.navigation.navigate("Edit")}
      onLongPress={() => alert("Delete")}
    >
      <Text style={stylesTask.text}>{task}</Text>
      {console.log(props.task)}
    </Pressable>
  );
};
const ViewTodos = (props) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      <View style={styles.contentView}>
        <Pressable
          style={styles.button}
          onPress={() => props.navigation.navigate("Add")}
          onLongPress={() => alert("Add")}
        >
          <Text style={styles.buttonText}>Add</Text>
        </Pressable>
        <FlatList
          data={props.todos}
          renderItem={renderItem}
          keyExtractor={(task) => props.todos.indexOf(task)}
        ></FlatList>
      </View>
    </View>
  );
};

export default ViewTodos;
