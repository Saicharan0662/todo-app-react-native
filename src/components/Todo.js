import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import CheckBox from "expo-checkbox";

const Todo = ({ todo, deleteTodo, invertStatus, updateTodoText }) => {

    return (
        <View style={styles.todoCont}>
            <CheckBox
                value={todo.completed}
                onValueChange={() => invertStatus(todo._id)}
                color={todo.completed ? "#4630EB" : undefined}
            />
            <Text style={styles.text}>{todo.text}</Text>
            <View style={styles.controls}>
                <TouchableOpacity style={styles.rightAlign}>
                    <Text>e</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.rightAlign} onPress={() => deleteTodo(todo._id)}>
                    <Text>d</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    todoCont: {
        paddingVertical: 9,
        paddingHorizontal: 20,
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        flexDirection: "row",
        marginTop: 10,
        position: "relative",
        borderRadius: 7,
    },
    text: {
        marginHorizontal: 9,
    },
    controls: {
        flexDirection: "row",
        alignSelf: "baseline",
        position: "absolute",
        right: 9,
        top: 9,
    },
    rightAlign: {
        marginHorizontal: 3,
    }
})

export default Todo
