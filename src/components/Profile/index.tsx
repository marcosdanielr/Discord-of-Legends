import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { Avatar } from '../Avatar';

export function Profile() {
  return(
    <View style={styles.container}> 

      <Avatar urlImage="https://i.pinimg.com/originals/8e/54/ec/8e54ec9e10e2a1764d3bd85fb5409d97.jpg"/>

     <View>
       <View style={styles.user}>
         <Text style={styles.greeting}>Olá,</Text>
         <Text style={styles.username}>focinho sujo</Text>
       </View>
       <Text style={styles.message}>oinc oinc</Text>
     </View>
    
    </View>
  )  
  
}