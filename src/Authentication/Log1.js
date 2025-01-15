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

const Log1 = () => {

  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/log1.png")}
        style={{ width: 100, height: 120, marginLeft: 10, marginTop: 25 }}
      />

      <View style={styles.logIn}>
        <Text style={styles.log}>Login</Text>
        <Text style={styles.In}>Login to continue using the app</Text>

        <Text style={styles.E}>Email</Text>
        <TextInput style={styles.email} placeholder="Enter your email" />
        <Text style={styles.P}>password</Text>
        <TextInput
          style={styles.password}
          placeholder="Enter Password"
          secureTextEntry={true}
        />
        <Pressable
        ><Text style={styles.fog}>Forgot password?</Text>
        </Pressable>
        
      </View>
      <View style={styles.Login}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.press}>Login</Text>
        </TouchableOpacity>
 </View>

 
 
      <Text style={styles.text}>or</Text>

      
            {/* */}
          <TouchableOpacity
                  style={styles.Go}
                  onPress={() => console.log("pressed")}
                >
                    <View style={styles.image}>
                 <Image
                            source={require("../../assets/images/go3.png")}
                            style={{marginTop:25, paddingRight:0, marginLeft: 10,   }}/>
                            
                  <Text style={styles.pass}>Login Using Google</Text>
                  </View>
                </TouchableOpacity>

                <View style={styles.foot}>
                                      <Text style={styles.newText}>Don't have an account?</Text>
                                      <Pressable onPress={()=>navigation.navigate("log2")}>
                                        <Text style={styles.loginText}>join now</Text>
                                      </Pressable>
                                      </View>
 </View>

        
        
   



  );
};
export default Log1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
  },
  logIn: {
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 10,
  },
  log: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#2f5bd9",
  },
  In: {
    marginBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: "black",
    padding: 60,
    paddingTop: 0,
    paddingBottom: 10,
  },
  E: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: "bold",
    marginRight: 195,
  },
  email: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 7,
    paddingHorizontal: 20,

    paddingRight: 130,
    paddingLeft: 9,

    marginLeft: 20,
    marginRight: 20,
    marginBottom: 15,
  },
  P: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: "bold",
    marginRight: 165,
  },
  password: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 7,
    paddingHorizontal: 20,

    paddingRight: 130,
    paddingLeft: 9,

    marginLeft: 20,
    marginRight: 20,
    marginBottom: 15,
  },
  fog: {
    fontSize: 14,
    marginBottom: 1,
    marginTop:-1,
    marginLeft: 130,
  },
  button: {
    marginRight: 30,
    marginLeft: 30,
    
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    paddingRight: 110,
    paddingLeft: 110,
    
    backgroundColor: "#2f5bd9",

},
press: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft:0,
},
text: {
    marginTop: 9,
    justifyContent: "center",
    alignSelf:'center',
    marginBottom: 10,
    fontSize: 15,
    
    fontWeight: 'bold',

},

Go: {
    padding: 3,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "lightgray",
    backgroundColor:'white',
    height:40,
   marginRight:30,
   marginLeft:30,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft:50,
    paddingRight:50,
    paddingBottom:30,
    

},
pass: {
    color: 'gray',
    fontWeight: 'bold',
    marginTop: 35,
    marginLeft:20,
    
    
    

},
image:{
    flexDirection:'row',
    alignContent:'space-evenly',
    
    
},

    foot:{
        justifyContent:'center',
        flexDirection:'row',
        marginTop:70,
        marginRight:15,
      },

      loginText:{
        marginLeft:10,
        color:'black',
        fontWeight:'bold',
      },
});
