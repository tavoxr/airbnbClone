import React from 'react';
import {View, Text, ImageBackground, Pressable, Alert, TouchableOpacity} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto'
import styles from './styles';
import BackgroundImage from '../../../assets/images/fondo1.jpg'
const HomeScreen = (props)=>{
    return(
        <View>
            {/* Serch Input*/}
           
            
            <ImageBackground source={BackgroundImage} style={styles.image}>
                 <Pressable style={styles.searchBtn}
                       onPress={()=> Alert.alert('Hola')}
                    >
                    <Fontisto name="search" style={styles.searchIcon} size={25} color={"#f15454"}  />
                    <Text style={styles.searchBtnText}>
                        Where are you going?
                    </Text>
            </Pressable>

                <View style={styles.header}>
                <Text style={styles.title}>Go Near</Text>
                
                <Pressable 
                    style={styles.button}
                    onPress={()=>console.warn( {data: 'Exprore btn clicked'})}
                >
                    <Text style={styles.textBtn}>
                        Explore nearby stays
                    </Text>
                </Pressable>
                </View>

            </ImageBackground>
        </View>
    );

}

export default  HomeScreen;