import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '../utils/Colors'
import IonIcon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


const Branches = () => {

    const navigation = useNavigation();

    const backPressed = () => {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <View style={styles.appBar}>
                <TouchableOpacity style={styles.back}
                    onPress={backPressed}
                >
                    <IonIcon name='arrow-back' size={25} color={Colors.darkSeccondary} />
                </TouchableOpacity>
                <View style={{ width: 20 }} />
                <Text style={styles.text}>Branches</Text>
            </View>
        </View>
    )
}

export default Branches

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    appBar: {
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: Colors.white,
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 5
    },

    text: {
        color: Colors.darkSeccondary,
        fontSize: 15,
        fontWeight: '700'
    },

    back: {
        paddingVertical: 5,
        borderRadius: 50,
    },
})