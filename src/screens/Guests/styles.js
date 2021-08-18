import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

container:{
 flexDirection: 'column',
 justifyContent: 'space-between',
 height: '100%'

},
searchBtn:{
    marginBottom: 20,
    marginTop:20,
    marginHorizontal:20,
    backgroundColor:'#f15454',
    justifyContent: 'center',
    alignItems: 'center',  
    paddingVertical:12,
    borderRadius: 10,
    elevation: 4
    
},
searchBtnText:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'

}


})


export default  styles;
