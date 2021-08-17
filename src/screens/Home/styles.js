import {Platform, StyleSheet, Dimensions} from 'react-native'

const styles = StyleSheet.create({

image: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
    justifyContent: 'flex-start',
    
    
    
    
    

},
header:{
   /* backgroundColor:'red', */
    marginTop: '30%'

},
title:{
    fontSize: 85,
    fontWeight: 'bold',
    marginLeft: 25,
    color: '#fff',
    width: '70%',
},
button:{
    backgroundColor: '#fff',
    width: '50%',
    height: 40,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 25,
    marginTop: 20,
    
},
textBtn:{
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
    

},
searchBtn:{
    
    backgroundColor: '#fff',
    borderRadius: 35,
    height: 50,
    width: Dimensions.get('screen').width - 20, /* full width of the screen -  20 is the total of marginHorizontal 10 by each side (right, left) */
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    top:20,
    
    
    elevation:(Platform.OS === 'android') ? 100 : 0

    
},
searchBtnText:{
    color:'#000',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
    
    
},
searchIcon:{
   
}


});



export default  styles;