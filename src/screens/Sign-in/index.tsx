import React from 'react';
import { View, Text, Image, Alert, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import IllustrationImg from '../../../src/assets/illustration.png'; 
import { ButtonIcon } from '../../components/Button-icon';
import { Background } from '../../components/Background';
import { theme } from '../../global/styles/theme';
import { useAuth } from '../../hooks/auth';

export function SignIn() {    
  const {loading, signIn} = useAuth();

  async function enterDisc() {
    try {
      await signIn();
    } catch (error){
      Alert.alert('error');
    }    
  }

  return(
    <Background>
    <View style={styles.container}>      
      <Image source={IllustrationImg} 
      style={styles.image} 
      resizeMode="stretch"
      />
      
      <View style={styles.content}>
                
      <Text style={styles.siTitle}>Conecte-se{'\n'}
      e{'\n'}
      organize-se
      </Text>  
      <Text style={styles.siSubtitle}>Crie grupos para jogar League of Legends{'\n'} 
      com seus amigos
      </Text>     
        {
          loading ? <ActivityIndicator color={theme.colors.primary} /> :
          <ButtonIcon 
            title="Entrar com Discord"
            onPress={enterDisc}
          />  
        }             
      </View>    
    </View>
      </Background>
  );
}