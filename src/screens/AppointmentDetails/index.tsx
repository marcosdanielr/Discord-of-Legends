import React from 'react';
import { ImageBackground, Text, View, FlatList } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';
import { ButtonIcon } from '../../components/Button-icon';
import { styles } from './styles';
import { Header } from '../../components/Header';
import { Member } from '../../components/Member';
import { Background } from '../../components/Background';
import { ListHeader } from '../../components/ListHeader';
import { ListDivider } from '../../components/ListDivider';
import BannerImg from '../../assets/banner.png';
import { theme } from '../../global/styles/theme';


export function AppointmentDetails() {
  const members = [
    {
      id: '1',
      username: 'focinho sujo',
      avatar_url: 'https://i.pinimg.com/originals/8e/54/ec/8e54ec9e10e2a1764d3bd85fb5409d97.jpg',
      status: 'offline'
    },
    {
      id: '2',
      username: '~A',
      avatar_url: 'https://i.pinimg.com/originals/8e/54/ec/8e54ec9e10e2a1764d3bd85fb5409d97.jpg',
      status: 'offline'
    },
    {
      id: '3',
      username: 'roc roc',
      avatar_url: 'https://i.pinimg.com/originals/8e/54/ec/8e54ec9e10e2a1764d3bd85fb5409d97.jpg',
      status: 'online'
    },
  ] 
  return(
    <Background>

      <Header 
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto 
                name="share"
                size={24}
                color={theme.colors.primary}
            />
          </BorderlessButton>
        }
      />

      <ImageBackground source={BannerImg} style={styles.banner}>
      <View style={styles.bannerContent}>
      <Text style={styles.title}>
        zSnacks
      </Text>
      <Text style={styles.subtitle}>
        Doritos, Fandangos
      </Text>
      </View>
      </ImageBackground>

      <ListHeader 
        title="Invocadores"
        subtitle="Total 3"
      />
      <FlatList
        data={members}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Member data={item}/>          
        )}
        ItemSeparatorComponent={() => <ListDivider/>}
        style={styles.members}       
      />
      <View style={styles.footer}>  
      <View style={styles.button}>
      <ButtonIcon title="Entrar na partida"/>
      </View>
      </View>
    </Background>

  );    
}