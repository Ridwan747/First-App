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
import AppleLogo from 'react-native-vector-icons/AntDesign'
import { sortRoutes } from "expo-router/build/sortRoutes";

const Linlogin = () => {
  return (
    <View style={styles.container}>
        <View style={styles.majorView}>
            <View style={styles.images}>
            <Image
            source={require("../../assets/images/login.png")}
            style={{width:100, height:100}}
            resizeMode='cover'
            />
            </View>
      {/* <View style={styles.textContainer}>
        <Text style={styles.textTitle}>Sign in</Text>
        <Text style={styles.textDesign}>
          Stay updated on your professional world{" "}
        </Text>
      </View> */}
      <TextInput 
      style={styles.emailInputStyle} 
      placeholder="Email or Phone"
      keyboardType='email-address' />
      <TextInput 
      style={styles.passwordInputStyle}
       placeholder="Password" 
       secureTextEntry
       />
      <Pressable
        style={styles.show}
        onPress={() => console.log("show password")}
      >
        <Text style={styles.showText}>show</Text>
      </Pressable>

      <TouchableOpacity style={styles.forgotPass}>
        <Text style={styles.pass}>forgot password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.SigninBTn}>
        <Text style={styles.SigninText}>Sign In</Text>
      </TouchableOpacity>

      <View style={styles.orStyle}>
      <Text style={styles.orInputStyle}>or</Text>
      </View>

      <TouchableOpacity
        style={styles.apple}
        onPress={() => console.log("pressed")}
      >
        <View style={styles.logo}>
        <AppleLogo
        name="apple1"
        size={15}
        style={{marginRight:5, marginTop:1}}
        />
        <Text style={styles.appleText}>Sign in with Apple</Text>
        </View>
      </TouchableOpacity>
      </View>

    <View style={styles.foot}>
      <Text style={styles.newText}>New to Linkedln?</Text>
      <Pressable>
        <Text style={styles.joinText}>join now</Text>
      </Pressable>
      </View>
    
    </View>
  );
};

export default Linlogin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
    alignContent: "center",
    justifyContent: "center",
    marginLeft: 21,
  },

  textTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 1,
    marginTop: 3,
    paddingTop: 1,
  },

  textDesign: {
    fontSize: 11,
    color: "black",
    marginBottom: 15,
  },

  emailInputStyle: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginLeft: 30,
    marginRight:30,
    marginBottom: 15,
  },

  passwordInputStyle: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    paddingVertical: 10,
    marginLeft: 30,
    marginRight:30,
  },

  pass: {
    color: "#2250a1",
    marginLeft: 45,
    fontWeight: "bold",
  },

  SigninBTn: {
    marginRight: 30,
    marginLeft: 30,
    
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 30,
    backgroundColor: "#2250a1",
  
  },

  SigninText: {
    color: "white",
    textAlign: "center",
    fontSize: 12,
    fontWeight: "",
    marginLeft: 5,
  },

  orInputStyle: {
    marginTop: 9,
    justifyContent: "center",
    alignSelf:'center',
    marginBottom: 10,
    fontSize: 11,
  },

  apple: {
    backgroundColor: "white",
    padding: 5,
    borderRadius: 60,
    borderWidth: 1,
    borderColor: "lightgray",
    marginBottom: 20,
   marginRight:30,
   marginLeft:30,
    justifyContent: "center",
    alignItems: "center",
  },

  newInputStyle: {
    paddingLeft: 500,
    marginLeft: 5,
  },

  join: {
    marginTop: 10,
    marginBottom: 20,
    paddingLeft: 170,
  },

  show: {
    marginTop: 10,
    marginBottom: -10,
    paddingLeft: 190,
  },

  showText: {
    marginTop: -50,
    color: "#2250a1",
    fontWeight: "bold",
   marginLeft:30,
   fontSize:13
  },
  logo:{
    flexDirection:'row',
   
  },
  foot:{
    justifyContent:'center',
    alignItems:"center",
    flexDirection:'row',
    marginTop:20,
    marginRight:20
  },
  joinText:{
    marginLeft:15,
    color:'blue',
    fontWeight:'bold'
  },
  majorView:{
    borderRadius:20,
    elevation:10,
    backgroundColor:'white',
    height:'60%'
  },
  textContainer:{
    marginTop:10,
    marginRight:30,
    marginLeft:30,
    marginBottom:10
  },
  orStyle:{
    justifyContent:'center',
    alignItems:'center'
  },
  images:{
    justifyContent:'center',
    alignItems:'center',
    marginBottom:20,
    marginTop:10
  }
});
