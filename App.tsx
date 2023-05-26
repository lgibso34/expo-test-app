import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { RootNavigator } from "./RootNavigator";

export default function App() {
  return (
    <>
      <StatusBar />
      <RootNavigator />
    </>
  );
}
