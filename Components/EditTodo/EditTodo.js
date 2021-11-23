import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

const EditTodo = (props) => {
  const [inputText, setInputText] = useState("");

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={styles.text}>Edit Todo</Text>
    </View>
  );
};

export default EditTodo;

const styles = StyleSheet.create({
  text: {
    width: 200,
    height: 200,
    color: "#000",
    backgroundColor: "pink",
  },
});
