import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Task Manager</Text>
                <TextInput placeholder='Going for walk!' style={styles.todoInput} />
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>Create!</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.todoContainer}>
                <View style={styles.top}>
                    <Text style={styles.title}>Your Todo's ({4})</Text>
                    <TouchableOpacity><Text style={styles.clearBtn}>clear all</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
    },
    header: {
        backgroundColor: "rgba(0, 0, 0, 0.1)",
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
    }
})

export default Home
