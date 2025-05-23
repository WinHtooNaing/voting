import { Tabs } from "expo-router";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Foundation from "@expo/vector-icons/Foundation";
import Toast from "react-native-toast-message";
import { Provider as PaperProvider } from "react-native-paper";
const _layout = () => {
  return (
    <PaperProvider>
      <Tabs>
        <Tabs.Screen
          name="index"
          options={{
            headerShown: false,
            title: "Vote",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="vote" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="result"
          options={{
            headerShown: false,
            title: "Result",
            tabBarIcon: ({ color }) => (
              <Foundation name="results" size={24} color={color} />
            ),
          }}
        />
      </Tabs>
      <Toast />
    </PaperProvider>
  );
};

export default _layout;
