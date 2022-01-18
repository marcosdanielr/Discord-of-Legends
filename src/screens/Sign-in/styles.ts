import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles =  StyleSheet.create({
  container: {
    flex: 1,       
    alignItems: 'center',
    justifyContent: 'center',      
  },

  image: {
    width: '100%',
    height: 360,

    top: 65    
  },

  content: {
    marginTop: -40,
    paddingHorizontal: 50
  },

  siTitle: {
    color: theme.colors.titleb,

    fontFamily: theme.fonts.title700,
    fontSize: 40,
    textAlign: 'center',

    marginBottom: 26,
    marginTop: 12,

    lineHeight: 40
  },

  siSubtitle: {
    color: theme.colors.titleb,

    fontFamily: theme.fonts.title500,
    fontSize: 15,
    textAlign: 'center',

    marginBottom: 140,
    marginTop: -6,

    lineHeight: 25
  }


});