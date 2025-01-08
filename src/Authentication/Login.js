import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const Login = () => {
    return (
    <View style={styles.container}>
    <View style={styles.textContainer}>
      <Text style={styles.textDesign}>User Login</Text>
      </View>
      <TextInput
      style={styles.textInputStyle}
      placeholder='Enter name'
      />
      <TextInput
      style={styles.emelInputStyle}
      placeholder='Enter email'
      />
      <TextInput
      style={styles.passwordInputStyle}
      placeholder='Enter password'
      />
      <TextInput
      style={styles.confirmPasswordInputStyle}
      placeholder='Confirm password'
      />
      <TouchableOpacity style={styles.loginBTn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        padding:20,
        alignContent:'center',
        
    },
    textDesign:{
        fontSize:20,
        fontWeight:'bold'
    },
    
    
    textContainer:{
        alignItems:'center',
        marginBottom:10,
        marginTop:20,
        
    },
    loginBTn:{
        
        marginRight:20,
        marginLeft:20,
        marginTop:30,
        justifyContent:'center',
        alignItems:'center',
        padding:20,
        borderRadius:30,
        backgroundColor:'green'
    },
    loginText:{
        fontSize:20,
        color:'white',
        fontWeight:'bold'
        
    },

    textInputStyle:{
        borderWidth:1,
        marginRight:20,
        marginLeft:20,
        paddingLeft:10,
        paddingRight:10,
        marginBottom:2,
        marginTop:20
    },
    emelInputStyle:{
        borderWidth:1,
        marginTop:10,
        marginBottom:10,
        marginRight:20,
        marginLeft:20,
        paddingLeft:10,
        paddingRight:10,
        marginBottom:20,
        marginTop:20
    },
    passwordInputStyle:{
        borderWidth:1,
        marginTop:10,
        marginBottom:10,
        marginRight:20,
        marginLeft:20,
        paddingLeft:10,
        paddingRight:10,
        marginBottom:20,
        marginTop:2
    },
    confirmPasswordInputStyle:{
        borderWidth:1,
        marginTop:10,
        marginBottom:10,
        marginRight:20,
        marginLeft:20,
        paddingLeft:10,
        paddingRight:10,
        marginBottom:20,
        marginTop:2,
    }

})

