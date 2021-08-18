import React, {Children, useState} from 'react';
import {View} from 'react-native';
import GuestsCard from '../../components/GuestsCard/index'
import styles from './styles';

const GuestsScreen = ()=>{

    const [ adults, setAdults] = useState(0)
    const [ children, setChildren] = useState(0)
    const [ infants, setInfants] = useState(0)

    const addGuest = (guest, setGuest)=>{  
        setGuest(guest +=1)
    }  
    
    const deleteGuest = (guest, setGuest)=>{
        if(guest !=  0) setGuest(guest -=1)
        
    }   

    return(
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
    );
}


export default GuestsScreen;

