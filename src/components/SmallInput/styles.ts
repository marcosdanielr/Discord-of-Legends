import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: 48,
    height: 48,

    fontFamily: theme.fonts.text400,
    fontSize: 13,
    textAlign: 'center',

    marginRight: 4,
    borderWidth: 1,
    borderRadius: 8,

    borderColor: theme.colors.secondary85,
    color: theme.colors.titleb,
    backgroundColor: theme.colors.secondary75
  }
});