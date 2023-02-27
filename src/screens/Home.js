import { SafeAreaView, ScrollView, StyleSheet, Text, Pressable, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Colors } from '../utils/Colors';
import MIcons from 'react-native-vector-icons/MaterialIcons';
import MatcomIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import OctIcons from 'react-native-vector-icons/Octicons';
import HomeCard from '../components/HomeCard';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation();

    const navigateMembers = () => {
        navigation.navigate('Members');
    }
    const navigateDepartments = () => {
        navigation.navigate('Departments');
    }
    const navigateLeaders = () => {
        navigation.navigate('Leaders');
    }
    const navigateAttendance = () => {
        navigation.navigate('Attendance');
    }
    const navigateFinancial = () => {
        navigation.navigate('Financial');
    }
    const navigateReports = () => {
        navigation.navigate('Reports');
    }
    const navigateZonal = () => {
        navigation.navigate('Zonal');
    }
    const navigateBranches = () => {
        navigation.navigate('Branches');
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.appBar}>
                <Text style={styles.text}>Hi, Desmond!</Text>
                <TouchableOpacity style={styles.menu}>
                    <MIcons name='menu' size={25} color={Colors.darkSeccondary} />
                </TouchableOpacity>
            </View>

            <View style={styles.content}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View>

                    </View>
                    <View style={styles.wrap}>
                        <Pressable onPress={navigateMembers} style={styles.card} >
                            <View style={styles.cardInner}>
                                <MatcomIcon name='crowd' size={40} color={Colors.darkSeccondary} />
                                <View style={{ height: 5 }} />
                                <Text style={styles.text}>Membership</Text>
                            </View>
                        </Pressable>
                        <Pressable onPress={navigateDepartments} style={styles.card}>
                            <View style={styles.cardInner}>
                                <MIcons name='group-work' size={40} color={Colors.darkSeccondary} />
                                <View style={{ height: 5 }} />
                                <Text style={styles.text}>Departments</Text>
                            </View>
                        </Pressable>
                        <Pressable onPress={navigateLeaders} style={styles.card}>
                            <View style={styles.cardInner}>
                                <IonIcon name='people' size={40} color={Colors.darkSeccondary} />
                                <View style={{ height: 5 }} />
                                <Text style={styles.text}>Leaders</Text>
                            </View>
                        </Pressable>
                        <Pressable onPress={navigateFinancial} style={styles.card}>
                            <View style={styles.cardInner}>
                                <MatcomIcon name='finance' size={40} color={Colors.darkSeccondary} />
                                <View style={{ height: 5 }} />
                                <Text style={styles.text}>Financial</Text>
                            </View>
                        </Pressable>
                        <Pressable onPress={navigateAttendance} style={styles.card}>
                            <View style={styles.cardInner}>
                                <OctIcons name='number' size={40} color={Colors.darkSeccondary} />
                                <View style={{ height: 5 }} />
                                <Text style={styles.text}>Attendance</Text>
                            </View>
                        </Pressable>
                        <Pressable onPress={navigateBranches} style={styles.card}>
                            <View style={styles.cardInner}>
                                <MIcons name='groups' size={40} color={Colors.darkSeccondary} />
                                <View style={{ height: 5 }} />
                                <Text style={styles.text}>Branches</Text>
                            </View>
                        </Pressable>
                        <Pressable onPress={navigateZonal} style={styles.card}>
                            <View style={styles.cardInner}>
                                <IonIcon name='document-text' size={40} color={Colors.darkSeccondary} />
                                <View style={{ height: 5 }} />
                                <Text style={styles.text}>Zonal</Text>
                            </View>
                        </Pressable>
                        <Pressable onPress={navigateReports} style={styles.card}>
                            <View style={styles.cardInner}>
                                <IonIcon name='document-text' size={40} color={Colors.darkSeccondary} />
                                <View style={{ height: 5 }} />
                                <Text style={styles.text}>Reports</Text>
                            </View>
                        </Pressable>

                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>

    )
}

export default Home

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

    text: {
        color: Colors.darkSeccondary,
        fontSize: 15,
        fontWeight: '700'
    },
    menu: {
        // backgroundColor: Colors.darkSeccondary,
        padding: 5,
        borderRadius: 50
    },

    content: {
        flex: 1,
        marginTop: 1,
        // justifyContent: 'center'
    },

    wrap: {
        flex: 1,
        // backgroundColor: 'red',
        // alignItems: 'center',
        // justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

    card: {
        width: '50%',
        height: 180,
        padding: 10,
    },

    cardInner: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3,
        backgroundColor: Colors.white,
        borderRadius: 8
    }
})