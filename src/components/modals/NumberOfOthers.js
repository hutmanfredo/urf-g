import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../utils/Colors';

const NumberOfOthers = ({ open, close }) => {
    const [others, setOthers] = useState("");
    
    return (
        <Modal
            transparent={true}
            animationType='fade'
            visible={open}
            onRequestClose={close}
        >
            <View style={styles.container}>
                <View
                    style={styles.content}
                >
                    <Text style={styles.text}>Edit others</Text>
                    <View style={{ height: 20 }} />

                    <View style={styles.inputContainer}>
                        <TextInput
                            onChangeText={(e) => setOthers(e)}
                            value={others}
                            style={styles.inputStyle}
                            placeholder="Enter number"
                            placeholderTextColor={Colors.lightDark}
                            cursorColor={Colors.lightDark}
                            returnKeyType='done'
                        />
                    </View>

                    <View style={{ height: 20 }} />
                    <View style={styles.footer}>
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={close}
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

export default NumberOfOthers

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.darkTransparent
    },
    content: {
        // flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
        paddingHorizontal: 10,
        backgroundColor: Colors.white,
        borderRadius: 10
    },
    text: {
        color: Colors.darkSeccondary,
        fontSize: 15,
        fontWeight: '700'
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
        borderWidth: 1,
        borderColor: Colors.lightDark,
        borderRadius: 10,

    },
})