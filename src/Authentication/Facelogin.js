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
  import Facebooklogo from 'react-native-vector-icons/EvilIcons'
  import Googlelogo from 'react-native-vector-icons/AntDesign'
  import Emaillogo from 'react-native-vector-icons/Entypo'
  import Passlogo from 'react-native-vector-icons/MaterialIcons'
  import { sortRoutes } from "expo-router/build/sortRoutes";
  
  const Facelogin = () => {
    return (
      <View style={styles.container}>
          {/* <View style={styles.textContainer}> */}
            <Text style={styles.textDesign}></Text>
           
             <View style={styles.fbView}>
                 <Image
                    source={require("../../assets/images/fb.png")}
                    style={styles.fbImageStyle}
                    />
                    <TouchableOpacity style={styles.SignF}>
                    <Text style={styles.SignFText}>LOG IN WITH FACEBOOK</Text>
                  </TouchableOpacity>
              </View>
              <View style={styles.goView}>
                  <Image
                  source={require("../../assets/images/go.png")}
                  style={styles.goImageStyle}
                  />
                  <TouchableOpacity style={styles.SignG}>
                 
                    <Text style={styles.SignGText}>LOG IN WITH GOOGLE</Text>
                    
                  </TouchableOpacity>
                  </View>
                  

                  <Text style={styles.orInput}>or</Text>

                  <TextInput
                
               
                          
                  style={styles.emailInput}
                  
                    placeholder='yours@example.come'
                    keyboardType='email-address'/>
                    <View style={styles.Elogo}> 
                          <Emaillogo
                          name="email"
                          size={15}
                          style={{marginLeft:40, marginBottom:1, marginTop:-42, borderRadius:2, borderColor:'white',}}
                          />
                          </View>

                    <TextInput
                    
                  style={styles.passInput}
                    placeholder='your password'
                    secureTextEntry
                    />
                    <View style={styles.Pass}> 
                     <Passlogo
                          name="password"
                          size={15}
                          style={{marginLeft:40, marginBottom:1, marginTop:-37, borderRadius:2,}}
                          />
                          </View>

                    <Pressable>
                            <Text style={styles.joinText}>Don't remember your password?</Text>
                          </Pressable>
                          
                           
                                <TouchableOpacity style={styles.loginBTn}>
                                  <Text style={styles.loginText}>LOG IN</Text>
                                </TouchableOpacity>

            </View>
          
            
    )
}

export default Facelogin;

const styles = StyleSheet.create({
  container:{
  flex:1,
  backgroundColor:'',
  padding:20,
  justifyContent: 'center',

 
  },
  

    SignF:{
      justifyContent:'center',
      borderRadius:2,   
      borderWidth:1,
      width:"85%",
      height:46,
      marginTop:7,
      marginLeft:-7,
      alignItems:'center',
      backgroundColor:'#0509bb'
    },
    SignFText:{
      color:'white',
      fontSize:14,
      fontWeight:'bold',  
      marginLeft:-75  
    },
    fbImageStyle:{
      width:60,
       height:60
    },
    SignG:{
      justifyContent:'center',
      marginLeft:1, 
      borderRadius: 2,
      marginLeft:-5,
      width:'89%',
      backgroundColor:'#4e6de1',
    },
    fbView:{
      flexDirection:'row',
      marginBottom:10
    },

    goView:{
      flexDirection:'row',
      marginBottom:10,
      paddingLeft:10,

    },

    goImageStyle:{
      width:60,
      height:45,
      borderRadius: 4,
      borderColor:'#4e6de1',
      backgroundColor:'black',
      width:'13%',
      

    },
       

    SignGText:{
      color:'white',
      fontSize:14,
      marginLeft:35,
      fontWeight:'bold',
    },

    orInput: {
      marginTop: 9,
      justifyContent: "center",
      alignSelf:'center',
      marginBottom: 10,
      fontSize: 11,
    },
    emailInput: {
      borderWidth: 1,
      borderColor: "gray",
      borderRadius: 5,
      paddingHorizontal: 10,
      paddingVertical: 10,
      paddingLeft:40,
      marginLeft: 30,
      marginRight:30,
      marginBottom: 15,
    },

    passInput: {
      borderWidth: 1,
      borderColor: "gray",
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 10,
      paddingVertical: 10,
      paddingLeft:40,
      marginLeft: 30,
      marginRight:30,
    },

    joinText: {
      color: "black",
      fontSize: 15,
      marginLeft: 50,
      marginBottom: 10,
      fontWeight:'bold',
    },

    loginBTn:{
        
      marginRight:20,
      marginLeft:20,
      marginTop:7,
      justifyContent:'center',
      alignItems:'center',
      padding:20,
      borderRadius:3,
      backgroundColor:'#f5790c'
  },
  loginText:{
      fontSize:20,
      color:'white',
      fontWeight:''
  },
}
)