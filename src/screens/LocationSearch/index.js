import React, {useState} from 'react';
import {View, Text, TextInput, FlatList} from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import styles from './styles';
import locations from '../../../assets/data/locations';
import LocationSearch from '../../components/LocationSearch';

const LocationSearchScreen = (props)=>{
    const [location, setLocation] = useState("");

    return(
        <View style={styles.locationSearchContainer}>
            
            {/* Input Component */}
            <TextInput 
                style={styles.textInput}
                placeholder="Where are you going?"
                value={location}
                onChangeText={setLocation}
                />

            {/* List of Locations */}
            <FlatList
                data={locations}
                renderItem={({item})=> <LocationSearch location={item} /> }
            />


        </View>
    )
}


export default LocationSearchScreen
