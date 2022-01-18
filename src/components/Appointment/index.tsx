import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import PlayerSvg from '../../assets/player.svg';
import CalenderSvg from '../../assets/calendar.svg';
import { GuildIcon } from '../GuildIcon';
import { Category } from '../Category';
import { categories } from '../../utils/categories';
import { GuildProps } from '../Guild';
import { LinearGradient } from 'expo-linear-gradient';

export type AppointmentProps = {
  id: string;
  guild: GuildProps;
  category: string;
  date: string;
  description: string;
}

type Props = RectButtonProps & {
  data: AppointmentProps;
}

export function Appointment({data, ...rest}: Props) {  
  const [category] = categories.filter(item => item.id === data.category);
  const {owner} = data.guild;
  const {primary, ownerc, bluelight, secondary40} = theme.colors;

  return(
    <RectButton {...rest}>
      <View style={styles.container}>
        <LinearGradient 
          style={styles.guildIconContainer}
          colors={[bluelight, secondary40]}>
        <GuildIcon />        
        </LinearGradient> 

        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>
              {data.guild.name}
            </Text>

            <Text style={styles.category}>
              {category.title}
            </Text>
          </View>

          <View style={styles.footer}>
            <View style={styles.dateInfo}>
              <CalenderSvg />
              <Text style={styles.date}>
                { data.date }
              </Text>
            </View>

            <View style={styles.playersInfo}>
              <PlayerSvg fill={owner ? ownerc : primary}/>

              <Text style={[
                styles.player, 
                { color: owner ? ownerc : primary}
              ]}>
                { owner ? 'Barão' : 'Minion'}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </RectButton>
    
    

  )    
}