import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Welcome from './pages/Welcome';
import Timer from './pages/Timer';

function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen  name="welcome" component={Welcome} />
        <AppStack.Screen  name="Timer" component={Timer} />
      </AppStack.Navigator>
    </NavigationContainer>
  )
}

export default Routes;