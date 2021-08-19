import React, {Children, useState} from 'react';
import {Pressable, View, Text,ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import GuestsCard from '../../components/GuestsCard/index'
import styles from './styles';

const GuestsScreen = ()=>{

    const [ adults, setAdults] = useState(0)
    const [ children, setChildren] = useState(0)
    const [ infants, setInfants] = useState(0)

    const navigation = useNavigation();

    const addGuest = (guest, setGuest)=>{  
        setGuest(guest +=1)
    }  
    
    const deleteGuest = (guest, setGuest)=>{
        if(guest !=  0) setGuest(guest -=1)
        
    }   

    return(
    <ScrollView
        contentContainerStyle={{flexGrow: 1}}
    >
    <View style={styles.container}>
        <View>
            <GuestsCard 
                typeOfGuest={"Adults"} 
                minAge={"Ages 12 or above"} 
                numOfGuests={adults} 
                setNumOfGuests={setAdults}
                addGuest={addGuest}
                deleteGuest={deleteGuest}
            />
            <GuestsCard 
                typeOfGuest={"Children"} 
                minAge={"Ages 2 - 11"} 
                numOfGuests={children} 
                setNumOfGuests={setChildren}
                addGuest={addGuest}    
                deleteGuest={deleteGuest}

            />
            <GuestsCard 
                typeOfGuest={"Infants"} 
                minAge={"Under 2"} 
                numOfGuests={infants} 
                setNumOfGuests={setInfants}
                addGuest={addGuest}    
                deleteGuest={deleteGuest}            
            />
        </View>

       
        <Pressable style={styles.searchBtn}
            onPress={()=> navigation.navigate("Home",{ //navigate to route Home in router
                screen: "Explore", //then pass through explore screen in HomeTabNavigation
                params:{
                    screen: "SearchResults" //pass through the params of the Explore Screen of ExploreNavigation
                },
                

            }) }
            
        >
            <Text style={styles.searchBtnText}>Search</Text>   
        </Pressable>
        

    </View>
    </ScrollView>
    );
}


export default GuestsScreen;

