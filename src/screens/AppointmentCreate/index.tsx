import React, { useState } from 'react';
import {Text, View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { RectButton } from 'react-native-gesture-handler';
import { GuildProps } from '../../components/Guild';
import { styles } from './styles';
import { Header } from '../../components/Header';
import { Background } from '../../components/Background';
import { CategorySelect } from '../../components/CategorySelect';
import { theme } from '../../global/styles/theme';
import { SmallInput } from '../../components/SmallInput';
import { TextArea } from '../../components/TextArea';
import { GuildIcon } from '../../components/GuildIcon';
import { Button } from '../../components/Button';
import { ModalView } from '../../components/ModalView';
import { Guilds } from '../Guilds';

export function AppointmentCreate() {
  const [category, setCategory] = useState('');
  const [openGuildsModal, setOpenGuildsModal] = useState(false);
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

  function enterOpenGuilds(){
    setOpenGuildsModal(true);
  }

  function exitGuilds(){
    setOpenGuildsModal(false);
  }

  function enterGuildSelect(guildSelect: GuildProps){
    setGuild(guildSelect)
    setOpenGuildsModal(false);    
  }

  function enterCategorySelect(categoryId: string) {
    setCategory(categoryId);
  }
  
  return(
    <KeyboardAvoidingView 
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    style={styles.container}>
    
    <Background>
    <ScrollView>
      <Header 
        title="Agendar partida"
      />

      <Text style={[styles.label, {marginLeft: 24, marginTop: 36, marginBottom: 18}]}>
        Categoria
      </Text>

      <CategorySelect
        hasCheckBox
        setCategory={enterCategorySelect}
        categorySelected={category}      
      />

      <View style={styles.form}>
        <RectButton onPress={enterOpenGuilds}>
          <View style={styles.select}>

            {
             guild.icon ? <GuildIcon /> : <View style={styles.image}/>             
            }

            <View style={styles.selectBody}>
              <Text style={styles.label}>
                {guild.name ? guild.name : 'Selecione um servidor'}
              </Text>
            </View>

            <Feather 
              name="chevron-right"
              color={theme.colors.titleb}
              size={18}            
            />
            
          </View>
        </RectButton>        

        <View style={styles.field}>
          <View>
            <Text style={[styles.label, {marginBottom: 12}]}>
              Dia e m??s
            </Text>

            <View style={styles.column}>
              <SmallInput maxLength={2}/>
              <Text style={styles.divider}>
                /
              </Text>
              <SmallInput maxLength={2}/>
          </View>
          </View>
          <View>
            <Text style={[styles.label, {marginBottom: 12}]}>
              Hora e minuto
            </Text>

            <View style={styles.column}>
              <SmallInput maxLength={2}/>
              <Text style={styles.divider}>
                :
              </Text>
              <SmallInput maxLength={2}/>
          </View>
          </View>          
        </View>

        <View style={[styles.field, {marginBottom: 12}]}>
          <Text style={styles.label}>Descri????o</Text>
          <Text style={styles.charactersLimit}>Max 150 caracteres</Text>
        </View>

          <TextArea 
            multiline
            maxLength={150}
            numberOfLines={5}
            autoCorrect={false}            
          />

          <View style={styles.footer}>
            <Button title="Agendar"/>
          </View>
        </View>
    </ScrollView>
    </Background>

    <ModalView visible={openGuildsModal} closeModalV={exitGuilds}>
      <Guilds enterGuildSelect={enterGuildSelect}/>
    </ModalView>
    </KeyboardAvoidingView>
  );    
}