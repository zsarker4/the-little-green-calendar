import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  {useFonts} from 'expo-font';
import { Text } from 'react-native';

import LandingScreen from './screens/Landing';
import HomeScreen from './screens/Home';
import ListScreen from './screens/List';
import CalendarScreen from './screens/Calendar';

const RootStack = createStackNavigator();


const App = () => {
    let [fontsLoaded] = useFonts({
        JakartaBold: require("../assets/fonts/PlusJakartaSans-Bold.ttf"),
        JakartaSemiBold: require("../assets/fonts/PlusJakartaSans-SemiBold.ttf"),
        JakartaMedium: require("../assets/fonts/PlusJakartaSans-Medium.ttf"),
        JakartaReg: require("../assets/fonts/PlusJakartaSans-Regular.ttf"),
        JakartaBoldItalic: require("../assets/fonts/PlusJakartaSans-BoldItalic.ttf"),
        });
    if (!fontsLoaded) {
        return undefined;
    }
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Landing" component={LandingScreen} 
        options={{
            headerStyle: { backgroundColor: "#FFF" },
            headerShadowVisible: false,
            headerTitle: "",
          }}
        />
        <RootStack.Screen name="Home" component={HomeScreen}
        options={{
            headerStyle: { backgroundColor: "#FFF" },
            headerShadowVisible: false,
            headerTitle: "",
            headerLeft: null,
          }}
        />
        <RootStack.Screen name="List" component={ListScreen}
            options={{
                headerStyle: { backgroundColor: "#FFF" },
                headerShadowVisible: false,
                headerTitle: "",
                headerLeft: null,
            }}
            />
            <RootStack.Screen name="Calendar" component={CalendarScreen}
            options={{
                headerStyle: { backgroundColor: "#FFF" },
                headerShadowVisible: false,
                headerTitle: "",
                headerLeft: null,
            }}
            />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;