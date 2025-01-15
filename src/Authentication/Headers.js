import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Backlogo from 'react-native-vector-icons/Ionicons'
import { useNavigation } from 'expo-router'

const Headers = () => {
     const navigation = useNavigation()
    return (
       
        <View>
            <Pressable style={styles.B}
            onPress={()=>navigation.goBack()}
            >
                <Backlogo
                    name="arrow-back"
                    size={30}
                    style={{}}
                />
            </Pressable>
            <Text style={styles.log}>Register</Text>
            <Text style={styles.In}>Entre Your Personal Information</Text>
        </View>
    )
}

export default Headers

const styles = StyleSheet.create({
    log: {
        fontSize: 25,
        fontWeight: "bold",
        marginBottom: 10,
        marginTop: 50,
        color: 'blue',
        alignItems: "center",
        marginLeft: 90,
    },
    In: {
        fontSize: 15,
        marginBottom: 25,
        marginTop: 1,
        color: 'black',
        borderBottomWidth: 2,
        padding: 30,
        paddingTop: 10,
    },
    B: {
        position: 'absolute',
        top: 40,
        left: -10,
        backgroundColor: 'white',

        width: 50,
        height: 50,



        justifyContent: 'center',
        alignItems: 'center'
    }
})