import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'


const Xlogin  = () => {
    return (
        <View style={styles.container}>
        <View style={styles.textContainer}>
        <Text style={styles.textTitle}>X</Text>
        <Text style={styles.textDesign}>Sign in to X</Text>
        </View>
        <TouchableOpacity style={styles.google}>
            <Text style={styles.googleText}>Sign in with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.apple}>
            <Text style={styles.appleText}>Sign in with Apple</Text>
        </TouchableOpacity>
        <Text style={styles.orInputStyle}>or</Text>
        <TextInput
        style={styles.phoneInputStyle}
        placeholder='Phone, email, or username'
        />
        <TouchableOpacity style={styles.loginBTn}>
                <Text style={styles.loginText}>NEXT</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.forgotPass}>
            <Text style={styles.pass}>forgot password</Text>
        </TouchableOpacity>
        <TextInput
        style={styles.dontInputStyle}
        placeholder='Dont have an account?'
        />
        <TouchableOpacity style={styles.dont}>gr</TouchableOpacity>
        
        </View>
    )
}

export default Xlogin

    const styles = StyleSheet.create({
        container:{
            flex:1,
            backgroundColor:'black',
            padding:20,
            alignContent:'center',
            justifyContent:'center',
            
        },
        textContainer:{
            marginBottom:30

        },

        textTitle: {
            fontSize:24,
            fontWeight:'bold',
            marginBottom:10,
            paddingLeft:165,
            marginTop:3,
            color:'white'
            
        },
        
        textDesign: {
            fontSize:18,
            color:'white',
            paddingLeft:30,
            fontWeight:'bold',
            
        },

        google:{
            backgroundColor:'white',
            padding:5,
            borderRadius:60,
            marginBottom:20,
            marginLeft:25,
            width:300,
            justifyContent:'center',
            alignItems:'center'
        },
        
        apple:{
            backgroundColor:'white',
            padding:5,
            borderRadius:60,
            marginBottom:10,
            marginLeft:25,
            width:300,
            justifyContent:'center',
            alignItems:'center'
            
        },

        orInputStyle:{
            color: 'white',
            justifyContent: 'center',
            alignItems:'center',
            paddingLeft: '160',
            marginBottom:10,
            fontSize:11,
            color:'white'
        },

        phoneInputStyle:{
            borderWidth:1,
            borderColor:'transparent',
            backgroundColor:'#212629',
            padding:10,

            
            marginBottom:20,
            borderRadius:10,
            marginLeft:30,
            width:300,
            borderRadius:50,
            fontStyle:'italic',
            
            
        },

        loginBTn:{
            marginRight:20,
            marginLeft:20,
            marginTop:0,
            marginBottom:20,
            borderRadius:60,
            backgroundColor:'black',
            justifyContent:'center',
            alignItems:'center',
            padding:5,
            borderRadius:60,
            backgroundColor:'white',
            fontSize:0,
        },

        loginText:{
            color:'black',
            fontSize:10,
            fontWeight:'bold',
        },
        forgotPass:{
            color:'white',
            
            marginRight:20,
            marginLeft:20,
            marginBottom:10,
            justifyContent:'center',
            alignItems:'center',
            padding:2,
            borderRadius:60,
            borderColor:'white',
            backgroundColor:'#23282b',
          },

          pass:{
            color:'white',
            fontSize:16,
            
            fontWeight:'bold',
        },

        
    
    }
)
            