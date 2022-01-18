import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
      width: 104,
      height: 120,

      justifyContent: 'center',
      alignItems: 'center',      
      marginRight: 8,

      borderRadius: 8
  },

  content: {
    width: 100,
    height: 116,  
    borderRadius: 8, 

    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 20
  },

  titlew: {
    fontFamily: theme.fonts.title500,
    color: theme.colors.titleb,
    fontSize: 15,
    marginTop: 15
  },

  check: {
    position: 'absolute',
    top: 7,
    right: 7,
    width: 12, 
    height: 12,        

    borderWidth: 2,
    borderRadius: 3,  
    borderColor: theme.colors.secondary50,
    backgroundColor: theme.colors.secondary90
  },

  checked: {
    position: 'absolute',
    top: 7,
    right: 7,
    width: 12, 
    height: 12,     

    borderWidth: 2,
    borderRadius: 3,

    backgroundColor: theme.colors.secondary80
  }
}); 