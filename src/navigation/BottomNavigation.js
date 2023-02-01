import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import Home from "../screen/HomeScreen";
import MarketScreen from "../screen/MarketScreen";
import ProfileScreen from "../screen/ProfileScreen";

import { Entypo, AntDesign, Ionicons } from "@expo/vector-icons";

const Bottom = createBottomTabNavigator();

function BottomNavigator() {
  return (
    <NavigationContainer>
      <Bottom.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: { backgroundColor: "#514B4B", borderTopColor: "black" },
          tabBarInactiveTintColor: "black",
          tabBarActiveTintColor: "#fff",
        }}
      >
        <Bottom.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Entypo name="home" size={24} color={color} />
            ),
          }}
        />
        <Bottom.Screen
          name="MarketScreen"
          component={MarketScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="areachart" size={24} color={color} />
            ),
          }}
        />
        <Bottom.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" size={24} color={color} />
            ),
          }}
        />
      </Bottom.Navigator>
    </NavigationContainer>
  );
}

export default BottomNavigator;
