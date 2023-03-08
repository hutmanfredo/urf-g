import { Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../utils/Colors'
import IonIcon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native';
import MembersCard from '../components/MembersCard';


const Members = () => {
    const [search, setSearch] = useState("");

    const navigation = useNavigation();

    const backPressed = () => {
        navigation.goBack();
    }

    const MemberDetails = () => {
        navigation.navigate("MemberDetails");
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
                <Text style={styles.text}>Members</Text>
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
                <MembersCard name={"Francis Quartey"} status={"Active"} onPress={MemberDetails} />
                <MembersCard name={"Francis Quartey"} status={"Active"} onPress={MemberDetails} />
                <MembersCard name={"Francis Quartey"} status={"Active"} onPress={MemberDetails} />
                <MembersCard name={"Francis Quartey"} status={"Active"} onPress={MemberDetails} />
                <MembersCard name={"Francis Quartey"} status={"Active"} onPress={MemberDetails} />
                <MembersCard name={"Francis Quartey"} status={"Active"} onPress={MemberDetails} />
                <MembersCard name={"Francis Quartey"} status={"Active"} onPress={MemberDetails} />
                <MembersCard name={"Francis Quartey"} status={"Active"} onPress={MemberDetails} />
            </ScrollView>
            <Pressable
                style={styles.floatingBtn}
            // onPress={openNewHandler}
            >
                <MaterialIcon name="add" size={30} color={Colors.darkPrimary} />
            </Pressable>

        </View>
    )
}

export default Members

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

    content: {
        flex: 1,
        marginTop: 1,
        marginBottom: 1,
        paddingHorizontal: 5,
        paddingVertical: 10,
    },

    floatingBtn: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        elevation: 5,
        bottom: 20,
        right: 20,
        backgroundColor: Colors.white,
        borderRadius: 50,
        zIndex: 1
    },
})