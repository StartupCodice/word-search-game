import "react-native-gesture-handler";
import React from "react";
import { Routes } from "./src/pages/Home/routes";
import { MusicProvider } from "./src/components/musicContext";
import { GestureHandlerRootView } from "react-native-gesture-handler";
export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Routes />
    </GestureHandlerRootView>
  );
}
