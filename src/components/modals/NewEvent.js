import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View, Pressable } from 'react-native'
import React, { useState } from 'react'
import IonIcon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../utils/Colors';
import { ScrollView } from 'react-native-gesture-handler';

const NewEvent = ({ openNew, closeNew }) => {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    return (
        <Modal
            transparent={true}
            animationType='fade'
            visible={openNew}
            onRequestClose={closeNew}
        >
            <View style={styles.container}>
                <View
                    style={styles.content}
                >
                    <View>
                        <Text>New event</Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            onChangeText={(e) => setTitle(e)}
                            value={title}
                            style={styles.inputStyle}
                            placeholder="Title"
                            placeholderTextColor={Colors.lightDark}
                            cursorColor={Colors.lightDark}
                            returnKeyType='next'
                        />
                    </View>
                    <View style={{ height: 20 }} />
                    <View style={styles.inputContainer}>
                        <TextInput
                            onChangeText={(e) => setDate(e)}
                            value={date}
                            style={styles.inputStyle}
                            placeholder="Date"
                            placeholderTextColor={Colors.lightDark}
                            cursorColor={Colors.lightDark}
                            returnKeyType='default'
                        />
                    </View>
                    <View style={{ height: 20 }} />
                    <View style={styles.footer}>
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={closeNew}
                        >
                            <Text style={styles.text}>Cancel</Text>
                        </TouchableOpacity>
                        <View style={{ width: 10 }} />
                        <TouchableOpacity
                            style={styles.btn}
                        // onPress={}
                        >
                            <Text style={styles.text}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </Modal>
    )
}

export default NewEvent

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.darkTransparent
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
    content: {
        // flex: 1,
        width: '100%',
        paddingVertical: 20,
        paddingHorizontal: 10,
        backgroundColor: Colors.white,
        borderRadius: 10
    },
    inputContainer: {
        width: '100%',
        height: 45,
        paddingHorizontal: 15,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: Colors.lightDark,
    },
    inputStyle: {
        flex: 1,
        fontSize: 14,
        fontWeight: '600',
        color: Colors.darkPrimary,
    },
    footer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    btn: {
        flex: 1,
        padding: 12,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'red',
        borderWidth: 1,
        borderColor: Colors.lightDark,
        borderRadius: 10,

    },
})