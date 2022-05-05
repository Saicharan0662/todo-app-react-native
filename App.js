import { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import EditTodo from './src/screens/EditTodo';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (value) => {
  try {
    await AsyncStorage.setItem('todos', JSON.stringify(value))
  } catch (error) {
    console.log(error)
  }
}
const getData = async () => {
  try {
    const todos = await AsyncStorage.getItem('todos')
    return todos !== null ? JSON.parse(todos) : [];
  } catch (e) {
    console.log(error)
    return []
  }
}

export default function App() {

  const Stack = createNativeStackNavigator()
  const [todos, setTodos] = useState([])

  // storeData([{ text: "kdsfsdf", completed: false, _id: new Date().toString() }])
  console.log(getData())

  useEffect(async () => {
    setTodos(await getData())
  }, [])


  const updateTodoText = (_id, newText) => {
    const updatedTodos = todos.map(todo => {
      return todo._id === _id ? { ...todo, text: newText } : todo
    })
    setTodos(updatedTodos)
    storeData(updatedTodos)
  }

  return (
    <View style={styles.container}>
      <NavigationContainer initialScreen="Home">
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" options={{ headerShown: false }}>
            {props => <Home {...props} todos={todos} setTodos={setTodos} />}
          </Stack.Screen>
          <Stack.Screen name="Edit Todo" options={{ headerTitleAlign: "center" }}>
            {props => <EditTodo {...props} updateTodoText={updateTodoText} />}
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
