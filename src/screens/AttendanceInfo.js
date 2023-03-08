import { Modal, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import IonIcon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import AttendeesCard from '../components/AttendeesCard';
import { Colors } from '../utils/Colors';
import { useNavigation } from '@react-navigation/native';
import NewAttendee from '../components/modals/NewAttendee';
import SingleAttendee from '../components/modals/SingleAttendee';
import { GlobalContext } from '../context/Context';
import NumberOfOthers from '../components/modals/NumberOfOthers';

const AttendaceInfo = () => {
    const [openEdit, setOpenedit] = useState(false);
    const [openOthers, setOpenOthers] = useState(false);
    const [search, setSearch] = useState("");

    const navigation = useNavigation();

    const backPressed = () => {
        navigation.goBack();
    }

    const closeEdit = () => {
        setOpenedit(false);
    }

    const openHandler = () => {
        setOpenedit(true);
    }

    const openOthersHandler = () => {
        setOpenOthers(true);
    }

    const closeOthersHandler = () => {
        setOpenOthers(false);
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

                <TouchableOpacity
                    style={styles.btn}
                    onPress={openHandler}
                >
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
                <AttendeesCard name={"Francis Quartey"} time={"7:40 PM"} />
                <AttendeesCard name={"Samuel Quartey"} time={"7:40 PM"} />
                <AttendeesCard name={"Samuel Quartey"} time={"7:40 PM"} />


            </ScrollView>
            <View style={styles.footer}>
                <View style={styles.others}>
                    <View style={styles.row}>
                        <Text style={styles.text}>
                            Others:
                        </Text>
                        <View style={{ width: 5 }} />
                        <Text style={styles.text}>
                            0
                        </Text>
                    </View>

                    <TouchableOpacity
                        style={styles.btn}
                        onPress={openOthersHandler}
                    >
                        <MaterialIcon name="edit" size={20} color={Colors.darkPrimary} />
                    </TouchableOpacity>
                </View>
                <View style={{ height: 15 }} />
                <View style={{ height: 15, borderTopWidth: 2, borderColor: Colors.grey }} />
                <View>
                    <Text style={styles.text}>Total attendance: {150}</Text>
                </View>
            </View>
            <NewAttendee open={openEdit} close={closeEdit} />
            <NumberOfOthers open={openOthers} close={closeOthersHandler} />

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
    footer: {
        marginTop: 1,

        paddingHorizontal: 10,
        paddingVertical: 15,
        backgroundColor: Colors.white,
        elevation: 10,
        zIndex: 1,
    },

    others: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // borderRadius: 10,
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
        elevation: 1
    }

})