import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../utils/Colors';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

const MembersDetails = () => {
    const navigation = useNavigation();

    const backPressed = () => {
        navigation.goBack();
    }
    return (
        <View style={styles.container}>
            <View style={styles.appBar}>
                <View style={styles.row}>
                    <TouchableOpacity
                        style={styles.back}
                        onPress={backPressed}
                    >
                        <IonIcon name='arrow-back' size={25} color={Colors.darkSeccondary} />
                    </TouchableOpacity>
                    <View style={{ width: 20 }} />
                    <Text numberOfLines={1} style={styles.text}>Member info</Text>
                </View>

                <TouchableOpacity
                    style={styles.btn}
                // onPress={openHandler}
                >
                    <MaterialIcon name="edit" size={20} color={Colors.darkPrimary} />
                </TouchableOpacity>
            </View>
            <ScrollView
                bounces={true}
                showsVerticalScrollIndicator={false}
                style={styles.content}
            >

                <Text style={styles.text}>
                    First name: Francis
                </Text>
                <Text style={styles.text}>
                    Midle name:
                </Text>
                <Text style={styles.text}>
                    Last name: Quartey
                </Text>

            </ScrollView>
        </View>
    )
}

export default MembersDetails

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
        justifyContent: 'space-between',
        elevation: 5
    },

    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
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
    btn: {
        padding: 5,
        backgroundColor: Colors.grey,
        borderRadius: 50,
        elevation: 1
    },

    content: {
        flex: 1,
        marginTop: 1,
        paddingHorizontal: 5,
        paddingVertical: 10,
    },
})