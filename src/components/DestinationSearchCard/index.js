import React from 'react';
import {View, Text} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import styles from './styles';

const DestinationSearchCard = (props)=>{

    const {description} = props.destination

    return(
        <View style={styles.destinationRow}>
            <View style={styles.iconContainer}>
            <MaterialIcons name={"location-on"} size={30} />
            </View>
            <Text style={styles.textRow}>
                {description}
            </Text>
        </View>

    );
}


export default DestinationSearchCard;


