import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import ExploreNavigation from './ExploreNavigation';
import GuestsScreen from '../screens/Guests';

import { color } from 'react-native-reanimated';
import Fontisto from 'react-native-vector-icons/Fontisto';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const Tab = createBottomTabNavigator();

const HomeTabNavigator = (props)=>{
    return(
        <Tab.Navigator >
            <Tab.Screen
                name={"Explore"}
                component={ExploreNavigation}
                options={{
                    tabBarIcon:({color})=>(
                        <Fontisto name={"search"} size={25} color={color} />
                    ),
                    headerShown: false,
                    tabBarActiveTintColor: "#f15454"
                }}
            />
            <Tab.Screen
                name={"Saved"}
                component={GuestsScreen}
                options={{
                    tabBarIcon: ({color})=>(
                        <SimpleLineIcons name="heart" size={25} color={color} />
                    ),
                    headerShown: false,
                    tabBarActiveTintColor: "#f15454"
                }}
            />
            <Tab.Screen
                name={"Trips"}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({color})=>(
                        <Feather name="map" size={25} color={color} />
                    ),
                    headerShown: false,
                    tabBarActiveTintColor: "#f15454"
                    
                }}
            />
            <Tab.Screen
                name={"Inbox"}
                component={HomeScreen}

                options={{
                    tabBarIcon: ({color})=>(
                        <Feather name="message-square" size={25} color={color} />
                    ),
                    headerShown: false,
                    tabBarActiveTintColor: "#f15454"
                }}
            />
            <Tab.Screen
                name={"Profile"}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({color})=>(
                        <EvilIcons name="user" size={35} color={color} />
                    ),
                    headerShown: false,
                    tabBarActiveTintColor: "#f15454"
                }}
            />


        </Tab.Navigator>

    );
}


export default HomeTabNavigator;
