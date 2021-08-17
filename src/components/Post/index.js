import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles'

const Post = (props)=>{
    return(
        <View style={styles.postContainer}>
            <Image style={styles.image} 
                   source={{uri: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/2e/25/da/old-town-by-welcome-apartment.jpg?w=900&h=-1&s=1'}}
            />
            
            <View style={styles.postTextContainer}>
                {/* bed & bedroom */}
                <Text style={styles.bedsrooms} >1 bed - 1 bedroom</Text>
    
                {/* Type & description */}            
                <Text style={styles.description} numberOfLines={2}>Entire flat -Puerto de la Cruz
                    Bonito estudio con vistas en la laguna Lachua en Huehuetenango
                </Text>
    
                {/* Old price / new price */}        
                <Text style={styles.prices}>
                    <Text style={styles.oldPrice}>$43 </Text>
                    <Text style={styles.newPrice}> $45 </Text>
                    / text
                </Text>

                {/* tota price*/}                
                <Text style={styles.totalPrice}>$247 total</Text>
            </View>
            
            

        </View>

    );

}


export default Post;