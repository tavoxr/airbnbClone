import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SearchResultsScreen from '../screens/SearchResults';

const TopTab = createMaterialTopTabNavigator();

const SearchResultsTabNavigator = (props)=>{

    return(
        <TopTab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#f15454',
            
            }}
        >

            <TopTab.Screen
                name="list"
                component={SearchResultsScreen}

            />
             <TopTab.Screen
                name="map" component={SearchResultsScreen}
            />
        </TopTab.Navigator>
    );
}


export default SearchResultsTabNavigator;