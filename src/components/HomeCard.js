import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../utils/Colors'

const HomeCard = () => {
    return (
        <View style={styles.container}>
            <View style={styles.cardInner}>
                
            </View>
        </View>
    )
}

export default HomeCard

const styles = StyleSheet.create({
    container: {
        width: '50%',
        height: 200,
        padding: 10,
    },
    cardInner: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
        elevation: 3,
        backgroundColor: Colors.white,
    }
})