import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const Register = () => {
  return (
     <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.textDesign}>Register</Text>
          </View>
          <TextInput
          style={styles.firstInputStyle}
          placeholder="First Name"
          />
          <TextInput
          style={styles.secondInputStyle}
          placeholder='Last Name'
          />
          <TextInput
          style={styles.emailInputStyle}
          placeholder='Email'
          />
          <TextInput
          style={styles.phoneInputStyle}
          placeholder='Phone Number'
          />
          <TextInput
          style={styles.passInputStyle}
          placeholder='Password'
          />
          <TextInput
          style={styles.confirmInputStyle}
          placeholder='Confirm Password'
          />
          <TouchableOpacity style={styles.RegisterBTn}>
                  <Text style={styles.RegisterText}>REGISTER</Text>
                </TouchableOpacity>
          </View>
  )
}

export default Register

const styles = StyleSheet.create({
  container:{
  flex:1,
  backgroundColor:'white',
  padding:20,
  alignContent:'center',
  justifyContent:'center',
  },

    

 textDesign:{
    fontSize:20,
    fontWeight:'bold'
  },

secondInputStyle:{
  borderWidth:1,
  marginTop:1,
  marginBottom:10,
  marginRight:20,
  marginLeft:20,
  paddingLeft:10,
  paddingRight:100,
  marginBottom:1
},

textContainer:{
  alignItems:'center',
  marginBottom:10,
  marginTop:20,
  justifyContent: 'center',
  
},
  RegisterBTn:{
  marginRight:20,
  marginLeft:20,
  marginTop:0,
  justifyContent:'center',
  alignItems:'center',
  padding:20,
  borderRadius:30,
  backgroundColor:'orange'
},
RegisterText:{
  fontSize:20,
  color:'white',
  fontWeight:'bold'
  
},
emailInputStyle:{
  borderWidth:1,
  marginTop:1,
  marginBottom:10,
  marginRight:20,
  marginLeft:20,
  paddingLeft:10,
  paddingRight:132,
  marginBottom:20,
  
},

phoneInputStyle:{
  borderWidth:1,
  marginBottom:10,
  marginRight:20,
  marginLeft:20,
  paddingLeft:10,
  paddingRight:75,
  marginBottom:2,
  marginTop:-18,
},

passInputStyle:{
  borderWidth:1,
  marginTop:10,
  marginBottom:10,
  marginRight:20,
  marginLeft:20,
  paddingLeft:10,
  paddingRight:107,
  marginBottom:20,
  marginTop:1
},
confirmInputStyle:{
  borderWidth:1,
  marginTop:10,
  marginBottom:10,
  marginRight:20,
  marginLeft:20,
  paddingLeft:10,
  paddingRight:55,
  marginBottom:20,
  marginTop:-18,
}

})