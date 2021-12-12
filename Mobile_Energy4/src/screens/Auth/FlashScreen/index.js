import React,{useState} from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, StatusBar, Dimensions, ToastAndroid } from 'react-native'
import {useNavigation} from '@react-navigation/native';
import { routes } from '../../../navigation/routes.js';
const {width}= Dimensions.get('window');
const {height}= Dimensions.get('window');


const FlashScreen =() =>{
    const navigation = useNavigation();
    setTimeout(() => {
        navigation.navigate(routes.BOTTOMTABBAR);
        }, 3000);

    return(
        <View style={styles.container}>
            <Image resizeMode='contain' source={require('../FlashScreen/Logooo.png')} style={styles.image}>
            </Image>  
            <Text style={styles.text}>
                Energy Mobile
            </Text>
        </View>
    )      
    
}
export default FlashScreen
const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#1DA1F2',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image:{
        width: 150,
        height: 150,
    },
    text:{
        color:'white',
        fontWeight:'bold',
        fontSize: 20,
    }
})

