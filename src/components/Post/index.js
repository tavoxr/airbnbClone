import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles'

const Post = (props)=>{

    const { id,
            image, 
            type, 
            title, 
            description, 
            bed , 
            bedroom,
            oldPrice,
            newPrice,
            totalPrice
        } = props.post

    return(
        <View style={styles.postContainer}>
            <Image style={styles.image} 
                   source={{uri: `${image}`}}
            />
            
            <View style={styles.postTextContainer}>
                {/* bed & bedroom */}
                <Text style={styles.bedsrooms} > {bed} bed - {bedroom} bedroom</Text>
    
                {/* Type & description */}            
                <Text style={styles.description} numberOfLines={2}>{type}. {description}</Text>
    
                {/* Old price / new price */}        
                <Text style={styles.prices}>
                    <Text style={styles.oldPrice}>${oldPrice} </Text>
                    <Text style={styles.newPrice}> ${newPrice} </Text>
                    / text
                </Text>

                {/* tota price*/}                
                <Text style={styles.totalPrice}>${totalPrice} total</Text>
            </View>
        </View>
    );
}

export default Post;