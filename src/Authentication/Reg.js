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
  import Backlogo from 'react-native-vector-icons/EvilIcons'
  import { sortRoutes } from "expo-router/build/sortRoutes";

  const Reg = () => {
    return (
      <View style={styles.container}>
 <View style={styles.majorView}>
 
        <Text 
        style={styles.signup}>Sign up</Text>
        <View style={styles.Backlogo}> 
                <Backlogo
                name="arrow-left"
                size={40}
                style={{marginLeft:30, marginBottom:15, marginTop:-45,}}/>
                
                <Text style={styles.textHold}>
                <TextInput
            style={styles.userInput}
            placeholder="Username"
            />
            <TextInput
            style={styles.firstInput}
            placeholder="First Name"
            />
            <TextInput
            style={styles.lastInput}
            placeholder="Last name"
            />
            <TextInput
            style={styles.emailInput}
            placeholder="Email"
            />
            <TextInput
            style={styles.passwordInput}
            placeholder="Password"
            secureTextEntry={true}
            />
            <TextInput
            style={styles.confirmPasswordInput}
            placeholder="ConfirmPassword"
            secureTextEntry
            />
           
              <Image
             source={require("../../assets/images/ico.png")}
             style={{m:20,}}
            
             />
             
        </Text>
       
        </View>
      </View>
      </View>
    )
  }

  export default Reg;

  const styles = StyleSheet.create({

    container:{
      flex: 1,
      backgroundColor: "#babbd3",
      paddingRight: 50,
      alignContent: "center",
      marginLeft: 30,
      borderRadius:10,
      elevation:6,
      
      height:'95%',
    },

    signup: {
      fontSize: 30,
      fontWeight: "bold",
      marginBottom: 5,
      marginLeft: 89,
      paddingRight: 10,
      marginTop: 77,
     
    },
     textHold:{
      
        borderRadius:1,
        elevation:1,
        backgroundColor:'#ecf2ef',
        height:'95%',
        marginBottom:200,
        marginTop:90,
        paddingTop:30,
        borderEndWidth:60,
        borderColor:'white',
        
        
     },


     majorView:{
      borderRadius:2,
      elevation:10,
      backgroundColor:'white',
      height:'60%',
      marginTop:70,
      marginBottom:50,
     
      
    },


    userInput:{
      borderRadius:10,
      //elevation:1,
      backgroundColor:'white',
      height:50,
      borderWidth:1,
      paddingLeft:30,
      
      paddingRight:100,
      borderColor:'#E8E8E8',
      
      
    },

    firstInput:{
      borderRadius:10,
      //elevation:1,
      //backgroundColor:'white',
      height:50,
      
      paddingLeft:30,
      paddingRight:100,
      
      //borderColor:'#E8E8E8',
      
    },

    lastInput:{
      borderRadius:10,
      //elevation:6,
      //backgroundColor:'white',
      height:50,
      
      paddingLeft:30,
      paddingRight:100,
      
      borderColor:'#E8E8E8',
      
    },
      
    emailInput:{
      borderRadius:10,
      //elevation:6,
      //backgroundColor:'white',
      height:50,
      
      paddingLeft:30,
      paddingRight:100,
      
      borderColor:'#E8E8E8',
      
    },

    passwordInput:{
      borderRadius:10,
      //:6,
      //backgroundColor:'white',
      height:50,
      
      paddingLeft:30,
      paddingRight:100,
      
      borderColor:'#E8E8E8',
      
    },
    confirmPasswordInput:{
      borderRadius:10,
      //elevation:6,
      //backgroundColor:'white',
      height:50,
      
      paddingLeft:30,
      paddingRight:10,
      
      borderColor:'#E8E8E8',
      
    }

  }
  )