import React, { ReactNode } from 'react';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type Props = {
  title: string;
  action?: ReactNode;
}


export function Header({title, action}: Props) {
  const { secondary80, secondary75, titleb } = theme.colors;

  const navigation = useNavigation();



 function goToBack(){
   navigation.goBack();
 }

  return(
    <LinearGradient
      style={styles.container}
      colors={[secondary80, secondary75]}
    >

      <BorderlessButton onPress={goToBack}>
        <Feather 
          name="arrow-left"
          size={24}
          color={titleb}        
        />
      </BorderlessButton>

      <Text style={styles.title}>
        {title}
      </Text>

      {
        action ?
        <View>
          {action}
        </View>
        :
        <View style={{width: 24}}/>
      }      
    </LinearGradient>
  );    
}