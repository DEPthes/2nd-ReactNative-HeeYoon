import { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Colors from "./constants/colors";
import Home from "./pages/Home";
import { NavigationContainer } from "@react-navigation/native";

import Navigation from "./components/MyTabs";
import MyTabs from "./components/MyTabs";

export default function App() {
  screen = <Home />;

  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  footerView: {
    backgroundColor: "red",
    height: 20,
  },
});
