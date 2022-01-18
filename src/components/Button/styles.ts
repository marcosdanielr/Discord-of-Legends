import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: 56,

      bottom: 35,
      flexDirection: 'row',
      alignItems: 'center',

      borderRadius: 8,      

      backgroundColor: theme.colors.primary    
      
      
  },
  bTitle: {
    flex: 1,
    fontSize: 15,
    textAlign: 'center',  
    fontFamily: theme.fonts.text500,

    color: theme.colors.titleb
  },

}); 