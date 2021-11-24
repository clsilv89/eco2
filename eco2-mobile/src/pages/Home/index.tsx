import React, {useCallback} from 'react';
import {View, Image, Alert} from 'react-native';
import {useFocusEffect, useNavigation} from '@react-navigation/core';

import Tree from '../../assets/images/arvore.png';
import Book from '../../assets/images/book.png';
import Globe from '../../assets/images/globe.png';

import Header from '../../components/Header';
import Card from '../../components/Card';
import Container from '../../components/Container';

import {useUser} from '../../Context/user';
import Loading from '../../components/Loading';

const Home: React.FC = () => {
  const {user, loading, getUser} = useUser();
  const {navigate} = useNavigation();

  useFocusEffect(
    useCallback(() => {
      getUser();
    }, []),
  );

  if (loading) {
    return <Loading />;
  }

  return (
    <Container>
      <Header name={user.name} isHome avatar={user.avatar} />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Card
          Image={() => (
            <Image
              source={Tree}
              resizeMode="contain"
              style={{width: '100%', height: 60}}
            />
          )}
          style={{width: '48%'}}
          text="Plante uma arvóre"
          lessons={10}
          actual={2}
          onPress={() =>
            Alert.alert('Versão beta', 'Esta função ainda não esta disponível')
          }
        />

        <Card
          style={{width: '48%'}}
          Image={() => (
            <Image
              source={Book}
              resizeMode="contain"
              style={{width: '100%', height: 60}}
            />
          )}
          text="Aprenda"
          lessons={user.courses.coursesAvailable}
          actual={user.courses.coursesCompleted}
          // @ts-expect-error
          onPress={() => navigate('Courses')}
        />
      </View>

      <Card
        style={{marginVertical: 10}}
        Image={() => (
          <Image
            source={Globe}
            resizeMode="contain"
            style={{width: '100%', height: 60}}
          />
        )}
        stats={false}
        text="Emitir certicado de Carbono ZERO"
        lessons={10}
        actual={2}
        onPress={() =>
          Alert.alert('Versão beta', 'Esta função ainda não esta disponível')
        }
      />
    </Container>
  );
};

export default Home;
