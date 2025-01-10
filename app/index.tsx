import { StyleSheet, Text, View, SafeAreaView, Alert } from "react-native";
import List from "../components/List";
import { useState } from "react";
import { Link } from "expo-router";

export default function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      message: "Buy milk",
      isDone: true,
    },
    {
      id: 2,
      message: "Buy eggs",
      isDone: false,
    },
    {
      id: 3,
      message: "Buy bread",
      isDone: false,
    },
    {
      id: 4,
      message: "Buy butter",
      isDone: false,
    },
  ]);
  const changeStatus = (id: number) => {
    setTodos((prevState) =>
      prevState.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  const undoStatus = (id: number) => {
    Alert.alert("Undo", "Are you sure?", [
      {
        text: "Cancel",
        onPress: () => {},
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {
          setTodos((prevState) =>
            prevState.map((todo) =>
              todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
            )
          );
        },
      },
    ]);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listContainer}>
        {todos.map((todo) => (
          <List
            key={todo.id}
            {...todo}
            changeStatus={changeStatus}
            undoStatus={undoStatus}
          />
        ))}
      </View>
      <Link href={"/stopwatch"}>Go to StopWatch App</Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    textAlign: "center",
    fontSize: 26,
    fontWeight: "bold",
    color: "blue",
    marginTop: 10,
  },
  listContainer: {
    flex: 1,
    gap: 10,
    marginTop: 10,
    marginHorizontal: 10,

  },
});
