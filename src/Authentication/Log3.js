import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Pressable,
    Image,
  } from "react-native";
  import React from "react";
  import Backlogo from 'react-native-vector-icons/Ionicons'
  import { sortRoutes } from "expo-router/build/sortRoutes";
  import Headers from '../Authentication/Headers'
  
  const Log3 = () => {
    return (
       
      <View style ={styles.container}>
         {/* <View style={styles.B}> 
        <Backlogo
        name="arrow-back"
        size={1}
        style={{}}
        />
        </View>
   <Text style={styles.log}>Register</Text>
   <Text style={styles.In}>Entre Your Personal Information</Text> */}
      <Headers/>
        
<View style={styles.Log}>
<Text style={styles.N}>Username</Text>
<TextInput style={styles.name} placeholder="Enter your name" />
        <Text style={styles.E}>Email</Text>
        <TextInput style={styles.email} placeholder="Enter your email" />
        <Text style={styles.P}>password</Text>
        <TextInput
          style={styles.password}
          placeholder="Enter Password"
          secureTextEntry={true}
        />
        <Text style={styles.Pc}>Confirm password</Text>
        <TextInput
          style={styles.confirmpassword}
          placeholder="Enter Confirm Password"
          secureTextEntry={true}
        />
        
        
      </View>
      <View style={styles.Login}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.press}>Register</Text>
        </TouchableOpacity>
 </View>
      </View>
    )
};

export default Log3;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        
      },
      log:{
        fontSize: 25,
        fontWeight: "bold",
        marginBottom: 10,
        marginTop: 50,
        color: 'blue',
      },
      In:{
        fontSize: 15,
        marginBottom: 25,
        marginTop: 1,
        color: 'black',
        borderBottomWidth:2,
        padding:30,
        paddingTop: 10,
      },
      N: {
        fontSize: 18,
        marginBottom: 10,
        fontWeight: "bold",
        marginRight: 5,
        marginLeft: 40,
      },
      name: {
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 7,
        paddingHorizontal: 20,
    
        paddingRight: 130,
        paddingLeft: 9,
    
        marginLeft: 40,
        marginRight: 40,
        marginBottom: 15,
      },
      E: {
        fontSize: 18,
        marginBottom: 10,
        fontWeight: "bold",
        marginRight: 195,
        marginLeft: 40,
      },
      email: {
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 7,
        paddingHorizontal: 20,
    
        paddingRight: 130,
        paddingLeft: 9,
    
        marginLeft: 40,
        marginRight: 40,
        marginBottom: 15,
      },
      P: {
        fontSize: 18,
        marginBottom: 10,
        fontWeight: "bold",
        marginRight: 165,
        marginLeft: 40,
      },
      password: {
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 7,
        paddingHorizontal: 20,
    
        paddingRight: 130,
        paddingLeft: 9,
    
        marginLeft: 40,
        marginRight: 40,
        marginBottom: 15,
      },
      Pc: {
        fontSize: 18,
        marginBottom: 10,
        fontWeight: "bold",
        marginRight: 50,
        marginLeft: 35,
      },
      confirmpassword: {
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 7,
        paddingHorizontal: 10,
    
        paddingRight: 10,
        paddingLeft: 10,
    
        marginLeft: 35,
        marginRight: 0,
        marginBottom: 15,
      },
      button: {
        marginRight: 30,
        marginLeft: 30,
        
        marginTop: 15,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        borderRadius: 10,
        paddingRight: 100,
        paddingLeft: 100,
        
        backgroundColor: "#2f5bd9",
    
    },
    press: {
        color: 'white',
        fontWeight: 'bold',
        marginLeft:0,
        fontSize:20,
    },
    text: {
        marginTop: 9,
        justifyContent: "center",
        alignSelf:'center',
        marginBottom: 10,
        fontSize: 15,
        
        fontWeight: 'bold',
    
    },
    
    })  