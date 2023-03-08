import { Modal, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../utils/Colors'
import IonIcon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import AttendeeName from '../AttendeeName';
import SingleAttendee from './SingleAttendee';
// import SingleAttendeeTime from './SingleAttendeetime';

const NewAttendee = ({ open, close }) => {
    const [search, setSearch] = useState("");
    const [openAttendeeTime, setOpenAttendeeTime] = useState(false);

    const openSingleAttendee = () => {
        setOpenAttendeeTime(true);
    }
    const closeSingleAttendee = () => {
        setOpenAttendeeTime(false);
    }

    return (
        <Modal
            transparent={true}
            animationType='fade'
            visible={open}
            onRequestClose={close}
        >
            <View style={styles.appBar}>
                <TouchableOpacity style={styles.back}
                    onPress={close}
                >
                    <IonIcon name='chevron-down' size={25} color={Colors.darkSeccondary} />
                </TouchableOpacity>
                <View style={{ width: 20 }} />
                <Text style={styles.text}>New attendee</Text>
            </View>
            <View style={styles.searchContainer}>
                <View style={styles.searchBox}>
                    <TextInput
                        onChangeText={(e) => setSearch(e)}
                        value={search}
                        style={styles.inputStyle}
                        placeholder="Search by name"
                        placeholderTextColor={Colors.lightDark}
                        cursorColor={Colors.lightDark}
                        returnKeyType='search'
                    />
                    {
                        search !== "" ? (
                            <TouchableOpacity
                                style={styles.cancelIcon}
                                onPress={() => setSearch("")}
                            >
                                <MaterialIcon name="clear" size={15} color="#fff" />
                            </TouchableOpacity>
                        ) : (
                            null
                        )
                    }
                </View>
            </View>
            <ScrollView
                bounces={true}
                showsVerticalScrollIndicator={false}
                style={styles.content}
            >
                <AttendeeName name={"Francis Quartey"} press={openSingleAttendee} />
                <AttendeeName name={"Francis Quartey"} press={openSingleAttendee} />
                <AttendeeName name={"Francis Quartey"} press={openSingleAttendee} />
                <AttendeeName name={"Francis Quartey"} press={openSingleAttendee} />
            </ScrollView>
            <SingleAttendee open={openAttendeeTime} close={closeSingleAttendee} />
        </Modal>
    )
}

export default NewAttendee

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
        // marginTop: 1,
        paddingHorizontal: 5,
        paddingVertical: 10,
        backgroundColor: Colors.grey
    },

    header: {
        marginLeft: 10
    },

    searchContainer: {
        width: '100%',
        // marginBottom: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: Colors.white,
        elevation: 0

    },
    searchBox: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.grey,
        paddingHorizontal: 15,
        borderRadius: 30,
    },

    inputStyle: {
        flex: 1,
        fontSize: 13,
        color: Colors.darkPrimary,

    },
    cancelIcon: {
        padding: 5,
        backgroundColor: '#AAAAAA',
        borderRadius: 50
    },

})