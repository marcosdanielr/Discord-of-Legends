import React from 'react';
import { View, FlatList } from 'react-native';
import { Guild, GuildProps } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';
import { styles } from './styles';

type Props = {
  enterGuildSelect: (guild: GuildProps) => void;
}



export function Guilds({enterGuildSelect}: Props) {
  const guilds = [
    {
      id: '1',
      name: 'zSnacks',
      icon: 'image.png',
      owner: true
    },

    {
      id: '2',
      name: 'Green Hill Zone',
      icon: 'image.png',
      owner: false
    },

    {
      id: '3',
      name: 'ÁREA 51',
      icon: 'image.png',
      owner: false
    },
        
  ]
  return (   
    <View style={styles.container}>
      <FlatList 
        data={guilds}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
         <Guild 
          data={item}
          onPress={() => enterGuildSelect(item)}/>
        )}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <ListDivider isCentered/>}
        contentContainerStyle={{paddingBottom:52}}        
        style={styles.guilds}
      />
      

    </View>
  );  
}