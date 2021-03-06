import React from 'react';
import { StyleSheet, View } from 'react-native';
import Contants from 'expo-constants';
import Home from './screens/Home';
import CreateEmployee from './screens/CreateEmployee';
import Profile from './screens/Profile';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducers/reducer';


const store = createStore(reducer);


const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <View style={styles.container}>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={myOptions} />
            <Stack.Screen name="CreateEmployee" component={CreateEmployee} options={{ ...myOptions, title: "Create Employee" }} />
            <Stack.Screen name="Profile" component={Profile} options={myOptions} />
          </Stack.Navigator>
        </View>
      </NavigationContainer>
    </Provider>
  );
}

const myOptions = {
  headerTintColor: "white",
  headerStyle: {
    backgroundColor: "#006aff"
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  },
});
