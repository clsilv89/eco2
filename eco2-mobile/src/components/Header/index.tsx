import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import Text from '../Text';

interface IHeader {
  avatar: string;
  name: string;
  isHome?: boolean;
}

const Header: React.FC<IHeader> = ({name, avatar, isHome = false}) => {
  const {goBack} = useNavigation();
  return (
    <View style={style.header}>
      {isHome ? (
        <View style={style.nameBox}>
          <Text color="#fff" fontSize={20}>
            Olá
          </Text>
          <Text color="#fff" fontSize={20} style={style.headerName}>
            {name}
          </Text>
        </View>
      ) : (
        <TouchableOpacity style={style.backButton} onPress={() => goBack()}>
          {/* TODO Adicionar icone svg */}
          <Text weight="bold" color="#fff">
            Voltar
          </Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity
        style={style.avatarButton}
        onPress={() => console.log('header')}>
        <Image
          source={{uri: avatar}}
          height={48}
          width={48}
          style={{width: 48, height: 48}}
        />
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 80,
    alignItems: 'center',
  } as ViewStyle,
  avatarButton: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#fff',
    overflow: 'hidden',
    backgroundColor: '#AAAAB2',
  },
  backButton: {
    height: 48,
    width: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameBox: {
    flexDirection: 'column',
  },
  headerName: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Header;
