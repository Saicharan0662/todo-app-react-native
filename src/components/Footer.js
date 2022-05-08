import { StyleSheet, Text, View, Linking } from 'react-native'
import React from 'react'

const Footer = () => {
    return (
        <View style={styles.footer}>
            <Text style={styles.infoText} onPress={() => Linking.openURL('https://www.linkedin.com/in/saicharan0662/')}>Made with 💖 by Sai Charan</Text>
            <Text style={styles.infoText2} onPress={() => Linking.openURL('https://github.com/')}>Source code here</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: "#fff",
        position: "absolute",
        bottom: 0,
        width: "100%",
        alignItems: "center",
    },
    infoText: {
        fontSize: 18,
        fontWeight: "bold",
        letterSpacing: 3,
        lineHeight: 30,
    },
    infoText2: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#008080",
    }
})

export default Footer
