import React, {useEffect} from 'react';
import {View, Text, Pressable, Alert} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import styles from './styles';


const GuestsCard = (props)=>{

        const { typeOfGuest, 
                minAge, 
                numOfGuests, 
                setNumOfGuests,
                addGuest,
                deleteGuest
            } = props

    

    return(
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.typeOfGuest}>{typeOfGuest}</Text>
                <Text style={styles.minAge}>{minAge}</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <Pressable
                    onPress={()=> deleteGuest(numOfGuests,setNumOfGuests)}
                >
                    <EvilIcons name={"minus"} size={43} color={"#909090"}  />
                </Pressable>
                <Text style={styles.numOfGuests}>{numOfGuests}</Text>
                <Pressable
                    onPress={()=>addGuest(numOfGuests,setNumOfGuests)}
                >
                    <EvilIcons name={"plus"} size={43} color={"#909090"} />
                </Pressable>

            </View>
        </View>

    );
}


export default GuestsCard;

