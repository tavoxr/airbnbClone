import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import SearchResultsScreen from '../screens/SearchResults/index';

const Stack = createStackNavigator();

const Router = (props)=>{
    return(
        
        <Stack.Navigator
        
        
        >

            <Stack.Screen
                name={"Welcome"}
                component={HomeScreen}
                options={{
                    headerShown:false,
                    
                    
                }}
                
            />

            <Stack.Screen 
                name={"SearchResults"}
                component={SearchResultsScreen}
                options={{
                    title:"Search your destination",
                    headerTitleAlign: 'center',
                    
                }}
                
            />
            

            
        </Stack.Navigator>
    );
}

export default Router;