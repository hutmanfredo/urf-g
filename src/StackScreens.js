import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Members from './screens/Members';
import Departments from './screens/Departments';
import Leaders from './screens/Leaders';
import Financial from './screens/Financial';
import Attendance from './screens/Attendance';
import Reports from './screens/Reports';
import Zonal from './screens/Zonal';
import Branches from './screens/Branches';
const Stack = createStackNavigator();

const StackScreens = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Members" component={Members} />
        <Stack.Screen name="Departments" component={Departments} />
        <Stack.Screen name="Leaders" component={Leaders} />
        <Stack.Screen name="Financial" component={Financial} />
        <Stack.Screen name="Attendance" component={Attendance} />
        <Stack.Screen name="Reports" component={Reports} />
        <Stack.Screen name="Zonal" component={Zonal} />
        <Stack.Screen name="Branches" component={Branches} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackScreens
