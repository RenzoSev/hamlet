import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Home from 'pages/Home';
import LibPlayers from 'pages/LibPlayers';
import AddPlayer from 'pages/AddPlayer';
import ViewCamera from 'components/Camera';
import EditPlayer from 'pages/EditPlayer';
import PlayPlayers from 'pages/PlayPlayers';

const Stack = createStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />

      <Stack.Screen name="LibPlayers" component={LibPlayers} />

      <Stack.Screen name="AddPlayer" component={AddPlayer} />

      <Stack.Screen name="EditPlayer" component={EditPlayer} />

      <Stack.Screen name="PlayPlayers" component={PlayPlayers} />

      <Stack.Screen
        name="Camera"
        component={ViewCamera}
        options={{
          headerTransparent: true,
          cardStyle: { backgroundColor: '#000000' },
        }}
      />
    </Stack.Navigator>
  );
}
