import { Modal, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import IonIcon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import AttendeesCard from '../components/AttendeesCard';
import { Colors } from '../utils/Colors';
import { useNavigation } from '@react-navigation/native';

const AttendaceInfo = () => {

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
                    <Text numberOfLines={1} style={styles.text}>Title</Text>
                </View>

                <TouchableOpacity style={styles.btn}>
                    <MaterialIcon name="add" size={25} color={Colors.darkPrimary} />
                </TouchableOpacity>
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.content}
            >
                <View style={styles.header}>
                    <Text style={styles.txt}>Attendees</Text>
                </View>
                <View style={{ height: 5 }} />
                <AttendeesCard name={"Francis Quartey"} time={"7:40 PM"} />
                <AttendeesCard name={"Samuel Quartey"} time={"7:40 PM"} />
                <AttendeesCard name={"Cedric Oppong"} time={"7:40 PM"} />
                <View style={styles.others}>
                    <View>
                        <Text style={styles.text}>
                            Other
                        </Text>
                        <View style={{ height: 6 }} />

                        <Text style={styles.othersTxt}>
                            100
                        </Text>
                    </View>

                    <TouchableOpacity style={styles.btn}>
                        <MaterialIcon name="edit" size={20} color={Colors.darkPrimary} />
                    </TouchableOpacity>
                </View>
            </ScrollView>

        </View>
    )
}

export default AttendaceInfo

const styles = StyleSheet.create({
    container: {
        flex: 1,
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

    txt: {
        color: Colors.lightDark,
        fontSize: 16,
        fontWeight: '700'
    },

    back: {
        paddingVertical: 5,
        borderRadius: 50,
    },

    content: {
        flex: 1,
        marginTop: 1,
        paddingHorizontal: 5,
        paddingVertical: 10,
    },

    header: {
        marginLeft: 10
    },
    others: {
        width: '100%',
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.white,
        borderRadius: 10,
    },

    othersTxt: {
        color: Colors.lightDark,
        fontSize: 15,
        fontWeight: '600'
    },
    btn: {
        padding: 5,
        backgroundColor: Colors.grey,
        borderRadius: 50,
    }

})