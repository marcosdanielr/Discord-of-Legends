import React from 'react';
import { Image } from 'react-native';
import { styles } from './styles';


export function GuildIcon() {  
  const uri = 'https://www.paodeacucar.com/img/uploads/1/439/11964439.jpg'
  
  return(
    <Image source={{uri}}
           style={styles.image}
           resizeMode='cover'/>
  );    
}