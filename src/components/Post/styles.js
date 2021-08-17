import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
postContainer:{
    margin: 20
},
image:{
 width: '100%',
 aspectRatio: 3/2,
 resizeMode: 'cover',
 borderRadius: 10

},
postTextContainer:{
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 10,
    
},
bedsrooms:{
    color: '#5b5b5b'
},
description:{
    fontSize: 18,
    lineHeight: 26
},
oldPrice:{
    fontSize: 18,
    color: '#5b5b5b',
    textDecorationLine: 'line-through',
    

},
prices:{
    fontSize: 18,
    marginVertical: 7,

},
newPrice:{
    fontSize: 18,
    fontWeight: 'bold'
},
totalPrice:{
    color: '#5b5b5b',
    textDecorationLine: 'underline'
}

})

export default styles;