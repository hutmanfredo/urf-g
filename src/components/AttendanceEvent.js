import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '../utils/Colors'

const AttendanceEvent = ({ eventTitle, attendance, date, press }) => {
    return (
        <TouchableOpacity
            style={styles.containter}
            onPress={press}
        >
            <Text style={styles.title} numberOfLines={1}>{eventTitle}</Text>
            <View style={{ height: 10 }} />
            <View style={styles.footer}>
                <Text style={styles.footerTxt}>Attendance: {attendance}</Text>
                <Text style={styles.footerTxt}>{date}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default AttendanceEvent

const styles = StyleSheet.create({
    containter: {
        width: '100%',
        marginBottom: 6,
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 10,
        backgroundColor: Colors.white,
        elevation: 1,

    },
    title: {
        fontSize: 15,
        fontWeight: '600',
        color: Colors.darkPrimary
    },
    footer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    footerTxt: {
        fontSize: 14,
        fontWeight: '600',
        color: Colors.darkSeccondary
    }
})