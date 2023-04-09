import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './src/screens/Home/HomeScreen';
import OrdersScreen from './src/screens/Order/OrderScreen';
import ProductsScreen from './src/screens/Product/ProductScreen';


const Tab = createBottomTabNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home-sharp' : 'home-outline';
            } else if (route.name === 'Orders') {
              iconName = focused ? 'cart-sharp' : 'cart-outline';
            } else if (route.name === 'Products') {
              iconName = focused ? 'list-sharp' : 'list-outline';
            } else {
              iconName = 'help'; // Default icon
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: '#f8f8f8',
            borderTopWidth: 1,
            borderTopColor: '#e5e5e5',
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Orders" component={OrdersScreen} />
        <Tab.Screen name="Products" component={ProductsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
