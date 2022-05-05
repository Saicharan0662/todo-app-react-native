import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import CheckBox from "expo-checkbox";
import { useNavigation } from '@react-navigation/native';

const Todo = ({ todo, deleteTodo, invertStatus }) => {

    const navigation = useNavigation()

    return (
        <View style={styles.todoCont}>
            <CheckBox
                value={todo.completed}
                onValueChange={() => invertStatus(todo._id)}
                color={todo.completed ? "#4630EB" : undefined}
                style={styles.checkbox}
            />
            <Text style={[styles.text, {
                textDecorationLine: todo.completed ? "line-through" : "none",
                color: todo.completed ? "grey" : "black"
            }]}>{todo.text}</Text>
            <View style={styles.controls}>
                <TouchableOpacity style={styles.icons}
                    onPress={() => navigation.navigate("Edit Todo", { todo: todo })}>
                    <Image source={require('../../assets/icons/edit.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.icons} onPress={() => deleteTodo(todo._id)}>
                    <Image source={require('../../assets/icons/delete.png')} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    todoCont: {
        paddingVertical: 9,
        paddingHorizontal: 10,
        backgroundColor: "#fff",
        flexDirection: "row",
        marginTop: 10,
        position: "relative",
        borderRadius: 7,
    },
    text: {
        marginHorizontal: 9,
        fontSize: 16,
        fontWeight: "600",
    },
    controls: {
        flexDirection: "row",
        alignSelf: "baseline",
        position: "absolute",
        right: 9,
        top: 9,
    },
    icons: {
        marginHorizontal: 4,
    },
    checkbox: {
        borderRadius: 100,
    }
})

export default Todo
