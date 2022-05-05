import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, FlatList } from 'react-native'
import React, { useState } from 'react'
import Todo from '../components/Todo'
import { ScrollView } from 'react-native-web'

const Home = ({ todos, setTodos }) => {

    const [input, setInput] = useState("")

    const addTodo = () => {
        if (!input) {
            Alert.alert("Please enter the todo")
            return;
        }

        setTodos([...todos, { completed: false, text: input, _id: new Date().toString() }])
        setInput("")
    }

    const deleteTodo = _id => {
        const updatedTodos = todos.filter(todo => todo._id !== _id)
        setTodos(updatedTodos)
    }

    const invertStatus = _id => {
        const updatedTodos = todos.map(todo => {
            return todo._id === _id ? { ...todo, completed: !todo.completed } : todo
        })
        setTodos(updatedTodos)
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Task Manager</Text>
                <TextInput placeholder='Complete pending project' style={styles.todoInput}
                    value={input}
                    onChangeText={text => setInput(text)}
                />
                <TouchableOpacity style={styles.btn} onPress={() => addTodo()}>
                    <Text style={styles.btnText}>Create!</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.todoContainer}>
                <View style={styles.top}>
                    <Text style={styles.title}>Your Todo's ({todos ? todos.length : 0})</Text>
                    <TouchableOpacity onPress={() => setTodos([])}><Text style={styles.clearBtn}>clear all</Text></TouchableOpacity>
                </View>
                <View style={styles.todos}>
                    {(todos && todos.length > 0) ?
                        <FlatList
                            keyExtractor={(item) => item._id}
                            data={todos}
                            showsVerticalScrollIndicator={true}
                            renderItem={({ item }) => {
                                return (
                                    <Todo
                                        todo={item}
                                        deleteTodo={deleteTodo}
                                        invertStatus={invertStatus}
                                    />
                                )
                            }}
                        /> :
                        <Text style={styles.notodoText}>No todos yet!</Text>}
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.01)"
    },
    header: {
        backgroundColor: "#fff",
        paddingHorizontal: 20,
        paddingTop: 35,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    headerText: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        letterSpacing: 2,
        paddingVertical: 10,
    },
    todoInput: {
        borderWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.3)",
        borderRadius: 6,
        paddingHorizontal: 10,
        paddingVertical: 5,
        fontSize: 18,
        marginVertical: 8,
    },
    btnText: {
        color: "#fff",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "400",
        fontSize: 18,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        backgroundColor: "#008080",
        width: 100,
        marginVertical: 10,
        alignSelf: "center"
    },
    todoContainer: {
        marginVertical: 20,
        paddingHorizontal: 20,
        position: "relative",
        top: 30,
    },
    top: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    clearBtn: {
        position: "relative",
        top: 7,
        color: "#0000FF"
    },
    todos: {
        marginTop: 20,
        height: "70%",
    },
    notodoText: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        position: "relative",
        top: 30,
        textTransform: "uppercase"
    }
})

export default Home
