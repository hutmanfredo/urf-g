import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../utils/Colors'

const AttendeesCard = ({ name, time }) => {
    return (
        <View style={styles.container}>
            <Text numberOfLines={1} style={styles.text}>{name}</Text>
            <View style={{ height: 6 }} />
            <Text style={styles.txt}>{time}</Text>
        </View>
    )
}

export default AttendeesCard

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 10,
        marginBottom: 8,
        backgroundColor: Colors.white,
        borderRadius: 10,
        elevation: 0.5
    },

    text: {
        color: Colors.darkSeccondary,
        fontSize: 16,
        fontWeight: '600'
    },

    txt: {
        color: Colors.lightDark,
        fontSize: 15,
        fontWeight: '600'
    },
})