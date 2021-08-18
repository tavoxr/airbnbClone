import React from 'react'
import { View, Text, FlatList } from 'react-native'
import Post from '../../components/Post/index'
import feed from '../../../assets/data/feed'
import styles from './styles'

const SearchResultsScreen = ()=>{

    const postsList = ()=>{

        feed.map((post)=>{
           return <Post  post={post} />
        })
    }
    return( 
        <View >
            <FlatList
                data={feed}
                renderItem={({item})=> <Post post={item} />}
            />
                
        </View>

    );
}


export default SearchResultsScreen;