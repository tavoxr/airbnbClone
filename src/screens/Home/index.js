import React from 'react';
import {View, Text, ImageBackground, Pressable, Alert, ScrollView} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import styles from './styles';
import BackgroundImage from '../../../assets/images/fondo1.jpg';
import {useNavigation} from '@react-navigation/native'

const HomeScreen = (props)=>{
    const navigation = useNavigation();

    return(
        <ScrollView
        contentContainerStyle={{flexGrow: 1}}
    >

        <View>
            {/* Serch Input*/}
           
            
            <ImageBackground source={BackgroundImage} style={styles.image}>
                 <Pressable style={styles.searchBtn}
                       onPress={()=> navigation.navigate("Destination Search")}
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

        </ScrollView>
    );

}

export default  HomeScreen;