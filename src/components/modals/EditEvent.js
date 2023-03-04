import { Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '../../utils/Colors'
import IonIcon from 'react-native-vector-icons/Ionicons';
import AttendeesCard from '../AttendeesCard';

const EditEvent = ({ openEdit, closeEdit }) => {
    return (
        <Modal
            transparent={true}
            animationType='fade'
            visible={openEdit}
            onRequestClose={closeEdit}
        >
            <View style={styles.appBar}>
                <TouchableOpacity style={styles.back}
                    onPress={closeEdit}
                >
                    <IonIcon name='chevron-down' size={25} color={Colors.darkSeccondary} />
                </TouchableOpacity>
                <View style={{ width: 20 }} />
                <Text style={styles.text}>Title</Text>
            </View>
            <ScrollView
                style={styles.container}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.content}>
                    <View style={styles.header}>
                        <Text style={styles.txt}>Attendees</Text>
                    </View>
                    <View style={{ height: 5 }} />
                    <View style={styles.attendeesCard}>
                        <AttendeesCard name={"Francis Quartey"} time={"7:40 PM"} />
                        <AttendeesCard name={"Samuel Quartey"} time={"7:40 PM"} />
                        <AttendeesCard name={"Cedric Oppong"} time={"7:40 PM"} />
                    </View>
                </View>
            </ScrollView>
        </Modal>
    )
}

export default EditEvent

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: Colors.grey,
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
        flex: 1
    },

    header: {
        marginLeft: 10
    },

})