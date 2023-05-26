import { Pressable, Text, View, StyleSheet, TextProps } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          key="Home"
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: "Expo App",
            headerLeft: CloseButton,
            headerRight: EditButton,
          }}
        />
        <Stack.Screen
          key="Test"
          name="Test Page"
          component={TestPage}
          options={{
            headerTitle: "Test Page",
            // headerLeft: HeaderBackButton
            headerBackVisible: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function WhiteText({ children, style }: TextProps) {
  return (
    <Text style={StyleSheet.flatten([{ color: "white" }, style])}>
      {children}
    </Text>
  );
}

function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
      }}
    >
      <WhiteText style={{ marginBottom: 16 }}>Home Screen</WhiteText>
      <Pressable
        accessibilityRole="button"
        onPress={() => navigation.navigate("Test Page")}
      >
        <WhiteText
          style={{ padding: 16, backgroundColor: "#fff", color: "black" }}
        >
          Go To Test Page
        </WhiteText>
      </Pressable>
    </View>
  );
}
function CloseButton() {
  return (
    <Pressable accessibilityRole="button">
      <Text>Close</Text>
    </Pressable>
  );
}
function EditButton() {
  return (
    <Pressable accessibilityRole="button">
      <Text>Edit</Text>
    </Pressable>
  );
}
function TestPage() {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
      }}
    >
      <WhiteText style={{ marginBottom: 16 }}>
        Welcome to the test page
      </WhiteText>
      <Pressable accessibilityRole="button" onPress={() => navigation.goBack()}>
        <WhiteText
          style={{ padding: 16, backgroundColor: "#fff", color: "black" }}
        >
          Go Back
        </WhiteText>
      </Pressable>
    </View>
  );
}
