import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
container:{
flexDirection: 'row',
justifyContent:'space-between',
alignItems: 'center',
paddingVertical: 20 ,
borderBottomWidth: 1,
borderColor: '#E0E0E0',
marginHorizontal: 20,
},
textContainer:{
    
},
typeOfGuest:{
 fontSize: 20,
 marginBottom: 3,
 fontWeight: 'bold'

},
minAge:{
    fontSize: 16,
    color: '#5b5b5b'

},
buttonsContainer:{
    flexDirection: 'row',
    

},
numOfGuests:{
    fontSize: 25,
    marginHorizontal: 10
}

})


export default  styles;
