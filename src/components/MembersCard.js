import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '../utils/Colors'

const MembersCard = ({ name, status, onPress }) => {
    return (
        <Pressable
            style={styles.container}
            onPress={onPress}
        >
            <Text
                style={styles.text}
                numberOfLines={1}
            >{name}</Text>
            <View style={{ height: 6 }} />
            <Text style={styles.txt}>{status}</Text>
        </Pressable>
    )
}

export default MembersCard

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 6,
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 10,
        backgroundColor: Colors.white,
        elevation: 1,

    },

    text: {
        color: Colors.darkSeccondary,
        fontSize: 16,
        fontWeight: '600'
    },

    txt: {
        color: Colors.green,
        fontSize: 15,
        fontWeight: '600'
    },
})