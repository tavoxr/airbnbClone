import React from 'react';
import {View, Text, Pressable} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const DestinationSearchCard = (props)=>{

    const navitagion = useNavigation();
    const {description} = props.destination

    return(
        <Pressable style={styles.destinationRow}
                onPress={()=> navitagion.navigate("Guests") }
        >
            <View style={styles.iconContainer}>
            <MaterialIcons name={"location-on"} size={30} />
            </View>
            <Text style={styles.textRow}>
                {description}
            </Text>
        </Pressable>

    );
}


export default DestinationSearchCard;


