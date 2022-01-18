import React, { ReactNode } from 'react';
import { View, Modal, ModalProps, TouchableWithoutFeedback } from 'react-native';
import { Background } from '../Background';
import { styles } from './styles';

type Props = ModalProps & {
  children: ReactNode;  
  closeModalV: () => void;
}

export function ModalView({children, closeModalV, ...rest}: Props) {    
  return(
    <Modal
      transparent
      animationType='slide'
      statusBarTranslucent
      {...rest}>

    <TouchableWithoutFeedback onPress={closeModalV}>
    <View style={styles.overlay}>
      <View style={styles.container}>
        <Background>
          <View style={styles.bar}/>
          { children }
        </Background>
      </View>    
    </View>    
    </TouchableWithoutFeedback>
    </Modal>
    
  );    
}