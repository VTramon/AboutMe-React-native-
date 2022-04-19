import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import Animations from './components/Animations';
import Main from './components/Home';
import Movies from './components/Movies';
import Singers from './components/Singers';
import TVShows from './components/TVShows';

export type RootStackParams = {
  Home: any;
  TV: any;
  Movies: any;
  Animations: any;
  Singers: any;
};

const Stack = createNativeStackNavigator<RootStackParams>();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Main} />
        <Stack.Screen name="TV" component={TVShows} />
        <Stack.Screen name="Movies" component={Movies} />
        <Stack.Screen name="Animations" component={Animations} />
        <Stack.Screen name="Singers" component={Singers} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
