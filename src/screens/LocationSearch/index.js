import React, {useState} from 'react';
import {View, Text, TextInput, FlatList} from 'react-native';
import styles from './styles';
import locations from '../../../assets/data/locations';


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
                renderItem={({item})=><Text>{item.description}</Text> }
            />


        </View>
    )
}


export default LocationSearchScreen
