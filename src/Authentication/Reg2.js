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

import { sortRoutes } from "expo-router/build/sortRoutes";
import { useNavigation } from "expo-router";

const Reg2 = () => {

  const navigation = useNavigation()
  return (
         <View style={styles.container}>
              <View style={styles.secondContainer}>
                <Image
                source={require('../../assets/images/Reg1.png')}
                style={{width:200, height:200, alignSelf:'center', marginTop:10}}
                />
                <View style={styles.thirdContainer}>
                    <Text style={styles.newAccountText}>Login to your Account</Text>
                    <View style={styles.lastContainer}>
                    <View style={styles.ImageView}>
                            <Pressable>
                        <Image
                        source={require("../../assets/images/go3.png")}
                        style={{ marginLeft: 10, marginTop: 25, borderRadius:10, backgroundColor:'white',  }}/>
                        </Pressable>
                        <Pressable>
                          <Image
                        source={require("../../assets/images/fb2.png")}
                        style={{ marginLeft: 10, marginTop: 25,borderRadius:10, backgroundColor:'white',}}/>
                        </Pressable>
                        <Pressable>
                          <Image
                        source={require("../../assets/images/tw2.png")}
                        style={{ marginLeft: 10, marginTop: 25,borderRadius:10, backgroundColor:'white',}}/>
                        </Pressable>
                    </View>
        
                        <View style={styles.registerContainer}>
                          <TextInput 
                            placeholder="Username"/>
                          </View>
                          
                          
                          <View style={styles.registerContainer}>
                          <TextInput 
                            placeholder="Password"/>
                          </View>
              <TouchableOpacity style={styles.registerView}>
                <Text style={styles.registerText}>Login</Text>
              </TouchableOpacity>
                        
                    </View>
                      <View style={styles.foot}>
                                                          <Text style={styles.newText}>have an account?</Text>
                                                          <Pressable onPress={()=>navigation.navigate("Reg1")}>
                                                            <Text style={styles.loginText}>Register here</Text>
                                                          </Pressable>
                                                          </View>
                </View>
               
              </View>
        
            </View>
                       
  )}

  export default Reg2;
  const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:"white"
   },
 secondContainer:{
   
   width:'80%',
   height:'81%',
   alignSelf:'center',
   marginTop:40,
   borderRadius:50
 },
 thirdContainer:{
   width:'100%',
   height:'64%',
   borderRadius:50,
   backgroundColor:'skyblue',
   
   
 },
 
newAccountText:{
 fontSize:20,
 fontWeight:'bold',
 color:"white",
 marginTop:10,
 alignSelf:'center',
 marginBottom:10

},
lastContainer:{

 borderColor:'black',
 height:'87%',
 width:'100%',
 borderRadius:50,
 backgroundColor:'white'
},
ImageView: {
 flexDirection: 'row',
 justifyContent:'space-around',
 alignItems:'center',
 marginTop:10,
 marginLeft:50,
 marginRight:50
},
registerContainer:{
 borderWidth: 2,
 marginTop:10,
 marginRight:10,
 marginLeft:10,
 borderRadius:10,
 paddingLeft:10,
 borderColor:'skyblue'
},
registerView:{

 justifyContent:'center',
 alignItems:'center',
 padding:10, 
 marginRight:15,
 marginLeft:15,
 marginTop:10,
 borderRadius:30,
 backgroundColor:'skyblue'
},
registerText:{
 fontSize:20,
 fontWeight:'bold',
 color:'white'
},
foot:{
 justifyContent:'center',
 flexDirection:'row',
 marginTop:-25,
 marginRight:15,
},

loginText:{
 marginLeft:10,
 color:'skyblue',
 fontWeight:'bold',
},
  })