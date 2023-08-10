import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#131016',
      padding: 24
    },
  
    eventName: {
      color: '#fff', 
      fontSize: 24, fontWeight: 'bold', 
      marginTop: 48
    },
  
    infoDate: {
      color: '#6B6B6B', 
      fontSize: 16
    },

    input_outline: {
        flex: 1,
        height: 56,
        backgroundColor: '#1F1E25',
        borderRadius: 5,
        color: '#FFF',
        padding: 16,
        fontSize: 16,
        marginRight: 12
        
    },

    btn:{
        width: 56,
        height: 56,
        backgroundColor: '#1fd4b5',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
        
        
    },

    buttonTxt: {
        fontSize: 16,
        color: '#fff'
    },

    forms: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 36,
        marginBottom: 42

    },

    listEmptyTxt: {
      color: '#fff',
      fontSize: 14,
      textAlign: 'center'
    }
  
  
  })