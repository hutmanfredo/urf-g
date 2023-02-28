import { Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '../../utils/Colors'
import IonIcon from 'react-native-vector-icons/Ionicons';

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
                    <Text style={styles.txt}>Attendance: {10}</Text>
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
        color: Colors.darkSeccondary,
        fontSize: 15,
        fontWeight: '700'
    },

    back: {
        paddingVertical: 5,
        borderRadius: 50,
    },

    content: {
        flex: 1
    },

})