import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { RootStackParams } from '../../App';

const Home = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    <ScrollView style={HomeStyles.view}>
      <Text style={HomeStyles.title}>About Me</Text>

      <View style={HomeStyles.container}>
        <TouchableOpacity
          style={HomeStyles.card}
          onPress={() => {
            navigation.navigate('TV');
          }}>
          <Text style={HomeStyles.text}>TV Shows</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={HomeStyles.card}
          onPress={() => {
            navigation.navigate('Movies');
          }}>
          <Text style={HomeStyles.text}>Movies</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={HomeStyles.card}
          onPress={() => {
            navigation.navigate('Animations');
          }}>
          <Text style={HomeStyles.text}>Animations</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={HomeStyles.card}
          onPress={() => {
            navigation.navigate('Singers');
          }}>
          <Text style={HomeStyles.text}>Singers</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const HomeStyles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    // backgroundColor: 'gray',
    marginTop: 90,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: 100,
    backgroundColor: '#3b4044',
    borderRadius: 20,
    marginBottom: 30,
  },
  title: {
    width: '100%',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 30,
    color: 'white',
  },
  view: {
    backgroundColor: '#363636',
  },
  text: {
    fontSize: 50,
    color: 'white',
  },
});

export default Home;
