import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 110,


    fontFamily: theme.fonts.text400,
    fontSize: 13,    
    textAlignVertical: 'top',
    marginRight: 4,
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,    
    borderColor: theme.colors.secondary85,

    color: theme.colors.titleb,
    backgroundColor: theme.colors.secondary75
  }
});