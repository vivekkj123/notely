import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createTheme, ThemeProvider} from '@rneui/themed';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import CreateNote from './src/screens/screen_createNote';
import GettingStarted from './src/screens/screen_gettingStarted';
import HomeScreen from './src/screens/screen_home';

const theme = createTheme({
  Text: {
    titleStyle: {
      marginTop: 50,
      fontFamily: 'Metropolis-ExtraBold',
      fontSize: 36,
      color: '#343434',
      padding: 25,
    },
    paragraph: {
      fontFamily: 'Metropolis-Regular',
      fontSize: 20,
      color: '#535353',
      padding: 25,
    },
  },
});
const Stack = createStackNavigator();
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{headerShown: false, headerTransparent: true}}
            initialRouteName="GettingStarted">
            <Stack.Screen name="GettingStarted" component={GettingStarted} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="CreateNote" component={CreateNote} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

export default App;
