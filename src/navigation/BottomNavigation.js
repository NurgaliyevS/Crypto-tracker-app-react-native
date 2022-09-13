import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../screen/HomeScreen';
import MarketScreen from '../screen/MarketScreen';
import ProfileScreen from '../screen/ProfileScreen';

const Bottom = createBottomTabNavigator();

function BottomNavigator() {
  return (
    <NavigationContainer>
      <Bottom.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: { backgroundColor: '#514B4B' },
          tabBarInactiveTintColor: 'black',
          tabBarActiveTintColor: '#fff',
        }}
      >
        <Bottom.Screen
          name='Home'
          component={Home}
          options={
            {
              // tabBarIcon: ({ color, size }) => (
              //   <Ionicons name='alarm-outline' color={color} size={size} />
              // ),
            }
          }
        />
        <Bottom.Screen
          name='MarketScreen'
          component={MarketScreen}
          options={
            {
              // tabBarIcon: ({ color, size }) => (
              //   <Ionicons name='subway-outline' color={color} size={size} />
              // ),
            }
          }
        />
        <Bottom.Screen
          name='ProfileScreen'
          component={ProfileScreen}
          options={
            {
              // tabBarIcon: ({ color, size }) => (
              //   <Ionicons
              //     name='document-text-outline'
              //     color={color}
              //     size={size}
              //   />
              // ),
            }
          }
        />
      </Bottom.Navigator>
    </NavigationContainer>
  );
}

export default BottomNavigator;
