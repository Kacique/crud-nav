import React, { useEffect } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

const EditTodo = (props) => {
  const { task } = props.route.params;
  const [inputText, setInputText] = useState(task);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TextInput value={inputText} onChangeText={setInputText}>
        Edit Todo
      </TextInput>
    </View>
  );
};

export default EditTodo;

const styles = StyleSheet.create({});
