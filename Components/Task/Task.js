import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import styles from "./TaskStyles";

const Task = (props) => {
  return (
    <View style={styles.todoContent}>
      <Text style={styles.text}>{props.task}</Text>
    </View>
  );
};

export default Task;
