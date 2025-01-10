import { Link, Stack } from "expo-router";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Pressable } from "react-native";
const _layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Stopwatch App",
          headerRight: () => (
            <Link href={"/stopwatch/record"} asChild>
              <Pressable hitSlop={20}>
                <MaterialIcons name="history" size={24} color="black" />
              </Pressable>
            </Link>
          ),
        }}
      />
    </Stack>
  );
};

export default _layout;
