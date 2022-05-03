import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import EditTodo from './src/screens/EditTodo';

export default function App() {

  const Stack = createNativeStackNavigator()

  return (
    <View style={styles.container}>
      <NavigationContainer initialScreen="Home">
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" options={{ headerShown: false }}>
            {props => <Home {...props} />}
          </Stack.Screen>
          <Stack.Screen name="Edit Todo">
            {props => <EditTodo {...props} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%"
  },
});
