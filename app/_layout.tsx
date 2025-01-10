// import { Stack } from 'expo-router'
// import React from 'react'

// const Layout = () => {
//   return (
//     <Stack>
//           <Stack.Screen name="index" options={ { title: "Todo App" } } />
//       <Stack.Screen name="stopwatch" options={ { title: "Stopwatch" } } />
//       <Stack.Screen name="creation" options={ { title: "Student App",presentation:"modal",animation:"slide_from_bottom" } } />
//     </Stack>
//   );
// }

// export default Layout

import { Tabs } from 'expo-router'
import React from 'react'
import Entypo from "@expo/vector-icons/Entypo";

const _layout = () => {
  return (
    <Tabs screenOptions={{tabBarActiveTintColor: "blue"}}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Todo App",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="list" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="stopwatch"
        options={{
          title: "Stopwatch",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="stopwatch" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="creation"
        options={{
          title: "Create",
          tabBarIcon: ({color,size}) => <Entypo name="folder" size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}

export default _layout
