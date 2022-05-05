import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native'
import React, { useState } from 'react'

const EditTodo = (props) => {
    const { todo } = props.route.params
    const { updateTodoText, navigation } = props

    const [input, setInput] = useState(todo.text)

    const submit = () => {
        if (!input) {
            Alert.alert("Please enter the todo")
            return;
        }

        updateTodoText(todo._id, input)
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <View style={styles.editCont}>
                <Text style={styles.heading}>Edit Todo</Text>
                <TextInput
                    style={styles.todoInput}
                    value={input}
                    onChangeText={text => setInput(text)}
                />
                <Button title='Save' onPress={() => submit()} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        alignItems: "center",
        paddingHorizontal: 20,
        backgroundColor: "rgba(0, 0, 0, 0.01)",
    },
    editCont: {
        padding: 20,
        backgroundColor: "#fff",
        width: "100%",
        position: "relative",
        top: "30%",
    },
    heading: {
        fontSize: 20,
        fontWeight: "bold",
    },
    todoInput: {
        borderWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.3)",
        borderRadius: 6,
        paddingHorizontal: 10,
        paddingVertical: 5,
        fontSize: 18,
        marginVertical: 8,
    }
})

export default EditTodo
