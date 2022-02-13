import React from 'react';
import AddPlayer from 'pages/BeforeGame/AddPlayer';
import EditPlayer from 'pages/BeforeGame/EditPlayer';
import Home from 'pages/BeforeGame/Home';
import LibPlayers from 'pages/BeforeGame/LibPlayers';
import PlayPlayers from 'pages/BeforeGame/PlayPlayers';
import ViewCamera from 'components/Camera';
import { createStackNavigator } from '@react-navigation/stack';

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
