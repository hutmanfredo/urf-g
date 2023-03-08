import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Colors } from '../utils/Colors';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

const AttendeeName = ({ name,press }) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={press}
        >
            <Text style={styles.text}>{name}</Text>
            <MaterialIcon name="add" size={25} color={Colors.darkPrimary} />
        </TouchableOpacity>
    )
}

export default AttendeeName

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
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