import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import EditTodo from './src/screens/EditTodo';
import { ScrollView } from 'react-native-web';

export default function App() {

  const Stack = createNativeStackNavigator()
  const [todos, setTodos] = useState([])

  return (
    <View style={styles.container}>
      <NavigationContainer initialScreen="Home">
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" options={{ headerShown: false }}>
            {props => <Home {...props} todos={todos} setTodos={setTodos} />}
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
