import React, {useState} from 'react';
import {View, Text, TextInput, FlatList} from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import styles from './styles';
import destinations from '../../../assets/data/locations';
import DestinationSearchCard from '../../components/DestinationSearchCard';

const DestinationSearchScreen = (props)=>{
    const [destination, setDestination] = useState("");

    return(
        <View style={styles.destinationSearchContainer} >
            
            {/* Input Component */}
            <TextInput 
                style={styles.textInput}
                placeholder="Where are you going?"
                value={destination}
                onChangeText={setDestination}
                />

            {/* List of Locations */}
            <FlatList
                data={destinations}
                renderItem={({item})=> <DestinationSearchCard destination={item} /> }
            />


        </View>
    )
}


export default DestinationSearchScreen
