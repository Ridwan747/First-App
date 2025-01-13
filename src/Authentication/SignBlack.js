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

const SignWhite = () => {
    return (



        <View style={styles.container}>
            <Image
                source={require("../../assets/images/up2.png")}
                style={{ hight: 1, marginLeft: 10, marginTop: 25, }}
            />

            <View style={styles.signIn}>
                <Text style={styles.sign}>Sign Up</Text>
                <TextInput style={styles.name}
                    placeholder='Name'
                />
                <TextInput style={styles.email}
                    placeholder='Email'
                />
                <TextInput style={styles.password}
                    placeholder='EnterPassword'
                    secureTextEntry={true}
                />
            </View>
            <View style={styles.Login}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.press}>Sign Up</Text>
                </TouchableOpacity>
                <Text style={styles.M}>make sure you put a strong password</Text>
                <Text style={styles.text}>or</Text>

                <View style={styles.ImageView}>
                    <Pressable>
                <Image
                source={require("../../assets/images/go3.png")}
                style={{ marginLeft: 10, marginTop: 25, borderRadius:10, backgroundColor:'black',  }}/>
                </Pressable>
                <Pressable>
                  <Image
                source={require("../../assets/images/fb2.png")}
                style={{ marginLeft: 10, marginTop: 25,borderRadius:10, backgroundColor:'black',}}/>
                </Pressable>
                <Pressable>
                  <Image
                source={require("../../assets/images/tw2.png")}
                style={{ marginLeft: 10, marginTop: 25,borderRadius:10, backgroundColor:'black',}}/>
                </Pressable>
                </View>
                 <View style={styles.foot}>
                      <Text style={styles.newText}>Don't have an account?</Text>
                      <Pressable>
                        <Text style={styles.loginText}>join now</Text>
                      </Pressable>
                      </View>
            </View>
            </View>
        
    )
}


export default SignWhite;

const styles = StyleSheet.create({

    container: {
        backgroundColor:'orange',
        flex: 1,
        justifyContent: 'center',
       
    },


    signIn: {
        paddingLeft: 15,
        marginTop: 35,

    },

    sign: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft: 3,

    },

    name: {
        marginTop: 25,
        fontWeight: 'bold',
        borderBottomWidth: 1,
        borderBottomColor: 'black',

    },
    email: {
        marginTop: 35,
        fontWeight: 'bold',
        borderBottomWidth: 1,
        borderBottomColor: 'black',

    },
    password: {
        marginTop: 35,
        fontWeight: 'bold',
        borderBottomWidth: 1,
        borderBottomColor: 'black',

    },
   


    button: {
        marginRight: 20,
        marginLeft: 20,
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        borderRadius: 15,
        backgroundColor: 'black'

    },
    press: {
        color: 'orange',
        fontWeight: 'bold',
    },

    M: {
        marginTop: 10,
      
        paddingLeft: 60,
    },

    text: {
        marginTop: 15,
        fontWeight: 'bold',
        paddingLeft:175,

    },

    ImageView: {
        flexDirection: 'row',
        justifyContent:'space-evenly',
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
})




