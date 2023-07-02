import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import Colors from "../constants/colors";
import Home from "../pages/Home";
import Town from "../pages/Town";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarStyle: styles.tabBarStyle }}
    >
      <Tab.Screen name="홈" component={Home} />
      <Tab.Screen name="동네생활" component={Town} />
      <Tab.Screen name="내 근처" component={Town} />
      <Tab.Screen name="채팅" component={Town} />
      <Tab.Screen name="나의 당근" component={Town} />
    </Tab.Navigator>
  );
}

export default MyTabs;

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: Colors.background,
  },
});
