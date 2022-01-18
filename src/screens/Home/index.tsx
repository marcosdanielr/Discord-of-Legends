import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { styles } from './styles';
import { Profile } from '../../components/Profile';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { ListHeader } from '../../components/ListHeader';
import { Appointment } from '../../components/Appointment';
import { ListDivider } from '../../components/ListDivider';
import { Background } from '../../components/Background';
import { useNavigation } from '@react-navigation/native';


export function Home() {
  const [category, setCategory] = useState('');

  const navigation = useNavigation();

  const appointments =[
    {
      id: '1',
      guild: {
        id: '1',
        name: 'zSnacks',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 às 20h40',
      description: 'Doritos'
    },

    {
      id: '2',
      guild: {
        id: '1',
        name: 'zSnacks',
        icon: null,
        owner: false
      },
      category: '1',
      date: '22/06 às 20h40',
      description: 'Doritos'
    },        
  ]

  function enterCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  function enterAppointmentDetails(){
    navigation.navigate('AppointmentDetails');
  }

  function enterAppointmentCreate(){
    navigation.navigate('AppointmentCreate');
  }

  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd onPress={enterAppointmentCreate}/>
      </View>      
      
      <CategorySelect 
            categorySelected={category} 
            setCategory={enterCategorySelect}
      />
   
        <ListHeader 
            title="Partidas agendadas"
            subtitle="Total 6"
        />

        <FlatList 
            data={appointments}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
        <Appointment 
            data={item}
            onPress={enterAppointmentDetails}

        />)}
            ItemSeparatorComponent={() => <ListDivider />}
            contentContainerStyle={{paddingBottom:55}}
            style={styles.matches}
            showsVerticalScrollIndicator={false}              
        />
      
    </Background>
  );  
}