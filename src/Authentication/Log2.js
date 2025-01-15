
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
  
  const Log2 = () => {
    const navigation = useNavigation()

    return (
      <View style ={styles.container}>
               <Image
                       source={require("../../assets/images/Log2.png")}             style={{ width:200, height: 220, marginLeft: 10, marginTop: 25 }}
                     /> 
                     <View style={styles.logIn}>
                             <Text style={styles.log}>Local Shop</Text>
                             <Text style={styles.In}>Find your daily neccessities at Brand.
                                World's largest fashion e-commerce has arrived in a mobile. shop now!
                             </Text>
                      </View>  
                        <View style={styles.Reg}>
                            <TouchableOpacity style={styles.press}>
                                <Text style={styles.textPress}>Login</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.R}
                            onPress={()=>navigation.navigate("log3")}
                            >
                                <Text style={styles.text}>Register</Text>
                            </TouchableOpacity>
                        </View>

      </View>
    )
};

export default Log2;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        
      },
      logIn: {
        marginTop:20,
        marginBottom: 20,
        
      },
      log:{
        textAlign: "center",
        fontSize:20,
        fontWeight: "bold",
        color: "#333333",
        padding:10,
        borderRadius:3,
        borderWidth:1,
        borderColor:'blue',
       
        
      },
      In:{
        textAlign: "center",
        fontSize:15,
        color: "#333333",
        marginTop:20,
        marginBottom:0,
        marginLeft:10,
        marginRight:10,
       
      },
      Reg: {
        marginTop:50,
        marginBottom: 20,
      },
      press:{
        backgroundColor: 'blue',
        padding:10,
        borderRadius:8,
        borderWidth:1,
        borderColor:'blue',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:20,
        marginRight:20,
        paddingLeft:100,
        paddingRight:100,
      },
      textPress:{
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
      },
      R:{
        backgroundColor: 'white',
        padding:10,
        borderRadius:8,
        borderWidth:1,
        borderColor:'black',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:20,
        marginRight:20,
        paddingLeft:100,
        paddingRight:100,
        marginTop:50,
      },
      text:{
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',
      }
})